
import $ from 'jQuery';
import BaseDrawingBoardControl from './BaseDrawingBoardControl';
import {CHANGE_PEN_COLOR, OPEN_COLOR_PICKER, CLOSE_COLOR_PICKER, RESET_COLOR_PICKER} from '../constants/Event';

let ColorButton = BaseDrawingBoardControl.extend({

  name: 'color',

  DEFAULT_TIP_TEXT:'更換顏色',

  _initElement: function() {
    let colors = [
      'rgb(0, 0, 0)',
      'rgb(247, 65, 45) ',
      'rgb(71, 176, 75) ',
      'rgb(17, 148, 246)',
      'rgb(255, 194, 0)',
      'rgb(157, 27, 178)',
      'rgb(236, 21, 97) ',
      'rgb(122, 85, 71) ',
      'rgb(0, 0, 255)'
    ];
    this.$el.append(`
      <button class="${this.ELEMENT_CLASS_NAME} hidden-color-picker">
        <i class="fa fa-circle" aria-hidden="true"></i>
      </button>
      <div class="${this.COLOR_TOOL_BOX_CLASS_NAME}">
        ${colors.map((color)=> {
          return `<span class="${this.COLOR_ITEM_CLASS_NAME}" style="color:${color};">
            <i class="fa fa-circle" aria-hidden="true"></i>
          </span>`;
        }).join('')
        }
      </div>
    `);
  },

  ELEMENT_CLASS_NAME: 'drawing-board-control-color-button',
  COLOR_TOOL_BOX_CLASS_NAME: 'color-tool-box',
  COLOR_ITEM_CLASS_NAME: 'color-item',
  HIDDEN_COLOR_PICKER: 'hidden-color-picker',

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
  },

  onCloseColorPicker:function() {
    this._getButton().addClass(this.HIDDEN_COLOR_PICKER);
    this.board.__extend.trigger(CLOSE_COLOR_PICKER);
  },

  onReset: function(evt) {
    this.switchColor(evt.color);
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

