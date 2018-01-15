
import $ from 'jQuery';
import BaseDrawingBoardControl from './BaseDrawingBoardControl';
import {CHANGE_PEN_COLOR} from '../constants/Event';

let DrawingButton = BaseDrawingBoardControl.extend({

  name:'drawing',

  _initElement: function(ELEMENT_CLASS_NAME) {
    this.$el.append(`
      <button class="${ELEMENT_CLASS_NAME}" data-mode="pencil">
        <i class="flaticon-tool"></i>
      </button>
    `);
    this.$el.addClass('drawing-pen');
    this.switchButtonColor(this.color);
  },

  switchButtonColor: function(color) {
    this.getButtonElement().css('color', this.color);
  },

  _initOpts: function(opts) {
    let {lineWidth, color} = opts;
    if (lineWidth) this.lineWidth = lineWidth;
    if (color) this.color = color;
  },

  initialize: function() {
    let ELEMENT_CLASS_NAME = 'drawing-board-control-customize-drawing-button';

    this._initOpts(this.opts || {});
    this.initializeDefault();
    this._initElement(ELEMENT_CLASS_NAME);
    this.$el.on('click', `.${ELEMENT_CLASS_NAME}`, this.onClick.bind(this));
    this.board.ev.bind('board:mode', this.onChangedMode.bind(this));
    this.board.ev.bind(CHANGE_PEN_COLOR, this.onChangeColor.bind(this));
  },

  onChangeColor: function(evt) {
    if (this.getButtonElement().hasClass('active')) {
      let color = evt.color;
      this.color = color;
      this.board.setColor(color);
      this.switchButtonColor(color);
    }
  },

  getButtonElement: function (){
    return this.$el.find('button');
  },

  onClick: function(e) {
    e.preventDefault();
    let $target = $(e.currentTarget);
    let mode = $target.attr('data-mode');
    this.board.ctx.lineWidth = this.lineWidth;
    this.board.setColor(this.color);
    this.board.setMode(mode);
    $target.addClass('active');
  },

  onChangedMode: function() {
    this.getButtonElement().removeClass('active');
  },

  DEFAULT_TIP_TEXT:'筆',

  color:'rgba(0, 0, 0, 1)',

  lineWidth: '2'

});


export default DrawingButton;

