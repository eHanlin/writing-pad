
import $ from 'jQuery';
import BaseDrawingBoardControl from './BaseDrawingBoardControl';
import {CHANGE_PEN_COLOR, CHANGE_PEN_SIZE, CHANGE_DRAWING_COLOR, RESET_COLOR_PICKER, CHANGE_DRAWING_SIZE} from '../constants/Event';

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

  _resetColorPicker:function() {
    this.board.ev.trigger(RESET_COLOR_PICKER, {color:this.color, lineWidth:this.lineWidth});
  },

  switchSize: function(size) {
    let active = this._isActive();
    this.lineWidth = size;
    if (active) {
      this.board.ctx.lineWidth = size;
      this._resetColorPicker();
    }
    this.board.__extend.trigger(CHANGE_DRAWING_SIZE, {color:this.color, id:this.id, type:'control', active: active, lineWidth:this.lineWidth});

  },

  switchColor: function(color) {
    let active = this._isActive();
    this.color = color;
    this.switchButtonColor(color);
    if (active) {
      this.board.setColor(color);
      this._resetColorPicker();
    }
    this.board.__extend.trigger(CHANGE_DRAWING_COLOR, {color:color, id:this.id, type:'control', active: active, lineWidth:this.lineWidth});
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
    this.board.ev.bind(CHANGE_PEN_SIZE, this.onChangeSize.bind(this));
  },

  onChangeSize: function(evt){
    if (this._isActive()) {
      this.switchSize(evt.size)
    }
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

    if ($target.hasClass('active')) {
      $target.removeClass('active');
      this.board.canvas.classList.add('move-mode');
      return;
    }

    this.board.canvas.classList.remove('move-mode');
    this.board.ctx.lineWidth = this.lineWidth;
    this.board.setColor(this.color);
    this.board.setMode(mode);
    $target.addClass('active');
    this._resetColorPicker();
  },

  onChangedMode: function() {
    this.getButtonElement().removeClass('active');
  },

  DEFAULT_TIP_TEXT:'色筆',

  color:'rgba(0, 0, 0, 1)',

  lineWidth: '2'

});


export default DrawingButton;

