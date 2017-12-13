
import BaseDrawingBoardControl from './BaseDrawingBoardControl';

let ExtendVerticalButton = BaseDrawingBoardControl.extend({

  name: 'extendVertical',
  
  initialize: function() {
    this.initializeDefault();
    this.$el.append(`
      <button class="drawing-board-control-extend-vertical-button">
        <i class="flaticon-arrows-1"></i>
      </button>
    `);

    this.$el.on('click', '.drawing-board-control-extend-vertical-button', (e)=>{
        this.board.__extend.extendHeight();
        let $body = $("body");
        $body.animate({
          scrollTop:$body.get(0).scrollHeight
        }, 1000)
        e.preventDefault()
    })
  },

  DEFAULT_TIP_TEXT:'手寫範圍加長',
});

export default ExtendVerticalButton;

