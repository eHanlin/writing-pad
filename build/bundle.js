!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jQuery"),require("drawingboard.js")):"function"==typeof define&&define.amd?define(["jQuery","drawingboard.js"],e):"object"==typeof exports?exports.writingPad=e(require("jQuery"),require("drawingboard.js")):t.writingPad=e(t.jQuery,t["drawingboard.js"])}(this,function(t,e){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(e,n){e.exports=t},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=g[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(s(i.parts[r],e))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(s(i.parts[r],e));g[i.id]={id:i.id,refs:1,parts:a}}}}function i(t){for(var e=[],n={},i=0;i<t.length;i++){var o=t[i],r=o[0],a=o[1],d=o[2],s=o[3],l={css:a,media:d,sourceMap:s};n[r]?n[r].parts.push(l):e.push(n[r]={id:r,parts:[l]})}return e}function o(t,e){var n=f(),i=w[w.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function d(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function s(t,e){var n,i,o;if(e.singleton){var s=v++;n=h||(h=a(e)),i=l.bind(null,n,s,!1),o=l.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=d(e),i=u.bind(null,n),o=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),i=c.bind(null,n),o=function(){r(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}function l(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=A(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function c(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function u(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var g={},p=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},b=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,w=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=b()),void 0===e.insertAt&&(e.insertAt="bottom");var o=i(t);return n(o,e),function(t){for(var r=[],a=0;a<o.length;a++){var d=o[a],s=g[d.id];s.refs--,r.push(s)}if(t){n(i(t),e)}for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete g[s.id]}}}};var A=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function i(){return(Math.random()*r>>1).toString(16)}function o(){return i()+"-"+i()+"-"+i()+"-"+i()+"-"+i()}Object.defineProperty(e,"__esModule",{value:!0}),e.string=o;var r=1e5},,function(t,e,n){t.exports=n(7)},,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=(i(o),n(8)),a=(i(r),n(10)),d=(i(a),n(13)),s=(function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e.default=t}(d),n(14)),l=i(s),c=n(15),u=i(c),g=n(17),p=i(g),b=n(18),f=i(b),h=n(19),v=i(h),w=n(20),A=i(w),y=n(21),m=i(y);DrawingBoard.Control.Close=l.default,DrawingBoard.Control.Grid=u.default,DrawingBoard.Control.ExtendVertical=p.default,DrawingBoard.Control.Drawing=f.default,DrawingBoard.Control.Eraser=v.default,DrawingBoard.Control.Reset=A.default,function(){var t=DrawingBoard.Control.Navigation.prototype.initialize;DrawingBoard.Control.Navigation.prototype.initialize=function(){t.apply(this,arguments),this.$el.find(".drawing-board-control-navigation-reset").html("<i class='fa fa-repeat'/>")}}();var x={build:m.default};e.default=x,t.exports=x},function(t,e,n){var i=n(9);"string"==typeof i&&(i=[[t.i,i,""]]);n(2)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,'.drawing-board,.drawing-board *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.drawing-board-controls-hidden,.drawing-board-utils-hidden{display:none!important}.drawing-board{position:relative;display:block}.drawing-board-canvas-wrapper{position:relative;margin:0;border:1px solid #ddd}.drawing-board-canvas{position:absolute;top:0;left:0;z-index:10;width:auto;cursor:crosshair;z-index:20}.drawing-board-cursor{position:absolute;top:0;left:0;pointer-events:none;border-radius:50%;background:#ccc;background:rgba(0,0,0,.2);z-index:30}.drawing-board-control-colors-rainbows,.drawing-board-control-size-dropdown,.drawing-board-control-size .drawing-board-control-inner,.drawing-board-control>button{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:hidden;border:none;background-color:#eee;padding:2px 4px;border:1px solid #ccc;box-shadow:0 1px 3px -2px #121212,inset 0 2px 5px 0 hsla(0,0%,100%,.3);-webkit-box-shadow:0 1px 3px -2px #121212,inset 0 2px 5px 0 hsla(0,0%,100%,.3);height:28px}.drawing-board-control>button{cursor:pointer;min-width:28px;line-height:14px}.drawing-board-control>button:focus,.drawing-board-control>button:hover{background-color:#ddd}.drawing-board-control>button.active,.drawing-board-control>button:active{box-shadow:inset 0 1px 2px 0 rgba(0,0,0,.2);-webkit-box-shadow:inset 0 1px 2px 0 rgba(0,0,0,.2);background-color:#ddd}.drawing-board-control>button[disabled]{color:gray}.drawing-board-control>button[disabled].active,.drawing-board-control>button[disabled]:active,.drawing-board-control>button[disabled]:focus,.drawing-board-control>button[disabled]:hover{background-color:#eee;box-shadow:0 1px 3px -2px #121212,inset 0 2px 5px 0 hsla(0,0%,100%,.3);-webkit-box-shadow:0 1px 3px -2px #121212,inset 0 2px 5px 0 hsla(0,0%,100%,.3);cursor:default}.drawing-board-controls{margin:0 auto;text-align:center;font-size:0;display:table;border-spacing:9.33333px 0;position:relative;min-height:28px}.drawing-board-controls[data-align=left]{margin:0;left:-9.33333px}.drawing-board-controls[data-align=right]{margin:0 0 0 auto;right:-9.33333px}.drawing-board-canvas-wrapper+.drawing-board-controls,.drawing-board-controls+.drawing-board-canvas-wrapper{margin-top:5px}.drawing-board-controls-hidden{height:0;min-height:0;padding:0;margin:0;border:0}.drawing-board-control{display:table-cell;border-collapse:separate;vertical-align:middle;font-size:16px;height:100%}.drawing-board-control-inner{position:relative;height:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.drawing-board-control>button{margin:0;vertical-align:middle}.drawing-board-control-colors{font-size:0;line-height:0}.drawing-board-control-colors-current{border:1px solid #ccc;cursor:pointer;display:inline-block;width:26px;height:26px}.drawing-board-control-colors-rainbows{display:inline-block;margin-left:5px;position:absolute;left:0;top:33px;margin-left:0;z-index:100;width:250px;height:auto;padding:4px}.drawing-board-control-colors-rainbow{height:18px}.drawing-board-control-colors-picker:first-child{margin-right:5px}.drawing-board-control-colors-picker{display:inline-block;width:18px;height:18px;cursor:pointer}.drawing-board-control-colors-picker[data-color="rgba(255, 255, 255, 1)"]{width:16px;height:17px;border:1px solid #ccc;border-bottom:none}.drawing-board-control-colors-picker:hover{width:16px;height:16px;border:1px solid #555}.drawing-board-control-drawingmode>button{margin-right:2px}.drawing-board-control-drawingmode>button:last-child{margin-right:0}.drawing-board-control-drawingmode-pencil-button{overflow:hidden;*text-indent:-9999px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAe9JREFUeNpiZAACVlFRBhYREQZcQPnbNwa3N28YlL5+ZfgLFfvPwGD9m4FhIgsDHuAO0gTUDNKIBvyBmqt/MTDMY8Gl0f31azD7L6oUIxCnAzWmAPHBfwwM01AMUAV6JfPQIVwOYgVqqPnFyOjz6///O38YGKpAgmAD1OXlGdTk5PD5hgeouZudj8/uy9evP/78/dsFFPsJNiAoKIiBABAHap4oLi9v8fTNm48//v7NBwbgWZgkE7rqt8DY+A8JZRBW+cfIuEDT0NDlzadP3z98/doPFDuCrB7TAGFhBqCNIGwM9OcKUzs7+xdv3355+f79VqDYAiTDwZgJh7ONgYpnOvn4GL949erT7UePdgL5JVCD4fgBLBBxaX74+PG789evnwby0/8jKXgExIeB+CG6Af///1e9Ki9vFSAkZPzoyZPPJy9evA9MB77/sWiEARZkzV+/fvXYtGnTpG3btj28EBT0BqjZ5D8OjXCwPksUhA1Wpggf/PHjx/9169Y9EBERaUlgZmaIAcrLE4rk5sIqBqDmlefnRPzfWGX5EaSZm5ubgRloADGA5QZ3RgK7gESY4PMNn9ZtObPpzZvfU4DiYkiB/RcHG+S7fyxAMH/lFU2GOZd2bLx18/cEUMoD4j9I+DcS/RtJHGTYf4AAAwAxaOMYHjxKFwAAAABJRU5ErkJggg==");background-position:50% 50%;background-repeat:no-repeat}.drawing-board-control-drawingmode-pencil-button:before{content:"";display:block;width:0;height:100%}.drawing-board-control-drawingmode-eraser-button{overflow:hidden;*text-indent:-9999px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkpJREFUeNp0kk+IElEcx39vFBc9+OfQRTAwzFt4CaYOKStj6MoeculStzoIQSB4kCVckmDx4iGCXWYJIqjoVOzO1l4qT1F7WfBWHvxzDPyTB3XUmXn93suRybUffHmP997n9/cRsFgwGARJkiAcDsPlwgEIeEZQAhCRAkgAlOD6SQP4rgMFDWVnYCAQgFgsBqFQCBwOByzZNQOotPHx1RNCCCipu6bfb+zSnslkeOQVILPrBkAirbws9btdTEWAzZPXpfepOzaeGMBXwe/3w3+MwTc3Dl+UeghTiskbBvR6Pbh18mZHB0jjmxvCKhIfR37s3r+Sevf8ca/T4TBF2HTSODuDxP7uNjrZFFbBk8lEzOVyspa4ykGYw2zfbTb/7ilvok1YhlVVFfP5vDydTkHXdXDdlhZOOnPY4/HA0YPtp3h6LFjh8XgsFgoFGTPgsKm1zDr8ajTQh8Fh5eGjZzjGI8yjKlgjF4tFGdd/YKYmRja24hw+zu3sYe2HiH3hYzQjl8tleTQanWtou93G6Qngdrth6+1+9h6hTULJZ/PeziJXKhV5OByeg1ut1gJOp9NZTdNOcQ419ot+ggp1qoLdBFmqVmNpm3A8Huewy+Wq1RH8QH9zmBlJJpMRdCIqiiIPBgN+2MCGsW/r8/kgGo1m0fmpzWarseayHlmNeL1eFiWC0cRqtSr3+/3FpSiKHMZtjU1glbFyfKgLTqfzEka9OJvNeDnzz1JnCaFmqOl8ZdJY1SiDOXCiXKg1NtG5DIt0y6ov3dE/AgwAENFWYYLj4mYAAAAASUVORK5CYII=");background-position:50% 50%;background-repeat:no-repeat}.drawing-board-control-drawingmode-eraser-button:before{content:"";display:block;width:0;height:100%}.drawing-board-control-drawingmode-filler-button{overflow:hidden;*text-indent:-9999px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnNJREFUeNp0k0trE1EUx89MJpNJooYYXBgDNtCKdRPwlbqoCKUtaNVNA0Uo7UbMxoVPEARTXEi+QWfnwn6DEAlEkrSLttTGRiULEQlJ8yChmbzI++E50yTUJA78uMy953/u/557LmOz2WDEZ2m1WrckSRJSqdR2tVrdHQyYebwHtVoNuFHqTqczhQnWKaBYLDoKhcIuzgHDMKBSqeD20qd+LNdsNocSoFhRr9ctpVLJigl4xIIJQizLAmG4cAPa7bYcy9Iug5TL5UYikbD6/X7Rbre/IUcYe3WUW5ZsnQQzW9LpNOPz+UQc5aBM5mgdh7vI9FCCAesW2tnr9YqZTAby+bw8f3AQRP6853n+Ph5hemSCntjj8YjZbFYWx2IxeS2RSEMwuA87O79eqdXquVolK+GxnP0EPbHb7RZJSGABIR6PA11zJHKIR2MhHA5DIPDj7eH3j95KpfK60Wg8Yntil8slkqgnpioLghacTidoNDpEC3q9HnheCc3s1jZeLcW943pirPw/4lKpBkqlDubnl/riycnLsLy88EKj0fhzuRyZv8RFo1E6wpBYkiqy7Z54YmIcVlYeyOKC4mYwJ0nHRaQuM5vNT6hB/iceG7sIq6sPnwmC4MerDkby40AOCCoiddie1Wp92W7zQ2KTyQSLizNP8T0EsPLBbxEDnCj0GkM2qIEwyZRCobizsfH5A1ZXFhuN52F29vpz3HkL574mk8lj24Y5wsHkvjjoX0BOIWc5jruHzbK2ufmzEwpFO3jnDhQv4JoROYdoERVyGjEgZ8iBDlF3FzXo4go6utZ9lftY4N/dXisjR0i1G0ublv8KMAA0ZoUlicxrhwAAAABJRU5ErkJggg==");background-position:50% 50%;background-repeat:no-repeat}.drawing-board-control-drawingmode-filler-button:before{content:"";display:block;width:0;height:100%}.drawing-board-control-navigation>button{font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;margin-right:2px}.drawing-board-control-navigation>button:last-child{margin-right:0}.drawing-board-control-size[data-drawing-board-type=range] .drawing-board-control-inner{width:75px}.drawing-board-control-size[data-drawing-board-type=dropdown] .drawing-board-control-inner{overflow:visible}.drawing-board-control-size-range-input{position:relative;width:100%;z-index:100;margin:0;padding:0;border:0}.drawing-board-control-size-dropdown-current span,.drawing-board-control-size-dropdown span,.drawing-board-control-size-range-current{display:block;background:#333;opacity:.8}.drawing-board-control-size-range-current{display:inline-block;opacity:.15;position:absolute;pointer-events:none;left:50%;top:50%;z-index:50}.drawing-board-control-size-dropdown-current{display:block;height:100%;width:40px;overflow:hidden;position:relative}.drawing-board-control-size-dropdown-current span{position:absolute;left:50%;top:50%}.drawing-board-control-size-dropdown{position:absolute;left:-6px;top:33px;height:auto;list-style-type:none;margin:0;padding:0;z-index:100}.drawing-board-control-size-dropdown li{display:block;padding:4px;margin:3px 0;min-height:16px}.drawing-board-control-size-dropdown li:hover{background:#ccc}.drawing-board-control-size-dropdown span{margin:0 auto}.drawing-board-control-download-button{overflow:hidden;*text-indent:-9999px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoBJREFUeNqMkr9PU1EUx7/vR1tQ3yu10hAmTawtBSYSy2YccFOcnDQm/gewOLnj5GYMg4sdXFxkMca4OBAwdUBe/ZkIGFp+9tHXvh/3/fTcAm01aLzJybnn3nM+95tzrnDl6Tb+sibuTmWUWj3C6/Juk+LySUmyvt0FCKKA02ryOCy6LBiu15ngMbZ5DDCNBqIw6gKM+n4nECUJru3glKry8CpjQaHVYmC2rVH82DIMMMdGGARdwJ+SPNdFS9chx+MXDNMp/NzagWNatk/nQU/hiYAoih6FYTBCBs9zUXMCbAhx2OYOv351lPOJ3EwH4LteL6Dcp/Rfu3FrstDyIizt+agpaYxNDU0M9gl4v7Ck+TYrCYLQqZHUyTtdQBiutPSGUflczSXHs5lVKwZdSOBMvwztxVvN0RtzsiyXBFHsAvL5PBSnCpXV2getILFiE2SjspYbuZzPiDSZ2vOXmlvX5yQqTmMfg9ZXqtls1wnT09OHEyAq0aFLg/gSXsSWq9wWk+p9PrCoYTwcijdLOfE7UsEufN9HGIYnT4EnTGIXe1KqtNNIvuNnGamxfi7SgQD/nIJCTbzOPQ/SQh1pud7T4M6W/8qFIw/5WAr5m7Ozsw9UVc069Fls2yJzSC5/lnc9RhaHZVnfSqUnEgXP2oBqtYqBgYG2+mKxmOVADnAcB4yxHgD1RzehKKns/LyV4gUHBweQy+UyRkdH6UKJ6fQDFxcXoWkaXJeRuTgUGCdLQJ9bx72lGZimGWs2m+083oN+2iiFQiGxvLy8RrDzudyltgrG3N8U2G8CrPz4sGYYRqJSqWR4H/jNWbJhUjAWi8XG8R/L87yPpGCVttVfAgwAVpZR+8tZC08AAAAASUVORK5CYII=");background-position:50% 50%;background-repeat:no-repeat}.drawing-board-control-download-button:before{content:"";display:block;width:0;height:100%}',""])},function(t,e,n){var i=n(11);"string"==typeof i&&(i=[[t.i,i,""]]);n(2)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,'@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash-to-transparency{0%,50%,to{opacity:0}25%,75%{opacity:1}}.writing-pad-container{overflow:hidden}.writing-pad-container[data-hint-area]:before{width:100%;height:100%;position:absolute;content:attr(data-writing-area-text);box-sizing:border-box;border:6px dashed #eee;display:flex;justify-content:center;flex-direction:column;color:gray;text-align:center;animation-name:flash-to-transparency;animation-iteration-count:1;animation-duration:3s;background:hsla(0,0%,100%,.5);font-size:80px}.writing-pad-container .left.drawing-board-controls{margin-left:-51px;display:block}.writing-pad-container .left.drawing-board-controls .drawing-board-control{display:block;text-align:right}.writing-pad-container .left.drawing-board-controls .drawing-board-control.drawing-board-control-drawingmode button{display:block;float:right;clear:right;margin-right:0}.writing-pad-container .left.drawing-board-controls .drawing-board-control button{outline:0;height:50px;font-size:18px;margin-top:2px;width:50px;border-radius:50%}.writing-pad-container,.writing-pad-container .writing-inner-content{height:100%;position:relative}.writing-pad-container .writing-pad-mask{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1}.writing-pad-container .writing-pad-mask>div{margin:0 auto;height:100%;box-sizing:border-box}.writing-pad-container .writing-pad-mask>div>.drawing-board-controls{padding-top:10px;padding-bottom:10px;position:fixed;top:0;z-index:100}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper{border:none;margin:0 auto}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper .dragging-bg-button{position:absolute;left:10px;top:10px;z-index:100;cursor:pointer;display:none;background:#fff;border:1px solid #ccc}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.grid .dragging-bg-button{display:inline-block}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.grid:after{cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:move;content:" ";display:block;position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;background-image:url('+n(12)+");opacity:.2}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper .drawing-tip-title{display:none;color:#fd3d3d;font-size:40px}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.move-bg .drawing-tip-title{pointer-events:none;display:block;width:100%;text-align:left;top:0;margin-left:60px}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.move-bg .dragging-bg-button{box-shadow:inset 0 1px 2px 0 rgba(0,0,0,.2);background:#ddd}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.move-bg.grid:after{opacity:.7}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.move-bg canvas{z-index:0;pointer-events:none;opacity:.2}.writing-pad-container .writing-pad-mask>div canvas{opacity:.7}",""])},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAABYlAAAWJQFJUiTwAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAS0lEQVRIDe3SwQkAIAxD0ej+O2s3CAHJQX7BUwmhD5ekM6861cJdPW3KKHwuDimksQCfJiZzAUidULyHNCZzAUidULyHNCZzgf9JL3bOAjSNkD/+AAAAAElFTkSuQmCC"},function(t,n){t.exports=e},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=DrawingBoard.Control.extend({name:"close",initialize:function(){var t=this;this.$el.append('\n      <button class="drawing-board-control-close-button">\n        <i class="fa fa-close"></i>\n      </button>\n    '),this.$el.on("click",".drawing-board-control-close-button",function(e){t.board.__extend._onClose(),t.board.__extend.hide(),e.preventDefault()})}});e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),o=n(0),r=function(t){return t&&t.__esModule?t:{default:t}}(o),a=DrawingBoard.Control.extend({name:"grid",initialize:function(){this.$el.append('\n      <button class="drawing-board-control-grid-button">\n        <i class="fa fa-th"></i>\n      </button>\n    '),this.$el.on("click",".drawing-board-control-grid-button",this.onClick.bind(this))},onClick:function(t){t.preventDefault(),this.board.__extend.toggleGridBg(),this._getDraggingButtonInstance(),this._setTipTitle(this.board.__extend.opts.gridTipText),this.board.__extend._getWrapper().hasClass("grid")||this._disableMovingBG(),this.getButtonElement().toggleClass("active")},getButtonElement:function(){return this.$el.find("button")},DRAG_BG_BUTTON:"dragging-bg-button",canDragging:!1,_getEventPoint:function(t){var e;if(void 0==t.pageX){var n=t.originalEvent,i=n.changedTouches;e={x:i[0].pageX,y:i[0].pageY}}else e={x:t.pageX,y:t.pageY};return e},_initMoveBGEvent:function(){var t=this,e=this.board.__extend._getWrapper();e.on("mousedown touchstart",function(e){e.preventDefault(),t.canDragging=!0;var n=t._getEventPoint(e);t.startX=n.x,t.startY=n.y}),e.on("mousemove touchmove",function(e){if(t.canDragging){var n=t._getEventPoint(e),i=n.x-t.startX,o=n.y-t.startY,r=t.getBGPoint();t.setBGPoint(r.x+i,r.y+o),t.startX=n.x,t.startY=n.y}}),e.on("mouseup touchend",function(e){return t.canDragging=!1});var n=this.$style=(0,r.default)("<style id='drawing-bg-move-style'></style>");(0,r.default)(document.body).append(n)},DRAWING_TIP_TITLE:"drawing-tip-title",_setTipTitle:function(t){var e=this.board.__extend._getWrapper(),n=e.find("."+this.DRAWING_TIP_TITLE);n.length||(n=(0,r.default)(r.default.parseHTML('\n        <div class="'+this.DRAWING_TIP_TITLE+'"></div>\n      ')),e.append(n)),n.html(t)},setBGPoint:function(t,e){this.$style.html(".drawing-board-canvas-wrapper.grid:after { background-position-x:"+t+"px; background-position-y:"+e+"px;}")},getBGPoint:function(){var t=this.board.__extend._getWrapper(),e=window.getComputedStyle(t[0],":after"),n=(e.getPropertyValue("background-position-x")||"0").replace(/[%px]/g,""),i=(e.getPropertyValue("background-position-y")||"0").replace(/[%px]/g,"");return{x:Number(n),y:Number(i)}},_disableMovingBG:function(){this.board.__extend._getWrapper().removeClass("move-bg")},_enableMovingBG:function(){this.board.__extend._getWrapper().addClass("move-bg")},_toggleMovingBG:function(){this.board.__extend._getWrapper().hasClass("move-bg")?this._disableMovingBG():this._enableMovingBG()},_getDraggingButtonInstance:function(){var t=this,e=this.board.__extend._getWrapper(),n=e.find("."+this.DRAG_BG_BUTTON);return n.length||(n=(0,r.default)(r.default.parseHTML('<button class="'+this.DRAG_BG_BUTTON+'">\n        <i class="fa fa-arrows" aria-hidden="true"></i>\n      </button>')),e.append(n),n.on(i.isTouchEvent?"touchstart":"click",function(){return t._toggleMovingBG()}),this._initMoveBGEvent()),n}});e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.isTouchEvent=function(){return"ontouchstart"in window}()},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=DrawingBoard.Control.extend({name:"extendVertical",initialize:function(){var e=this;this.$el.append('\n      <button class="drawing-board-control-extend-vertical-button">\n        <i class="fa fa-arrows-v"></i>\n      </button>\n    '),this.$el.on("click",".drawing-board-control-extend-vertical-button",function(n){e.board.__extend.extendHeight();var i=t("body");i.animate({scrollTop:i.get(0).scrollHeight},1500),n.preventDefault()})}});e.default=n}).call(e,n(0))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(i),r=DrawingBoard.Control.extend({name:"drawing",_initElement:function(t){this.$el.append('\n      <button class="'+t+'" data-mode="pencil">\n        <i class="fa fa-pencil"></i>\n      </button>\n    '),this.getButtonElement().css("color",this.color)},_initOpts:function(t){var e=t.lineWidth,n=t.color;e&&(this.lineWidth=e),n&&(this.color=n)},initialize:function(){this._initOpts(this.opts||{}),this._initElement("drawing-board-control-customize-drawing-button"),this.$el.on("click",".drawing-board-control-customize-drawing-button",this.onClick.bind(this)),this.board.ev.bind("board:mode",this.onChangedMode.bind(this))},getButtonElement:function(){return this.$el.find("button")},onClick:function(t){t.preventDefault();var e=(0,o.default)(t.currentTarget),n=e.attr("data-mode");this.board.ctx.lineWidth=this.lineWidth,this.board.setColor(this.color),this.board.setMode(n),e.addClass("active")},onChangedMode:function(){this.getButtonElement().removeClass("active")},color:"rgba(0, 0, 0, 1)",lineWidth:"3"});e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(i),r=DrawingBoard.Control.extend({name:"eraser",_initElement:function(){this.$el.append('\n      <button class="drawing-board-control-drawingmode-'+this.name+'-button" data-mode="'+this.name+'"></button>')},initialize:function(){this._initElement(),this.$el.on("click","button",this.onClick.bind(this)),this.board.ev.bind("board:mode",this.onChangedMode.bind(this)),this.opts.lineWidth&&(this.lineWidth=this.opts.lineWidth)},getButtonElement:function(){return this.$el.find("button")},onClick:function(t){t.preventDefault();var e=(0,o.default)(t.currentTarget),n=e.attr("data-mode");this.board.ctx.lineWidth=this.lineWidth,this.board.setMode(n),e.addClass("active")},onChangedMode:function(){this.getButtonElement().removeClass("active")},lineWidth:"15"});e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=(function(t){t&&t.__esModule}(i),DrawingBoard.Control.extend({name:"reset",_initElement:function(){this.$el.append('\n      <button class="drawing-board-control-reset-button">\n        <i class="fa fa-repeat" aria-hidden="true"></i>\n      </button>\n    ')},initialize:function(){var t=this;this._initElement(),this.$el.on("click","button",function(){return t.board.__extend.resize()})}}));e.default=o},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=(i(o),n(3)),a=(function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e.default=t}(r),n(22)),d=i(a),s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new d.default(t,e)};e.default=s},function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(0),c=o(l),u=n(3),g=i(u),p=n(23),b=i(p),f=n(24),h=o(f),v=n(25),w=n(26),A=n(27),y=n(28),m=n(29),x=n(30),_=o(x),k=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),o="writingPad"+g.string();return i.histories={},i.stateHistory=new _.default(i),i._initOpts(n),i._initDOM(t,o,i.opts),i.board=new DrawingBoard.Board(o,i.boardOpts),i.board.__extend=i,i._initLayoutControls(i.opts),i}return d(e,t),s(e,[{key:"_initOpts",value:function(t){this.opts=c.default.extend(m.DEFAULT,t),this._initBoardOpts(t)}},{key:"_initBoardOpts",value:function(t){var e=c.default.extend(!0,{},y.DEFAULT);t.controls&&(e.controls=controls),t.gridTipText&&(e.gridTipText=gridTipText),t.useMovingGesture&&(e.useMovingGesture=t.useMovingGesture),this.boardOpts=e}},{key:"_initDOM",value:function(t,e,n){var i=this._buildContainerElement(e,n),o=(0,c.default)(t);i.hide(),o.append(i),this.$el=i,n&&n.canvasWidth&&this._setInnerContentWidth(n.canvasWidth)}},{key:"_initLayoutControls",value:function(t){t&&t.controlsLayout===A.LEFT&&this.$el.find(".drawing-board-controls").addClass(A.LEFT),this._setFirstControlToDefault()}},{key:"_setFirstControlToDefault",value:function(){this.$el.find(".drawing-board-control:first button").click()}},{key:"_getInnerContentElement",value:function(){return this.$el.find(".writing-inner-content")}},{key:"_setInnerContentWidth",value:function(t){this._getInnerContentElement().width(t+2)}},{key:"_buildContainerElement",value:function(t,e){return(0,c.default)('\n      <div class="writing-pad-container" '+w.DATA_WRITING_AREA+'="'+e.hintAreaText+'">\n        <div class="writing-inner-content">\n          <div class="writing-pad-mask">\n            <div id=\''+t+"'></div>\n          </div>\n        </div>\n      </div>\n    ")}},{key:"resize",value:function(){this.stateHistory.save(),this.board.resize({controlHeight:!1}),this.stateHistory.restore()}},{key:"restore",value:function(){this.board.restoreWebStorage()}},{key:"show",value:function(){this.$el.show()}},{key:"hide",value:function(){this.$el.hide()}},{key:"isHidden",value:function(){return/none/i.test(this.$el.css("display"))}},{key:"toImage",value:function(){return this.board.getImg()}},{key:"saveByKey",value:function(t){this.histories[t]=this.board.getImg()}},{key:"_resetBoard",value:function(){this.stateHistory.save(),this.board.reset({color:!1,size:!1}),this.stateHistory.restore()}},{key:"restoreByKey",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{clearEmpty:!0};return this.histories[t]?(this._resetBoard(),this.board.restoreHistory(this.histories[t]),!0):!(!e||!e.clearEmpty)&&this._resetBoard()}},{key:"clearStorage",value:function(){this.board.clearWebStorage()}},{key:"_onClose",value:function(){this.trigger(v.CLOSE)}},{key:"_getWrapper",value:function(){return this.$el.find(".drawing-board-canvas-wrapper")}},{key:"openGridBg",value:function(){this._getWrapper().addClass("grid")}},{key:"closeGridBg",value:function(){this._getWrapper().removeClass("grid")}},{key:"toggleGridBg",value:function(){this._getWrapper().toggleClass("grid")}},{key:"_delayResize",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;clearTimeout(this._timeId),this._timeId=setTimeout(function(){if(!t.isHidden()){var e=board.getImg();t.$el.find(".drawing-board-canvas-wrapper, canvas").width("100%"),t.resize(),t.restoreHistory(e)}},e)}},{key:"getHeight",value:function(){return this.$el.height()}},{key:"extendHeight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,e=b.copyCanvas(this.board.canvas);this.$el.height(this.getHeight()+t),this.resize(),this._resetBoard(),b.drawFrom(this.board.canvas,e)}},{key:"autosize",value:function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(0,c.default)(window).off("resize",this._delayResize):(0,c.default)(window).on("resize",this._delayResize)}},{key:"openHintWritingArea",value:function(){var t=this;return new Promise(function(e,n){t.$el.attr(w.HINT_AREA,""),t.$el.one("webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend",function(n){t.closeHintWritingArea(),e()})})}},{key:"closeHintWritingArea",value:function(){this.$el.removeAttr(w.HINT_AREA)}}]),e}(h.default);e.default=k},function(t,e,n){"use strict";function i(t){var e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0),e}function o(t,e){t.getContext("2d").drawImage(e,0,0)}Object.defineProperty(e,"__esModule",{value:!0}),e.copyCanvas=i,e.drawFrom=o},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){i(this,t),this._events={}}return o(t,[{key:"on",value:function(t,e){(this._events[t]?this._events[t]:this._events[t]=[]).push(e)}},{key:"off",value:function(t,e){if(1==arguments.length)this._events[t]=[];else if(arguments.length>1){var n=this._events[t],i=n.indexOf(e);i>-1&&events.splice(i,1)}}},{key:"trigger",value:function(t){var e=this._events[t];if(e){var n=Array.prototype.slice.call(arguments,1);for(var i in e)e[i].apply(this,n)}}}]),t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.CLOSE="hide"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.HINT_AREA="data-hint-area",e.DATA_WRITING_AREA="data-writing-area-text"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.LEFT="left"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DEFAULT={autoHistory:!1,autoStorage:!1,eraserColor:"transparent",background:"",controlsPosition:"center",controls:["Drawing",{Drawing:{color:"rgba(0, 0, 255, 1)"}},{Eraser:{lineWidth:"30"}},"Reset","ExtendVertical","Grid","Close"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DEFAULT={gridTipText:"請將格線拖拉至適當位置",hintAreaText:"手寫範圍"}},function(t,e,n){"use strict";(function(t){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function e(i){n(this,e),this.COPY_CTX_TYPES=["string","boolean","number"],this.pad=i,this.ctxTmp={},this.$actives=t()}return o(e,[{key:"_reset",value:function(){this.ctxTmp={}}},{key:"_saveCtx",value:function(){var t=this.pad.board.ctx;this._reset();for(var e in t){var n=t[e],o=void 0===n?"undefined":i(n);this.COPY_CTX_TYPES.indexOf(o)>-1&&-1==e.indexOf("webkit")&&(this.ctxTmp[e]=n)}}},{key:"_saveControls",value:function(){this.$actives=this.pad.$el.find(".drawing-board-control .active")}},{key:"save",value:function(){this._saveCtx(),this._saveControls()}},{key:"_restoreCtx",value:function(){var t=this.pad.board.ctx;for(var e in this.ctxTmp)t[e]=this.ctxTmp[e]}},{key:"restore",value:function(){this._restoreCtx(),this.$actives.addClass("active")}}]),e}();e.default=r}).call(e,n(0))}])});
//# sourceMappingURL=bundle.js.map