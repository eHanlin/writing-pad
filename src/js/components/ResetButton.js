
import $ from 'jQuery';
import BaseDrawingBoardControl from './BaseDrawingBoardControl';

let ResetButton = BaseDrawingBoardControl.extend({

  name:'reset',

  _initElement: function(){
    this.$el.append(`
      <button class="drawing-board-control-reset-button">
        <i class="fa fa-repeat" aria-hidden="true"></i>
      </button>
    `);
  },

  initialize: function(){
    this.initializeDefault();
    this._initElement();

    if (this.opts.confirmationText) this.confirmationText = this.opts.confirmationText;
    if (this.opts.disabledConfirmation) this.disabledConfirmation = this.opts.disabledConfirmation;

    this.$el.on('click', 'button', (e)=>{
      e.preventDefault();
      setTimeout(()=> {
        if (this.disabledConfirmation || confirm(this.confirmationText)) {
          this.board.__extend.resize()
          this.board.clear()
        }
      },350);
    })
  },

  DEFAULT_TIP_TEXT:'全部清除',

  confirmationText:'確定要清除手寫板?',

  disabledConfirmation:false

});

export default ResetButton;

