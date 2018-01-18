

let BaseDrawingBoardControl = DrawingBoard.Control.extend({

  initializeDefault:function() {
    if (this.opts) this.$el.attr('data-tip-text', this.opts.tipText || this.DEFAULT_TIP_TEXT ||'');
    if (this.opts && this.opts.id) this.id = this.opts.id;
  }

});

export default BaseDrawingBoardControl;

