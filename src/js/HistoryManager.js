
import * as canvasUtils from './utils/canvasUtils';
import {START_DRAWING, STOP_DRAWING, DRAWING} from './constants/Event';
import {UPDATE_HISTORY, SWITCH_HISTORY_KEY} from './constants/Event';

class HistoryManager {

  constructor(pad, opts = {}) {
    this.pad = pad;
    this.histories = {};
    this._initEvent();
    this._currentKey = `default_${+new Date()}`;
    this.opts = opts;
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
      maxLength:this.opts.maxLength,
      provider:(done)=> {
        done(canvasUtils.copyCanvas(this._getPadCanvas()));
      },
      onUpdate:()=> {
        this.pad.trigger(UPDATE_HISTORY);
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

  switchKey(key) {
    this._currentKey = key;
    this.pad.trigger(SWITCH_HISTORY_KEY);
  }

  saveByKey(key) {
    let exist = this.containKey(key);
    let history = this._getHistory(key);
    if (exist) history.stack[history.position] = canvasUtils.copyCanvas(this._getPadCanvas());
    this.switchKey(key);
  }

  restoreByKey(key) {
    let history = this._getHistory(key);
    let historyCanvas = history.stack[history.position];
    this._drawPadFrom(historyCanvas);
    this.switchKey(key);
  }

  containKey(key) {
    return !!this.histories[key];
  }

  deleteKey(key) {
    delete this.histories[key];
  }

  undo() {
    let history = this._getHistory(this._currentKey);
    history.undo((canvas)=> {
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

