
import $ from 'jQuery';
import BaseDrawingBoardControl from './BaseDrawingBoardControl';

let EraserButton = BaseDrawingBoardControl.extend({

  name:'eraser',

  _initElement: function() {
    this.$el.append(`
      <button data-mode="${this.name}">
        <i class="flaticon-remove"></i>
      </button>`
    );
  },

  initialize: function() {
    this.initializeDefault();
    this._initElement();
    this.$el.on('click', 'button', this.onClick.bind(this));
    this.board.ev.bind('board:mode', this.onChangedMode.bind(this));
    if (this.opts.lineWidth) this.lineWidth = this.opts.lineWidth;
  },

  getButtonElement: function (){
    return this.$el.find('button');
  },

  onClick: function(e){
    e.preventDefault();
    let $target = $(e.currentTarget);
    let mode = $target.attr('data-mode');

    if ($target.hasClass('active')) {
      $target.removeClass('active');
      this.board.canvas.classList.add('move-mode');
      return;
    }

    this.board.canvas.classList.remove('move-mode');
    this.board.ctx.lineWidth = this.lineWidth;
    this.board.setMode(mode);
    $target.addClass('active');
  },

  onChangedMode: function() {
    this.getButtonElement().removeClass('active');
  },

  DEFAULT_TIP_TEXT:'橡皮擦',

  lineWidth: '15'

});

export default EraserButton;

