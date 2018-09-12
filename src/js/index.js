
import $ from 'jquery';
import css from 'drawingboardCss';
import less from '../less/main.less';
//import fontAwesome from 'font-awesome/css/font-awesome.css';
import * as drawingboard from 'drawingboard';
import CloseButton from './components/CloseButton';
import QuestionButton from './components/QuestionButton';
import GridButton from './components/GridButton';
import ExtendVerticalButton from './components/ExtendVerticalButton';
import DrawingButton from './components/DrawingButton';
import EraserButton from './components/EraserButton';
import ResetButton from './components/ResetButton';
import RedoButton from './components/RedoButton';
import UndoButton from './components/UndoButton';
import ColorButton from './components/ColorButton';
import buildWritingPad from './builders/writingPadBuilder';

DrawingBoard.Control.Close = CloseButton;
DrawingBoard.Control.Grid = GridButton;
DrawingBoard.Control.ExtendVertical = ExtendVerticalButton;
DrawingBoard.Control.Drawing = DrawingButton;
DrawingBoard.Control.Eraser = EraserButton;
DrawingBoard.Control.Reset = ResetButton;
DrawingBoard.Control.Question = QuestionButton;
DrawingBoard.Control.Undo = UndoButton;
DrawingBoard.Control.Redo = RedoButton;
DrawingBoard.Control.Color = ColorButton;
    

(function decroateNavigation(){
  let initialize = DrawingBoard.Control.Navigation.prototype.initialize;
  DrawingBoard.Control.Navigation.prototype.initialize = function() {
    initialize.apply(this, arguments);
    this.$el.find(".drawing-board-control-navigation-reset").html("<i class='fa fa-repeat'/>");
  };
})();

let exportModule = {
  build:buildWritingPad
};

//if (typeof window === 'object') window.writingPad = exportModule;

export default exportModule;
module.exports = exportModule;

