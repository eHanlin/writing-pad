!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("jQuery"),require("drawingboard.js")):"function"==typeof define&&define.amd?define(["jQuery","drawingboard.js"],n):"object"==typeof exports?exports.writingPad=n(require("jQuery"),require("drawingboard.js")):t.writingPad=n(t.jQuery,t["drawingboard.js"])}(this,function(t,n){return function(t){function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=5)}([function(n,e){n.exports=t},function(t,n){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],n=0;n<this.length;n++){var e=this[n];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(t,n){function e(t,n){for(var e=0;e<t.length;e++){var o=t[e],i=g[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(s(o.parts[r],n))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(s(o.parts[r],n));g[o.id]={id:o.id,refs:1,parts:a}}}}function o(t){for(var n=[],e={},o=0;o<t.length;o++){var i=t[o],r=i[0],a=i[1],d=i[2],s=i[3],l={css:a,media:d,sourceMap:s};e[r]?e[r].parts.push(l):n.push(e[r]={id:r,parts:[l]})}return n}function i(t,n){var e=f(),o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),w.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function r(t){t.parentNode.removeChild(t);var n=w.indexOf(t);n>=0&&w.splice(n,1)}function a(t){var n=document.createElement("style");return n.type="text/css",i(t,n),n}function d(t){var n=document.createElement("link");return n.rel="stylesheet",i(t,n),n}function s(t,n){var e,o,i;if(n.singleton){var s=v++;e=h||(h=a(n)),o=l.bind(null,e,s,!1),i=l.bind(null,e,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=d(n),o=u.bind(null,e),i=function(){r(e),e.href&&URL.revokeObjectURL(e.href)}):(e=a(n),o=c.bind(null,e),i=function(){r(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}function l(t,n,e,o){var i=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=A(n,i);else{var r=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}function c(t,n){var e=n.css,o=n.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function u(t,n){var e=n.css,o=n.sourceMap;o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([e],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var g={},p=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}},b=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,w=[];t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},void 0===n.singleton&&(n.singleton=b()),void 0===n.insertAt&&(n.insertAt="bottom");var i=o(t);return e(i,n),function(t){for(var r=[],a=0;a<i.length;a++){var d=i[a],s=g[d.id];s.refs--,r.push(s)}if(t){e(o(t),n)}for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete g[s.id]}}}};var A=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n,e){"use strict";function o(){return(Math.random()*r>>1).toString(16)}function i(){return o()+"-"+o()+"-"+o()+"-"+o()+"-"+o()}Object.defineProperty(n,"__esModule",{value:!0}),n.string=i;var r=1e5},,function(t,n,e){t.exports=e(8)},,,function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(0),r=(o(i),e(9)),a=(o(r),e(11)),d=(o(a),e(15)),s=(function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);n.default=t}(d),e(16)),l=o(s),c=e(17),u=o(c),g=e(19),p=o(g),b=e(20),f=o(b),h=e(21),v=o(h),w=e(22),A=o(w),y=e(23),m=o(y);DrawingBoard.Control.Close=l.default,DrawingBoard.Control.Grid=u.default,DrawingBoard.Control.ExtendVertical=p.default,DrawingBoard.Control.Drawing=f.default,DrawingBoard.Control.Eraser=v.default,DrawingBoard.Control.Reset=A.default,function(){var t=DrawingBoard.Control.Navigation.prototype.initialize;DrawingBoard.Control.Navigation.prototype.initialize=function(){t.apply(this,arguments),this.$el.find(".drawing-board-control-navigation-reset").html("<i class='fa fa-repeat'/>")}}();var x={build:m.default};n.default=x,t.exports=x},function(t,n,e){var o=e(10);"string"==typeof o&&(o=[[t.i,o,""]]);e(2)(o,{});o.locals&&(t.exports=o.locals)},function(t,n,e){n=t.exports=e(1)(),n.push([t.i,'.drawing-board,.drawing-board *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.drawing-board-controls-hidden,.drawing-board-utils-hidden{display:none!important}.drawing-board{position:relative;display:block}.drawing-board-canvas-wrapper{position:relative;margin:0;border:1px solid #ddd}.drawing-board-canvas{position:absolute;top:0;left:0;z-index:10;width:auto;cursor:crosshair;z-index:20}.drawing-board-cursor{position:absolute;top:0;left:0;pointer-events:none;border-radius:50%;background:#ccc;background:rgba(0,0,0,.2);z-index:30}.drawing-board-control-colors-rainbows,.drawing-board-control-size-dropdown,.drawing-board-control-size .drawing-board-control-inner,.drawing-board-control>button{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:hidden;border:none;background-color:#eee;padding:2px 4px;border:1px solid #ccc;box-shadow:0 1px 3px -2px #121212,inset 0 2px 5px 0 hsla(0,0%,100%,.3);-webkit-box-shadow:0 1px 3px -2px #121212,inset 0 2px 5px 0 hsla(0,0%,100%,.3);height:28px}.drawing-board-control>button{cursor:pointer;min-width:28px;line-height:14px}.drawing-board-control>button:focus,.drawing-board-control>button:hover{background-color:#ddd}.drawing-board-control>button.active,.drawing-board-control>button:active{box-shadow:inset 0 1px 2px 0 rgba(0,0,0,.2);-webkit-box-shadow:inset 0 1px 2px 0 rgba(0,0,0,.2);background-color:#ddd}.drawing-board-control>button[disabled]{color:gray}.drawing-board-control>button[disabled].active,.drawing-board-control>button[disabled]:active,.drawing-board-control>button[disabled]:focus,.drawing-board-control>button[disabled]:hover{background-color:#eee;box-shadow:0 1px 3px -2px #121212,inset 0 2px 5px 0 hsla(0,0%,100%,.3);-webkit-box-shadow:0 1px 3px -2px #121212,inset 0 2px 5px 0 hsla(0,0%,100%,.3);cursor:default}.drawing-board-controls{margin:0 auto;text-align:center;font-size:0;display:table;border-spacing:9.33333px 0;position:relative;min-height:28px}.drawing-board-controls[data-align=left]{margin:0;left:-9.33333px}.drawing-board-controls[data-align=right]{margin:0 0 0 auto;right:-9.33333px}.drawing-board-canvas-wrapper+.drawing-board-controls,.drawing-board-controls+.drawing-board-canvas-wrapper{margin-top:5px}.drawing-board-controls-hidden{height:0;min-height:0;padding:0;margin:0;border:0}.drawing-board-control{display:table-cell;border-collapse:separate;vertical-align:middle;font-size:16px;height:100%}.drawing-board-control-inner{position:relative;height:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.drawing-board-control>button{margin:0;vertical-align:middle}.drawing-board-control-colors{font-size:0;line-height:0}.drawing-board-control-colors-current{border:1px solid #ccc;cursor:pointer;display:inline-block;width:26px;height:26px}.drawing-board-control-colors-rainbows{display:inline-block;margin-left:5px;position:absolute;left:0;top:33px;margin-left:0;z-index:100;width:250px;height:auto;padding:4px}.drawing-board-control-colors-rainbow{height:18px}.drawing-board-control-colors-picker:first-child{margin-right:5px}.drawing-board-control-colors-picker{display:inline-block;width:18px;height:18px;cursor:pointer}.drawing-board-control-colors-picker[data-color="rgba(255, 255, 255, 1)"]{width:16px;height:17px;border:1px solid #ccc;border-bottom:none}.drawing-board-control-colors-picker:hover{width:16px;height:16px;border:1px solid #555}.drawing-board-control-drawingmode>button{margin-right:2px}.drawing-board-control-drawingmode>button:last-child{margin-right:0}.drawing-board-control-drawingmode-pencil-button{overflow:hidden;*text-indent:-9999px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAe9JREFUeNpiZAACVlFRBhYREQZcQPnbNwa3N28YlL5+ZfgLFfvPwGD9m4FhIgsDHuAO0gTUDNKIBvyBmqt/MTDMY8Gl0f31azD7L6oUIxCnAzWmAPHBfwwM01AMUAV6JfPQIVwOYgVqqPnFyOjz6///O38YGKpAgmAD1OXlGdTk5PD5hgeouZudj8/uy9evP/78/dsFFPsJNiAoKIiBABAHap4oLi9v8fTNm48//v7NBwbgWZgkE7rqt8DY+A8JZRBW+cfIuEDT0NDlzadP3z98/doPFDuCrB7TAGFhBqCNIGwM9OcKUzs7+xdv3355+f79VqDYAiTDwZgJh7ONgYpnOvn4GL949erT7UePdgL5JVCD4fgBLBBxaX74+PG789evnwby0/8jKXgExIeB+CG6Af///1e9Ki9vFSAkZPzoyZPPJy9evA9MB77/sWiEARZkzV+/fvXYtGnTpG3btj28EBT0BqjZ5D8OjXCwPksUhA1Wpggf/PHjx/9169Y9EBERaUlgZmaIAcrLE4rk5sIqBqDmlefnRPzfWGX5EaSZm5ubgRloADGA5QZ3RgK7gESY4PMNn9ZtObPpzZvfU4DiYkiB/RcHG+S7fyxAMH/lFU2GOZd2bLx18/cEUMoD4j9I+DcS/RtJHGTYf4AAAwAxaOMYHjxKFwAAAABJRU5ErkJggg==");background-position:50% 50%;background-repeat:no-repeat}.drawing-board-control-drawingmode-pencil-button:before{content:"";display:block;width:0;height:100%}.drawing-board-control-drawingmode-eraser-button{overflow:hidden;*text-indent:-9999px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkpJREFUeNp0kk+IElEcx39vFBc9+OfQRTAwzFt4CaYOKStj6MoeculStzoIQSB4kCVckmDx4iGCXWYJIqjoVOzO1l4qT1F7WfBWHvxzDPyTB3XUmXn93suRybUffHmP997n9/cRsFgwGARJkiAcDsPlwgEIeEZQAhCRAkgAlOD6SQP4rgMFDWVnYCAQgFgsBqFQCBwOByzZNQOotPHx1RNCCCipu6bfb+zSnslkeOQVILPrBkAirbws9btdTEWAzZPXpfepOzaeGMBXwe/3w3+MwTc3Dl+UeghTiskbBvR6Pbh18mZHB0jjmxvCKhIfR37s3r+Sevf8ca/T4TBF2HTSODuDxP7uNjrZFFbBk8lEzOVyspa4ykGYw2zfbTb/7ilvok1YhlVVFfP5vDydTkHXdXDdlhZOOnPY4/HA0YPtp3h6LFjh8XgsFgoFGTPgsKm1zDr8ajTQh8Fh5eGjZzjGI8yjKlgjF4tFGdd/YKYmRja24hw+zu3sYe2HiH3hYzQjl8tleTQanWtou93G6Qngdrth6+1+9h6hTULJZ/PeziJXKhV5OByeg1ut1gJOp9NZTdNOcQ419ot+ggp1qoLdBFmqVmNpm3A8Huewy+Wq1RH8QH9zmBlJJpMRdCIqiiIPBgN+2MCGsW/r8/kgGo1m0fmpzWarseayHlmNeL1eFiWC0cRqtSr3+/3FpSiKHMZtjU1glbFyfKgLTqfzEka9OJvNeDnzz1JnCaFmqOl8ZdJY1SiDOXCiXKg1NtG5DIt0y6ov3dE/AgwAENFWYYLj4mYAAAAASUVORK5CYII=");background-position:50% 50%;background-repeat:no-repeat}.drawing-board-control-drawingmode-eraser-button:before{content:"";display:block;width:0;height:100%}.drawing-board-control-drawingmode-filler-button{overflow:hidden;*text-indent:-9999px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnNJREFUeNp0k0trE1EUx89MJpNJooYYXBgDNtCKdRPwlbqoCKUtaNVNA0Uo7UbMxoVPEARTXEi+QWfnwn6DEAlEkrSLttTGRiULEQlJ8yChmbzI++E50yTUJA78uMy953/u/557LmOz2WDEZ2m1WrckSRJSqdR2tVrdHQyYebwHtVoNuFHqTqczhQnWKaBYLDoKhcIuzgHDMKBSqeD20qd+LNdsNocSoFhRr9ctpVLJigl4xIIJQizLAmG4cAPa7bYcy9Iug5TL5UYikbD6/X7Rbre/IUcYe3WUW5ZsnQQzW9LpNOPz+UQc5aBM5mgdh7vI9FCCAesW2tnr9YqZTAby+bw8f3AQRP6853n+Ph5hemSCntjj8YjZbFYWx2IxeS2RSEMwuA87O79eqdXquVolK+GxnP0EPbHb7RZJSGABIR6PA11zJHKIR2MhHA5DIPDj7eH3j95KpfK60Wg8Yntil8slkqgnpioLghacTidoNDpEC3q9HnheCc3s1jZeLcW943pirPw/4lKpBkqlDubnl/riycnLsLy88EKj0fhzuRyZv8RFo1E6wpBYkiqy7Z54YmIcVlYeyOKC4mYwJ0nHRaQuM5vNT6hB/iceG7sIq6sPnwmC4MerDkby40AOCCoiddie1Wp92W7zQ2KTyQSLizNP8T0EsPLBbxEDnCj0GkM2qIEwyZRCobizsfH5A1ZXFhuN52F29vpz3HkL574mk8lj24Y5wsHkvjjoX0BOIWc5jruHzbK2ufmzEwpFO3jnDhQv4JoROYdoERVyGjEgZ8iBDlF3FzXo4go6utZ9lftY4N/dXisjR0i1G0ublv8KMAA0ZoUlicxrhwAAAABJRU5ErkJggg==");background-position:50% 50%;background-repeat:no-repeat}.drawing-board-control-drawingmode-filler-button:before{content:"";display:block;width:0;height:100%}.drawing-board-control-navigation>button{font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;margin-right:2px}.drawing-board-control-navigation>button:last-child{margin-right:0}.drawing-board-control-size[data-drawing-board-type=range] .drawing-board-control-inner{width:75px}.drawing-board-control-size[data-drawing-board-type=dropdown] .drawing-board-control-inner{overflow:visible}.drawing-board-control-size-range-input{position:relative;width:100%;z-index:100;margin:0;padding:0;border:0}.drawing-board-control-size-dropdown-current span,.drawing-board-control-size-dropdown span,.drawing-board-control-size-range-current{display:block;background:#333;opacity:.8}.drawing-board-control-size-range-current{display:inline-block;opacity:.15;position:absolute;pointer-events:none;left:50%;top:50%;z-index:50}.drawing-board-control-size-dropdown-current{display:block;height:100%;width:40px;overflow:hidden;position:relative}.drawing-board-control-size-dropdown-current span{position:absolute;left:50%;top:50%}.drawing-board-control-size-dropdown{position:absolute;left:-6px;top:33px;height:auto;list-style-type:none;margin:0;padding:0;z-index:100}.drawing-board-control-size-dropdown li{display:block;padding:4px;margin:3px 0;min-height:16px}.drawing-board-control-size-dropdown li:hover{background:#ccc}.drawing-board-control-size-dropdown span{margin:0 auto}.drawing-board-control-download-button{overflow:hidden;*text-indent:-9999px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoBJREFUeNqMkr9PU1EUx7/vR1tQ3yu10hAmTawtBSYSy2YccFOcnDQm/gewOLnj5GYMg4sdXFxkMca4OBAwdUBe/ZkIGFp+9tHXvh/3/fTcAm01aLzJybnn3nM+95tzrnDl6Tb+sibuTmWUWj3C6/Juk+LySUmyvt0FCKKA02ryOCy6LBiu15ngMbZ5DDCNBqIw6gKM+n4nECUJru3glKry8CpjQaHVYmC2rVH82DIMMMdGGARdwJ+SPNdFS9chx+MXDNMp/NzagWNatk/nQU/hiYAoih6FYTBCBs9zUXMCbAhx2OYOv351lPOJ3EwH4LteL6Dcp/Rfu3FrstDyIizt+agpaYxNDU0M9gl4v7Ck+TYrCYLQqZHUyTtdQBiutPSGUflczSXHs5lVKwZdSOBMvwztxVvN0RtzsiyXBFHsAvL5PBSnCpXV2getILFiE2SjspYbuZzPiDSZ2vOXmlvX5yQqTmMfg9ZXqtls1wnT09OHEyAq0aFLg/gSXsSWq9wWk+p9PrCoYTwcijdLOfE7UsEufN9HGIYnT4EnTGIXe1KqtNNIvuNnGamxfi7SgQD/nIJCTbzOPQ/SQh1pud7T4M6W/8qFIw/5WAr5m7Ozsw9UVc069Fls2yJzSC5/lnc9RhaHZVnfSqUnEgXP2oBqtYqBgYG2+mKxmOVADnAcB4yxHgD1RzehKKns/LyV4gUHBweQy+UyRkdH6UKJ6fQDFxcXoWkaXJeRuTgUGCdLQJ9bx72lGZimGWs2m+083oN+2iiFQiGxvLy8RrDzudyltgrG3N8U2G8CrPz4sGYYRqJSqWR4H/jNWbJhUjAWi8XG8R/L87yPpGCVttVfAgwAVpZR+8tZC08AAAAASUVORK5CYII=");background-position:50% 50%;background-repeat:no-repeat}.drawing-board-control-download-button:before{content:"";display:block;width:0;height:100%}',""])},function(t,n,e){var o=e(12);"string"==typeof o&&(o=[[t.i,o,""]]);e(2)(o,{});o.locals&&(t.exports=o.locals)},function(t,n,e){n=t.exports=e(1)(),n.push([t.i,"@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash-to-transparency{0%,50%,to{opacity:0}25%,75%{opacity:1}}.writing-pad-container{overflow:hidden}.writing-pad-container[data-hint-area]:before{width:100%;height:100%;position:absolute;content:attr(data-writing-area-text);box-sizing:border-box;border:6px dashed #eee;display:flex;justify-content:center;flex-direction:column;color:gray;text-align:center;animation-name:flash-to-transparency;animation-iteration-count:1;animation-duration:3s;background:hsla(0,0%,100%,.5);font-size:80px}.writing-pad-container[data-hint-area][data-control-layout=left]:before{margin-left:50px;width:calc(100% - 50px)}.writing-pad-container[data-control-layout=left] .drawing-board-controls{display:block}.writing-pad-container[data-control-layout=left] .drawing-board-controls .drawing-board-control{display:block;text-align:right}.writing-pad-container[data-control-layout=left] .drawing-board-controls .drawing-board-control.drawing-board-control-drawingmode button{display:block;float:right;clear:right;margin-right:0}.writing-pad-container[data-control-layout=left] .drawing-board-controls .drawing-board-control button{outline:0;height:50px;font-size:18px;margin-top:2px;width:50px;border-radius:50%!important}.writing-pad-container[data-control-layout=left] .drawing-board-controls~.drawing-board-canvas-wrapper{margin-left:50px}.writing-pad-container[data-control-layout=left] .controls-background{height:100%;width:50px;position:absolute;pointer-events:none;display:block;background:url("+e(13)+');opacity:.7}.writing-pad-container .controls-background{display:none}.writing-pad-container,.writing-pad-container .writing-inner-content{height:100%;position:relative}.writing-pad-container .writing-pad-mask{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1}.writing-pad-container .writing-pad-mask>div{margin:0 auto;height:100%;box-sizing:border-box}.writing-pad-container .writing-pad-mask>div>.drawing-board-controls{padding-top:10px;padding-bottom:10px;position:fixed;top:0;z-index:100}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper{border:none;margin:0 auto}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper .dragging-bg-button{position:absolute;left:10px;top:10px;z-index:100;cursor:pointer;display:none;background:#fff;border:1px solid #ccc}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.grid .dragging-bg-button{display:inline-block}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.grid:after{cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:move;content:" ";display:block;position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;background-image:url('+e(14)+");opacity:.2}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper .drawing-tip-title{display:none;color:#fd3d3d;font-size:40px}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.move-bg .drawing-tip-title{pointer-events:none;display:block;width:100%;text-align:left;top:0;margin-left:60px}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.move-bg .dragging-bg-button{box-shadow:inset 0 1px 2px 0 rgba(0,0,0,.2);background:#ddd}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.move-bg.grid:after{opacity:.7}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper.move-bg canvas{z-index:0;pointer-events:none;opacity:.2}.writing-pad-container .writing-pad-mask>div>.drawing-board-canvas-wrapper .drawing-board-cursor{border-radius:50%!important}.writing-pad-container .writing-pad-mask>div canvas{opacity:.7}",""])},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQBAMAAAD+CqKmAAAAKlBMVEX5+fn6+vr7+/v8/Pz////4+Pj39/f29vb19fX09PTz8/Py8vLx8fHo6OgTp668AAAAkElEQVR4XmO4iwQYrriAAIRkuKLRuXXO6itLp3UtjWa4Mn3i1l0dV6Slqy0TGK6I7dgtFnwlzXKp0mqGK61lkpXSV1Z0bty4neFKeljosg1XZq0IsBFkuCKxUJOB84pwgHgWO6o9EEsgJEPr9t1wqxgOaYTDrWLgLG2GW8WQJcYDt4phQvkZuFUM26uWwq0CAHdtZDNiQoOHAAAAAElFTkSuQmCC"},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAABYlAAAWJQFJUiTwAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAS0lEQVRIDe3SwQkAIAxD0ej+O2s3CAHJQX7BUwmhD5ekM6861cJdPW3KKHwuDimksQCfJiZzAUidULyHNCZzAUidULyHNCZzgf9JL3bOAjSNkD/+AAAAAElFTkSuQmCC"},function(t,e){t.exports=n},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=DrawingBoard.Control.extend({name:"close",initialize:function(){var t=this;this.$el.append('\n      <button class="drawing-board-control-close-button">\n        <i class="fa fa-close"></i>\n      </button>\n    '),this.$el.on("click",".drawing-board-control-close-button",function(n){t.board.__extend._onClose(),t.board.__extend.hide(),n.preventDefault()})}});n.default=o},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(18),i=e(0),r=function(t){return t&&t.__esModule?t:{default:t}}(i),a=DrawingBoard.Control.extend({name:"grid",initialize:function(){this.$el.append('\n      <button class="drawing-board-control-grid-button">\n        <i class="fa fa-th"></i>\n      </button>\n    '),this.$el.on("click",".drawing-board-control-grid-button",this.onClick.bind(this))},onClick:function(t){t.preventDefault(),this.board.__extend.toggleGridBg(),this._getDraggingButtonInstance(),this._setTipTitle(this.board.__extend.opts.gridTipText),this.board.__extend._getWrapper().hasClass("grid")||this._disableMovingBG(),this.getButtonElement().toggleClass("active")},getButtonElement:function(){return this.$el.find("button")},DRAG_BG_BUTTON:"dragging-bg-button",canDragging:!1,_getEventPoint:function(t){var n;if(void 0==t.pageX){var e=t.originalEvent,o=e.changedTouches;n={x:o[0].pageX,y:o[0].pageY}}else n={x:t.pageX,y:t.pageY};return n},_initMoveBGEvent:function(){var t=this,n=this.board.__extend._getWrapper();n.on("mousedown touchstart",function(n){n.preventDefault(),t.canDragging=!0;var e=t._getEventPoint(n);t.startX=e.x,t.startY=e.y}),n.on("mousemove touchmove",function(n){if(t.canDragging){var e=t._getEventPoint(n),o=e.x-t.startX,i=e.y-t.startY,r=t.getBGPoint();t.setBGPoint(r.x+o,r.y+i),t.startX=e.x,t.startY=e.y}}),n.on("mouseup touchend",function(n){return t.canDragging=!1});var e=this.$style=(0,r.default)("<style id='drawing-bg-move-style'></style>");(0,r.default)(document.body).append(e)},DRAWING_TIP_TITLE:"drawing-tip-title",_setTipTitle:function(t){var n=this.board.__extend._getWrapper(),e=n.find("."+this.DRAWING_TIP_TITLE);e.length||(e=(0,r.default)(r.default.parseHTML('\n        <div class="'+this.DRAWING_TIP_TITLE+'"></div>\n      ')),n.append(e)),e.html(t)},setBGPoint:function(t,n){this.$style.html(".drawing-board-canvas-wrapper.grid:after { background-position-x:"+t+"px; background-position-y:"+n+"px;}")},getBGPoint:function(){var t=this.board.__extend._getWrapper(),n=window.getComputedStyle(t[0],":after"),e=(n.getPropertyValue("background-position-x")||"0").replace(/[%px]/g,""),o=(n.getPropertyValue("background-position-y")||"0").replace(/[%px]/g,"");return{x:Number(e),y:Number(o)}},_disableMovingBG:function(){this.board.__extend._getWrapper().removeClass("move-bg")},_enableMovingBG:function(){this.board.__extend._getWrapper().addClass("move-bg")},_toggleMovingBG:function(){this.board.__extend._getWrapper().hasClass("move-bg")?this._disableMovingBG():this._enableMovingBG()},_getDraggingButtonInstance:function(){var t=this,n=this.board.__extend._getWrapper(),e=n.find("."+this.DRAG_BG_BUTTON);return e.length||(e=(0,r.default)(r.default.parseHTML('<button class="'+this.DRAG_BG_BUTTON+'">\n        <i class="fa fa-arrows" aria-hidden="true"></i>\n      </button>')),n.append(e),e.on(o.isTouchEvent?"touchstart":"click",function(){return t._toggleMovingBG()}),this._initMoveBGEvent()),e}});n.default=a},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.isTouchEvent=function(){return"ontouchstart"in window}()},function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0});var e=DrawingBoard.Control.extend({name:"extendVertical",initialize:function(){var n=this;this.$el.append('\n      <button class="drawing-board-control-extend-vertical-button">\n        <i class="fa fa-arrows-v"></i>\n      </button>\n    '),this.$el.on("click",".drawing-board-control-extend-vertical-button",function(e){n.board.__extend.extendHeight();var o=t("body");o.animate({scrollTop:o.get(0).scrollHeight},1e3),e.preventDefault()})}});n.default=e}).call(n,e(0))},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),i=function(t){return t&&t.__esModule?t:{default:t}}(o),r=DrawingBoard.Control.extend({name:"drawing",_initElement:function(t){this.$el.append('\n      <button class="'+t+'" data-mode="pencil">\n        <i class="fa fa-pencil"></i>\n      </button>\n    '),this.getButtonElement().css("color",this.color)},_initOpts:function(t){var n=t.lineWidth,e=t.color;n&&(this.lineWidth=n),e&&(this.color=e)},initialize:function(){this._initOpts(this.opts||{}),this._initElement("drawing-board-control-customize-drawing-button"),this.$el.on("click",".drawing-board-control-customize-drawing-button",this.onClick.bind(this)),this.board.ev.bind("board:mode",this.onChangedMode.bind(this))},getButtonElement:function(){return this.$el.find("button")},onClick:function(t){t.preventDefault();var n=(0,i.default)(t.currentTarget),e=n.attr("data-mode");this.board.ctx.lineWidth=this.lineWidth,this.board.setColor(this.color),this.board.setMode(e),n.addClass("active")},onChangedMode:function(){this.getButtonElement().removeClass("active")},color:"rgba(0, 0, 0, 1)",lineWidth:"3"});n.default=r},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),i=function(t){return t&&t.__esModule?t:{default:t}}(o),r=DrawingBoard.Control.extend({name:"eraser",_initElement:function(){this.$el.append('\n      <button class="drawing-board-control-drawingmode-'+this.name+'-button" data-mode="'+this.name+'"></button>')},initialize:function(){this._initElement(),this.$el.on("click","button",this.onClick.bind(this)),this.board.ev.bind("board:mode",this.onChangedMode.bind(this)),this.opts.lineWidth&&(this.lineWidth=this.opts.lineWidth)},getButtonElement:function(){return this.$el.find("button")},onClick:function(t){t.preventDefault();var n=(0,i.default)(t.currentTarget),e=n.attr("data-mode");this.board.ctx.lineWidth=this.lineWidth,this.board.setMode(e),n.addClass("active")},onChangedMode:function(){this.getButtonElement().removeClass("active")},lineWidth:"15"});n.default=r},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),i=(function(t){t&&t.__esModule}(o),DrawingBoard.Control.extend({name:"reset",_initElement:function(){this.$el.append('\n      <button class="drawing-board-control-reset-button">\n        <i class="fa fa-repeat" aria-hidden="true"></i>\n      </button>\n    ')},initialize:function(){var t=this;this._initElement(),this.opts.confirmationText&&(this.confirmationText=this.opts.confirmationText),this.opts.disabledConfirmation&&(this.disabledConfirmation=this.opts.disabledConfirmation),this.$el.on("click","button",function(){(t.disabledConfirmation||confirm(t.confirmationText))&&t.board.__extend.resize()})},confirmationText:"確定要清除繪圖板?",disabledConfirmation:!1}));n.default=i},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(0),r=(o(i),e(3)),a=(function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);n.default=t}(r),e(24)),d=o(a),s=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new d.default(t,n)};n.default=s},function(t,n,e){"use strict";function o(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}function i(t){return t&&t.__esModule?t:{default:t}}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function d(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),l=e(0),c=i(l),u=e(3),g=o(u),p=e(25),b=o(p),f=e(26),h=i(f),v=e(27),w=e(28),A=e(29),y=e(30),m=e(31),x=e(32),k=i(x),_=e(33),B=(i(_),function(t){function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,n);var o=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),i="writingPad"+g.string();return o.histories={},o.stateHistory=new k.default(o),o._initOpts(e),o._initDOM(t,i,o.opts),o.board=new DrawingBoard.Board(i,o.boardOpts),o.board.__extend=o,o._initLayoutControls(o.opts),o}return d(n,t),s(n,[{key:"_initOpts",value:function(t){this.opts=c.default.extend(m.DEFAULT,t),this._initBoardOpts(t)}},{key:"_initBoardOpts",value:function(t){var n=c.default.extend(!0,{},y.DEFAULT);t.controls&&(n.controls=controls),t.gridTipText&&(n.gridTipText=gridTipText),t.useMovingGesture&&(n.useMovingGesture=t.useMovingGesture),this.boardOpts=n}},{key:"_initDOM",value:function(t,n,e){var o=this._buildContainerElement(n,e),i=(0,c.default)(t);o.hide(),i.append(o),this.$el=o,e&&e.canvasWidth&&this._setInnerContentWidth(e.canvasWidth)}},{key:"_initLayoutControls",value:function(t){t&&t.controlsLayout===A.LEFT&&this.$el.attr(w.DATA_CONTROL_LAYOUT,A.LEFT),this._setFirstControlToDefault()}},{key:"_setFirstControlToDefault",value:function(){this.$el.find(".drawing-board-control:first button").click()}},{key:"_getInnerContentElement",value:function(){return this.$el.find(".writing-inner-content")}},{key:"_setInnerContentWidth",value:function(t){this._getInnerContentElement().width(t+2)}},{key:"_buildContainerElement",value:function(t,n){return(0,c.default)('\n      <div class="writing-pad-container" '+w.DATA_WRITING_AREA+'="'+n.hintAreaText+'">\n        <div class="writing-inner-content">\n          <div class="writing-pad-mask">\n            <div id=\''+t+'\'>\n              <div class="controls-background"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ')}},{key:"resize",value:function(){this.stateHistory.save(),this.board.resize({controlHeight:!1}),this.stateHistory.restore()}},{key:"show",value:function(){this.$el.show()}},{key:"hide",value:function(){this.$el.hide()}},{key:"isHidden",value:function(){return/none/i.test(this.$el.css("display"))}},{key:"toImage",value:function(){return this.board.getImg()}},{key:"toBlob",value:function(t,n){var e=this;return new Promise(function(o,i){e.board.canvas.toBlob(o,t,n)})}},{key:"saveByKey",value:function(t){try{this.histories[t]=b.copyCanvas(this.board.canvas)}catch(t){return console.warn(t),!1}return!0}},{key:"containKey",value:function(t){return!!this.histories[t]}},{key:"deleteKey",value:function(t){delete this.histories[t]}},{key:"_resetBoard",value:function(){this.board.clear()}},{key:"restoreByKey",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.clearEmpty,o=void 0===e||e,i=n.useHistoryHeight,r=void 0!==i&&i;if(this.containKey(t)){var a=this.histories[t];return this._resetBoard(),r&&this.resetHeight(a.height),b.drawFrom(this.board.canvas,a),!0}return!!o&&this._resetBoard()}},{key:"clearStorage",value:function(){this.board.clearWebStorage()}},{key:"_onClose",value:function(){this.trigger(v.CLOSE)}},{key:"_getWrapper",value:function(){return this.$el.find(".drawing-board-canvas-wrapper")}},{key:"openGridBg",value:function(){this._getWrapper().addClass("grid")}},{key:"closeGridBg",value:function(){this._getWrapper().removeClass("grid")}},{key:"toggleGridBg",value:function(){this._getWrapper().toggleClass("grid")}},{key:"_delayResize",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;clearTimeout(this._timeId),this._timeId=setTimeout(function(){if(!t.isHidden()){var n=board.getImg();t.$el.find(".drawing-board-canvas-wrapper, canvas").width("100%"),t.resize(),t.restoreHistory(n)}},n)}},{key:"getHeight",value:function(){return this.$el.height()}},{key:"extendHeight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,n=b.copyCanvas(this.board.canvas);this.$el.height(this.getHeight()+t),this.resize(),this._resetBoard(),b.drawFrom(this.board.canvas,n)}},{key:"resetHeight",value:function(t){b.copyCanvas(this.board.canvas);this.$el.height(t),this.resize(),this._resetBoard()}},{key:"autosize",value:function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(0,c.default)(window).off("resize",this._delayResize):(0,c.default)(window).on("resize",this._delayResize)}},{key:"openHintWritingArea",value:function(){var t=this;return new Promise(function(n,e){t.$el.attr(w.HINT_AREA,""),t.$el.one("webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend",function(e){t.closeHintWritingArea(),n()})})}},{key:"closeHintWritingArea",value:function(){this.$el.removeAttr(w.HINT_AREA)}}]),n}(h.default));n.default=B},function(t,n,e){"use strict";function o(t){var n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(t,0,0),n}function i(t,n){var e=t.getContext("2d"),o=e.globalCompositeOperation;e.globalCompositeOperation="source-over",e.drawImage(n,0,0),e.globalCompositeOperation=o}Object.defineProperty(n,"__esModule",{value:!0}),n.copyCanvas=o,n.drawFrom=i},function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),r=function(){function t(){o(this,t),this._events={}}return i(t,[{key:"on",value:function(t,n){(this._events[t]?this._events[t]:this._events[t]=[]).push(n)}},{key:"off",value:function(t,n){if(1==arguments.length)this._events[t]=[];else if(arguments.length>1){var e=this._events[t],o=e.indexOf(n);o>-1&&events.splice(o,1)}}},{key:"trigger",value:function(t){var n=this._events[t];if(n){var e=Array.prototype.slice.call(arguments,1);for(var o in n)n[o].apply(this,e)}}}]),t}();n.default=r},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.CLOSE="hide"},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.HINT_AREA="data-hint-area",n.DATA_WRITING_AREA="data-writing-area-text",n.DATA_CONTROL_LAYOUT="data-control-layout"},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.LEFT="left"},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.DEFAULT={autoHistory:!1,autoStorage:!1,eraserColor:"transparent",background:"",controlsPosition:"center",controls:["Drawing",{Drawing:{color:"rgba(0, 0, 255, 1)"}},{Eraser:{lineWidth:"30"}},"Reset","ExtendVertical","Grid","Close"]}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.DEFAULT={gridTipText:"請將格線拖拉至適當位置",hintAreaText:"手寫範圍"}},function(t,n,e){"use strict";(function(t){function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),r=function(){function n(o){e(this,n),this.COPY_CTX_TYPES=["string","boolean","number"],this.pad=o,this.ctxTmp={},this.$actives=t()}return i(n,[{key:"_reset",value:function(){this.ctxTmp={}}},{key:"_saveCtx",value:function(){var t=this.pad.board.ctx;this._reset();for(var n in t){var e=t[n],i=void 0===e?"undefined":o(e);this.COPY_CTX_TYPES.indexOf(i)>-1&&-1==n.indexOf("webkit")&&(this.ctxTmp[n]=e)}}},{key:"_saveControls",value:function(){this.$actives=this.pad.$el.find(".drawing-board-control .active")}},{key:"save",value:function(){this._saveCtx(),this._saveControls()}},{key:"_restoreCtx",value:function(){var t=this.pad.board.ctx;for(var n in this.ctxTmp)t[n]=this.ctxTmp[n]}},{key:"restore",value:function(){this._restoreCtx(),this.$actives.addClass("active")}}]),n}();n.default=r}).call(n,e(0))},function(t,n,e){var o;!function(i){"use strict";var r=i.HTMLCanvasElement&&i.HTMLCanvasElement.prototype,a=i.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),d=a&&i.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),s=i.BlobBuilder||i.WebKitBlobBuilder||i.MozBlobBuilder||i.MSBlobBuilder,l=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,c=(a||s)&&i.atob&&i.ArrayBuffer&&i.Uint8Array&&function(t){var n,e,o,i,r,c,u,g,p;if(!(n=t.match(l)))throw new Error("invalid data URI");for(e=n[2]?n[1]:"text/plain"+(n[3]||";charset=US-ASCII"),o=!!n[4],i=t.slice(n[0].length),r=o?atob(i):decodeURIComponent(i),c=new ArrayBuffer(r.length),u=new Uint8Array(c),g=0;g<r.length;g+=1)u[g]=r.charCodeAt(g);return a?new Blob([d?u:c],{type:e}):(p=new s,p.append(c),p.getBlob(e))};i.HTMLCanvasElement&&!r.toBlob&&(r.mozGetAsFile?r.toBlob=function(t,n,e){t(e&&r.toDataURL&&c?c(this.toDataURL(n,e)):this.mozGetAsFile("blob",n))}:r.toDataURL&&c&&(r.toBlob=function(t,n,e){t(c(this.toDataURL(n,e)))})),void 0!==(o=function(){return c}.call(n,e,n,t))&&(t.exports=o)}(window)}])});
//# sourceMappingURL=bundle.js.map