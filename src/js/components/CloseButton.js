
import BaseDrawingBoardControl from './BaseDrawingBoardControl';

let CloseButton = BaseDrawingBoardControl.extend({

  name: 'close',
  
  initialize: function() {
    this.initializeDefault();
    this.$el.append(`
      <button class="drawing-board-control-close-button">
        <i class="flaticon-close"></i>
      </button>
    `);

    this.$el.on('click', '.drawing-board-control-close-button', (e)=> {
        this.board.__extend._onClose()
        this.board.__extend.hide()
        e.preventDefault()
    });
  },

  DEFAULT_TIP_TEXT:'關閉手寫板'
});

export default CloseButton;

