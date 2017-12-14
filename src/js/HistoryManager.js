
import * as canvasUtils from './utils/canvasUtils';
import {START_DRAWING, STOP_DRAWING, DRAWING} from './constants/Event';

class HistoryManager {

  constructor(pad) {
    this.pad = pad;
    this.histories = {};
    this._initEvent();
    this._currentKey = `default_${+new Date()}`;
  }

  _initEvent() {
    this.pad.on(STOP_DRAWING, ()=> {
      let history = this._getHistory(this._currentKey);
      history.save();
    });
  }

  _getHistory(key) {
    let history = this.histories[key];
    if (!history) history = this.histories[key] = this._createHistory();
    return history;
  }

  _createHistory() {
    let history =  new SimpleUndo({
      maxLength:5,
      provider:(done)=> {
        done(canvasUtils.copyCanvas(this._getPadCanvas()));
      },
      onUpdate:()=> {
      
      }
    });
    history.initialize(canvasUtils.copyCanvas(this._getPadCanvas()));
    return history;
  }

  _getPadCanvas() {
    return this.pad.board.canvas;
  }

  _drawPadFrom(canvas) {
    this.pad.board.clear();
    canvasUtils.drawFrom(this._getPadCanvas(), canvas); 
  }

  saveByKey(key) {
    let history = this._getHistory(key);
    history.save();
    this._currentKey = key;
  }

  restoreByKey(key) {
    let history = this._getHistory(key);
    let historyCanvas = history.stack[history.position];
    console.log(history)
    $(document.body).append(historyCanvas);
    this._drawPadFrom(historyCanvas);
    this._currentKey = key;
  }

  containKey(key) {
    return !!this.histories[key];
  }

  deleteKey(key) {
    delete this.histories[key];
  }

  undo() {
    let history = this._getHistory(this._currentKey);
    console.log(history.stack);
    history.undo((canvas)=> {
      console.log(canvas);
      this._drawPadFrom(canvas)
    });
  }

  redo() {
    let history = this._getHistory(this._currentKey);
    history.redo((canvas)=> this._drawPadFrom(canvas));
  }

  canUndo() {
    let history = this._getHistory(this._currentKey);
    return history.canUndo();
  }

  canRedo() {
    let history = this._getHistory(this._currentKey);
    return history.canRedo();
  }
}

export default HistoryManager;

