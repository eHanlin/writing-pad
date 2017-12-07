
import {DATA_SHOW_TIP} from '../constants/WriteAttribute';
import BaseDrawingBoardControl from './BaseDrawingBoardControl';

let QuestionButton = BaseDrawingBoardControl.extend({

  name: 'question',
  
  initialize: function() {
    this.initializeDefault();

    this.$el.append(`
      <button class="drawing-board-control-question-button">
        <i class="fa fa-question" aria-hidden="true"></i>
      </button>
    `);

    this.$el.on('click', '.drawing-board-control-question-button', (e)=> {
      let $boardEl = this.board.__extend.$el;

      if ($boardEl.attr(DATA_SHOW_TIP)) {
        $boardEl.removeAttr(DATA_SHOW_TIP);
      } else {
        $boardEl.attr(DATA_SHOW_TIP, true);
      }

      e.preventDefault()
    });
  },

  DEFAULT_TIP_TEXT:'按鍵說明'

});

export default QuestionButton;



