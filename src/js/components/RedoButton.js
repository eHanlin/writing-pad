
import BaseDrawingBoardControl from './BaseDrawingBoardControl';
import {UPDATE_HISTORY, SWITCH_HISTORY_KEY} from '../constants/Event';

let RedoButton = BaseDrawingBoardControl.extend({

  name:'redo',

  initialize: function(){
    this.initializeDefault();

    this.$el.append(`
      <button class="drawing-board-control-redo-button">
        <i class="flaticon-arrows-2" aria-hidden="true"></i>
      </button>
    `);

    this.$el.on('click', '.drawing-board-control-redo-button', (e)=> {
      this.board.__extend.historyManager.redo();
      this.resetRedoButton();
    });
    setTimeout(()=> this._init());
  },

  _init: function(){
    this.resetRedoButton();
    this.board.__extend.on(SWITCH_HISTORY_KEY, ()=> {
      this.resetRedoButton();
    });
    this.board.__extend.on(UPDATE_HISTORY, ()=> {
      this.resetRedoButton();
    });
  },

  resetRedoButton: function(){
    try {
      let canRedo = this.board.__extend.historyManager.canRedo();
      let redoButton = this.$el.find('button');
      if (!canRedo) redoButton.prop('disabled', true); else redoButton.prop('disabled', false);
    } catch (e) {
      console.warn(e);
    }
  },

  DEFAULT_TIP_TEXT:'回下一步'

});

export default RedoButton;

