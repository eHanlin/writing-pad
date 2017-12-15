
import BaseDrawingBoardControl from './BaseDrawingBoardControl';
import {UPDATE_HISTORY, SWITCH_HISTORY_KEY} from '../constants/Event';

let UndoButton = BaseDrawingBoardControl.extend({

  name:'undo',

  initialize: function(){
    this.initializeDefault();

    this.$el.append(`
      <button class="drawing-board-control-undo-button">
        <i class="flaticon-arrows" aria-hidden="true"></i>
      </button>
    `);

    this.$el.on('click', '.drawing-board-control-undo-button', (e)=> {
      this.board.__extend.historyManager.undo();
      this.resetUndoButton();
    });
    setTimeout(()=> this._init());
  },

  _init: function(){
    this.resetUndoButton();
    this.board.__extend.on(SWITCH_HISTORY_KEY, ()=> {
      this.resetUndoButton();
    });
    this.board.__extend.on(UPDATE_HISTORY, ()=> {
      this.resetUndoButton();
    });
  },

  resetUndoButton: function(){
    try {
      let canUndo = this.board.__extend.historyManager.canUndo();
      let undoButton = this.$el.find('button');
      if (!canUndo) undoButton.prop('disabled', true); else undoButton.prop('disabled', false);
    } catch (e) {
      console.warn(e);
    }
  },

  DEFAULT_TIP_TEXT:'回上一步'

});

export default UndoButton;

