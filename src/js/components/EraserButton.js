
import $ from 'jquery';
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

