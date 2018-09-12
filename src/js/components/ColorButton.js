
import $ from 'jQuery';
import BaseDrawingBoardControl from './BaseDrawingBoardControl';
import {CHANGE_PEN_COLOR, OPEN_COLOR_PICKER, CLOSE_COLOR_PICKER, RESET_COLOR_PICKER, CHANGE_PEN_SIZE} from '../constants/Event';

let ColorButton = BaseDrawingBoardControl.extend({

  name: 'color',

  DEFAULT_TIP_TEXT:'更換顏色粗細',

  _initElement: function() {
    let colors = this.opts.colors || [
      'rgb(0, 0, 0)',
      'rgb(71, 176, 75) ',
      'rgb(17, 148, 246)',
      'rgb(255, 194, 0)',
      'rgb(157, 27, 178)',
      'rgb(0, 0, 255)'
    ];
    this.$el.append(`
      <button class="${this.ELEMENT_CLASS_NAME} hidden-color-picker">
        <span class="${this.PEN_SIZE_NAME}" data-sync></span>
        <!--<i class="fa fa-circle" aria-hidden="true"></i>-->
      </button>
      <div class="${this.COLOR_TOOL_BOX_CLASS_NAME}">
        ${colors.map((color)=> {
          return `<span class="${this.COLOR_ITEM_CLASS_NAME}" style="color:${color};">
            <i class="fa fa-circle" aria-hidden="true"></i>
          </span>`;
        }).join('')
        }
        <div class="${this.opts && this.opts.hideSize ? 'hidden':''}">
          <hr>
          <div class="slidecontainer">
            <input type="range" min="1" max="30" value="1" class="${this.SIDER_NAME}">
          </div>
        </div>
      </div>
    `);
  },

  ELEMENT_CLASS_NAME: 'drawing-board-control-color-button',
  COLOR_TOOL_BOX_CLASS_NAME: 'color-tool-box',
  COLOR_ITEM_CLASS_NAME: 'color-item',
  HIDDEN_COLOR_PICKER: 'hidden-color-picker',
  SIDER_NAME:'slider',
  PEN_SIZE_NAME:'pen-size',

  _getButton: function() {
    return this.$el.find(`.${this.ELEMENT_CLASS_NAME}`);
  },

  initialize: function() {

    this.initializeDefault();
    this._initElement();
    this.$el.on('click', `.${this.ELEMENT_CLASS_NAME}`, this.onClick.bind(this));
    this.board.$el.on('click', `.${this.COLOR_TOOL_BOX_CLASS_NAME} .${this.COLOR_ITEM_CLASS_NAME}`, this.onChangeColor.bind(this));
    this.board.$el.find('canvas').on('click touchstart', this.onCloseColorPicker.bind(this));
    this.board.ev.bind('board:mode', this.onChangedMode.bind(this));
    this.board.ev.bind(RESET_COLOR_PICKER, this.onReset.bind(this))
    this.board.$el.on('change', `.${this.COLOR_TOOL_BOX_CLASS_NAME} .${this.SIDER_NAME}`, this.onChangeRange.bind(this));
    this.board.$el.on('input', `.${this.COLOR_TOOL_BOX_CLASS_NAME} .${this.SIDER_NAME}`, this.onChangeRange.bind(this));
  },

  _getSlider:function() {
    return this.$el.find(`.${this.SIDER_NAME}`);
  },

  _getColorSlidersOfBoard:function() {
    return this.board.$el.find(`.${this.COLOR_TOOL_BOX_CLASS_NAME} .${this.SIDER_NAME}`);
  },

  switchSize:function(size) {
    this._getColorSlidersOfBoard().val(size);
    this.switchIconSize(size);
  },

  switchIconSize:function(size) {
    this.$el.find(`.${this.PEN_SIZE_NAME}`).css({width:size, height:size});
  },

  onChangeRange: function(evt) {
    let $target = $(evt.target);
    let size = $target.val();
    this.switchSize(size);
    this.board.ev.trigger(CHANGE_PEN_SIZE, {size});
    this.board.__extend.trigger(CHANGE_PEN_SIZE, {size})
    //console.log(evt)
  },

  onCloseColorPicker:function() {
    this._getButton().addClass(this.HIDDEN_COLOR_PICKER);
    this.board.__extend.trigger(CLOSE_COLOR_PICKER);
  },

  onReset: function(evt) {
    this.switchColor(evt.color);
    this.switchSize(evt.lineWidth);
  },

  onChangedMode: function(mode) {
    if (mode == 'pencil') {
      this.switchColor(this.board.color);
      this
      ._getButton()
      .prop('disabled', false);

    } else {
      this.switchColor('');
      this._getButton().prop('disabled', true);
    }
  },

  switchColor: function(color) {
    this._getButton().css('color', color);
    this._getButton().find('span').css('background', color);
  },

  onChangeColor: function(e) {
    e.preventDefault();
    let $target = $(e.target);
    let color = $target.css('color');
    this.switchColor(color);
    this.board.ev.trigger(CHANGE_PEN_COLOR, {color:color});
    this.board.__extend.trigger(CHANGE_PEN_COLOR, {color:color})
    this.onCloseColorPicker();
  },

  toggleHiddenColorPicker: function() {
    this._getButton().toggleClass(this.HIDDEN_COLOR_PICKER);

    if (this._getButton().hasClass(this.HIDDEN_COLOR_PICKER)) {
      this.board.__extend.trigger(CLOSE_COLOR_PICKER);
    } else {
      this.board.__extend.trigger(OPEN_COLOR_PICKER);
    }
  },

  onClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.toggleHiddenColorPicker();
  }

});

export default ColorButton;

