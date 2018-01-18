
import $ from 'jQuery';
import BaseDrawingBoardControl from './BaseDrawingBoardControl';
import {CHANGE_PEN_COLOR, CHANGE_DRAWING_COLOR, RESET_COLOR_PICKER} from '../constants/Event';

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

  switchColor: function(color) {
    let active = this._isActive();
    this.color = color;
    this.switchButtonColor(color);
    if (active) {
      this.board.setColor(color);
      this.board.ev.trigger(RESET_COLOR_PICKER, {color:color})
    }
    this.board.__extend.trigger(CHANGE_DRAWING_COLOR, {color:color, id:this.id, type:'control', active: active});
  },

  _isActive: function() {
    return this.getButtonElement().hasClass('active');
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
    if (this._isActive()) {
      let color = evt.color;
      this.switchColor(color);
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

