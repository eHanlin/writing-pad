
import $ from 'jQuery';
//let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout;
let requestAnimationFrame = (fn)=> setTimeout(fn, 500);
//let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
let cancelAnimationFrame = clearTimeout;

class SimulateControls {

  constructor(pad, $controls, $background) {
    this.pad = pad;
    this.board = pad.board;
    this._unbindEventFunctions = [];
    this.$controls = $controls;
    this.$background = $background;
    this._initElement($controls, $background);
  }

  _initElement($controls, $background) {
    this.$el = $controls.clone();
    this.$el.insertAfter($controls);
    this.$el.addClass('right clone');
    this.$elBackground = $background.clone();
    this.$elBackground.insertAfter($background);
    this.$elBackground.addClass('right');
    // this.$el.css('position', 'absolute');
  }

  simulate() {
    let DATA_SYNC = 'data-sync';
    let $buttons = this.$controls.find('button');
    let $selfButtons = this.$el.find('button');
    this._unbindAll();
    $buttons.each((index, el)=>{
      let $currentElement = $selfButtons.eq(index);
      this._linkElement($currentElement, $(el));
      if ($currentElement.find(`[${DATA_SYNC}]`).length) {
        this._linkElement($currentElement.find(`[${DATA_SYNC}]`), $(el).find(`[${DATA_SYNC}]`));
      }
    });
    let requestId = null;
    let refresh = (event)=> {
      if (!this.pad.isHidden()) {
        const target = event ? event.target : null;
        const isViewport = target && target instanceof VisualViewport;

        if (isViewport){
          const { pageTop, pageLeft, scale, width } = target;
          const pageRight = window.innerWidth - width - pageLeft;
          this.$controls.css('top', `${pageTop}px`);
          this.$controls.css('left', `${pageLeft + 8}px`);
          this.$controls.css('scale', `${1 / scale}`);
          this.$background.css('top', `${pageTop - 2 * scale}px`);
          this.$background.css('left', `${pageLeft}px`);
          this.$background.css('transform-origin', 'left');
          this.$background.css('transform', `scaleX(${1 / scale})`);
          this.$el.css('top', `${pageTop}px`);
          this.$el.css('right', `${pageRight + 8}px`);
          this.$el.css('scale', `${1 / scale}`);
          this.$elBackground.css('top', `${pageTop - 2 * scale}px`);
          this.$elBackground.css('right', `${pageRight}px`);
          this.$elBackground.css('transform-origin', 'right');
          this.$elBackground.css('transform', `scaleX(${1 / scale})`);
        } else {
          let right = this.board.$el.width() - this.pad.$el.width();
          let scale = (window.innerHeight / this.$controls.height() * 0.9);
          if (scale > 1) scale = 1;
          this.$controls.css('transform', 'scale(' + scale + ')');
          this.$controls.css('transform-origin', 'top left');
          this.$el.css('transform', 'scale(' + scale + ')');
          this.$el.css('transform-origin', 'top right');
          this.$background.css('transform', 'scaleX(' + scale + ')');
          this.$background.css('transform-origin', 'left');
          this.$elBackground.css('transform', 'scaleX(' + scale + ')');
          this.$elBackground.css('transform-origin', 'right');
          this.$el.offset({top:$(window).scrollTop()}); 
          this.$el.css('right', '8px');
          this.$elBackground.css('right', `${right}px`);
        }
        requestId = null;
      }
    };

    let refreshPosition = (event)=> {
      if (requestId == null) requestId = requestAnimationFrame(() => refresh(event));
    };
    this._refreshPosition = refresh;

    $(window).on('resize', refreshPosition);
    $(window.visualViewport).on('resize', refreshPosition);
    $(window).on('scroll', refreshPosition);
    $(window.visualViewport).on('scroll', refreshPosition);
    this._unbindEventFunctions.push(()=> {
      $(window).off('resize', refreshPosition)
      $(window.visualViewport).off('resize', refreshPosition);});
    this._unbindEventFunctions.push(()=> {
      $(window).off('scroll', refreshPosition)
      $(window.visualViewport).off('scroll', refreshPosition);}
    );
    refreshPosition();
  }

  resize() {
    this._refreshPosition && this._refreshPosition();
  }

  _unbindAll() {
    while(this._unbindEventFunctions.length) {
      let unbind = this._unbindEventFunctions.pop();
      unbind();
    }
    this._refreshPosition = null;
  }

  _syncStyle($el, $target) {
    $el.attr('class', $target.attr('class'));
    $el.attr('style', $target.attr('style'));
  }

  _syncAttr($el, $target) {
    $el.prop('disabled', $target.prop('disabled'));
  }

  _bindMutationObserver($el, $target) {
    let observer = new MutationObserver((mutations)=> {
      mutations.forEach((mutation)=> {
        if (["class", "style"].indexOf(mutation.attributeName) > -1) {
          this._syncStyle($el, $target);
        } else if (mutation.attributeName === 'disabled'){
          this._syncAttr($el, $target);
        } 
      });
    });

    observer.observe($target[0], {
      attributes:true
    });
    this._unbindEventFunctions.push(()=> observer.disconnect());
  }

  _linkElement($el, $target) {
    let clickTarget = (e)=>{
      e.preventDefault();
      e.stopPropagation();
      $target.click();
    };
    $el.on('click', clickTarget);
    this._bindMutationObserver($el, $target);
    this._unbindEventFunctions.push(()=> $el.off('click', clickTarget));
  }

}


export default SimulateControls;

