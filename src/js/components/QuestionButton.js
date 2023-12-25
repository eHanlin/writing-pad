
import {DATA_SHOW_TIP} from '../constants/WriteAttribute';
import BaseDrawingBoardControl from './BaseDrawingBoardControl';

const WRITING_PAD_CONFIG_KEY = 'ehanlin-writing-pad-confg'

let QuestionButton = BaseDrawingBoardControl.extend({

  name: 'question',
  
  initialize: function() {
    this.initializeDefault();

    this.$el.append(`
      <button class="drawing-board-control-question-button">
        <i class="flaticon-signs" aria-hidden="true"></i>
      </button>
    `);

    window.onload = () => {
      const config = JSON.parse(localStorage.getItem(WRITING_PAD_CONFIG_KEY) || '{}')
      if (!config.firstOpenDate) {
        const $boardEl = this.board.__extend.$el
        $boardEl.attr(DATA_SHOW_TIP, true)

        setTimeout(() => {
          $boardEl.removeAttr(DATA_SHOW_TIP)
        }, 5000)

        config.firstOpenDate = new Date()
        localStorage.setItem(WRITING_PAD_CONFIG_KEY, JSON.stringify(config))
      }
    }

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



