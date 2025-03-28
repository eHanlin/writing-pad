
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
    const userAgent = navigator.userAgent.toLowerCase();
    const isChrome = /chrome/.test(userAgent);
    let requestId = null;
    let scrollY = 0;
    let hasScrolled = false;
    let lastPageTop = 0;
    let refresh = ()=> {
      if (!this.pad.isHidden()) {
        const { pageTop, pageLeft, scale, width, height } = window.visualViewport;
        const windowWidth = width * scale;
        const windowHeight = height * scale;
        const heightOffset = Math.round(this.board.initialHeight - height);
        const maxScrollHeight = Math.round(document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const maxTargetTop = windowHeight - height
        const isScrollingDown = pageTop > lastPageTop;

        const isExpanding = !!this.board.initialScrollY
        const newScrollY = isExpanding && isChrome ? scrollY + this.board.initialScrollY : Math.min(Math.max(0, scrollY, pageTop - maxTargetTop), maxScrollHeight);
        hasScrolled = !!newScrollY;
        hasScrolled ?
          isScrollingDown ?
            scrollY = Math.round(newScrollY) :
            scrollY = Math.round(Math.min(pageTop, scrollY)) :
          scrollY ? scrollY = Math.round(Math.min(pageTop, scrollY)) : null;

        const pageRight = windowWidth - width - pageLeft;
        const targetTop = isChrome ?
          `${Math.min(Math.max(pageTop - window.pageYOffset, 0), maxTargetTop)}px` :
          `${Math.min(Math.max(pageTop - scrollY, 0), maxTargetTop)}px`;
        const controlScale = windowHeight / this.$controls.height() * 0.9;
        const targetControlScale = (controlScale > 1 ? 1 : controlScale) / scale;
        this.board.initialScrollY = null;

        if (window.ehanlinWritingPad.displayDevInfo) {
          console.log('');
          console.log('============================================');
          console.log('pageTop', pageTop);
          console.log('pageLeft', pageLeft);
          console.log('scale', scale);
          console.log('width', width);
          console.log('height', height);
          console.log('--------------------------------------------');
          console.log('windowWidth', windowWidth);
          console.log('windowHeight', windowHeight);
          console.log('heightOffset', heightOffset);
          console.log('maxScrollHeight', maxScrollHeight);
          console.log('maxTargetTop', maxTargetTop);
          console.log('hasScrolled', hasScrolled);
          console.log('isScrollingDown', isScrollingDown);
          console.log('--------------------------------------------');
          console.log('pageRight', pageRight);
          console.log('targetTop', targetTop);
          console.log('targetControlScale', targetControlScale);
          console.log('--------------------------------------------');
          console.log('manualScrollY', scrollY);
          console.log('window.pageYOffset', window.pageYOffset);
          console.log('document.body.scrollTop', document.body.scrollTop);
          console.log('document.documentElement.scrollTop', document.documentElement.scrollTop);
          console.log('document.documentElement.scrollHeight', document.documentElement.scrollHeight);
          console.log('document.documentElement.clientHeight', document.documentElement.clientHeight);
          console.log('============================================');
        }

        this.$controls.css('transform-origin', 'top left');
        this.$controls.css('transform', `scale(${targetControlScale})`);
        this.$controls.css('top', targetTop);
        this.$controls.css('left', `${pageLeft + 8 / scale}px`);
        this.$background.css('transform-origin', 'left');
        this.$background.css('transform', `scaleX(${targetControlScale})`);
        // this.$background.css('top', targetTop);
        this.$background.css('left', `${pageLeft + 8 / scale}px`);
        this.$el.css('transform-origin', 'top right');
        this.$el.css('transform', `scale(${targetControlScale})`);
        this.$el.css('top', targetTop);
        this.$el.css('right', `${pageRight + 8 / scale}px`);
        this.$elBackground.css('transform-origin', 'right');
        this.$elBackground.css('transform', `scaleX(${targetControlScale})`);
        // this.$elBackground.css('top', targetTop);
        this.$elBackground.css('right', `${pageRight + 8 / scale}px`);
        lastPageTop = pageTop;
        requestId = null;
      }
    };

    let refreshPosition = (event)=> {
      if (requestId == null) requestId = requestAnimationFrame(refresh);
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

