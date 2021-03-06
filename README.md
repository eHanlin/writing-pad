writing-pad
==============================

## Dependencies

* [drawingboard.js](https://github.com/eHanlin/drawingboard.js.git#v0.4.10)
* font-awesome
* jquery


## Usage

```js
var container = document.querySelector("#container");
var board = writingPad.build(container);
board.show()
board.resize()
```

## API
 
### writingPad.build(element, opts)

Create an instance of writingPad class.

#### element

Append to element container.

#### opts

This is some optional settings.

* **opts.canvasWidth:** Set canvas width. The canvas is able to view width as wide as container when canvas width is wider than container.
* **opts.controlsLayout:** Set control panel's layout.(left 、 center 、 right or left-right)
* **opts.useMovingGesture:** Set true if you want to use scale gesture.
* **opts.isDrawingOnEvent:** Use event to draw canvas, if value is true.
* **opts.gridTipText:** Set the tip text of grid's background.
* **opts.hintAreaText:** Set hint that is able to write area.
* **opts.controls:**  The control panel's setup support `Drawing` 、 `Eraser` 、 `Grid` 、 `ExtendVertical` 、 `Close` 、 `Reset` 、 `Undo` 、 `Redo` 、 `Color` and so on.
> Set `color` or `lineWidth` if you use `Drawing`. (ie `{Drawing:{color:'rgba(0, 0, 255, 1)', lineWidth:'5'}}`).
> The `Reset` feature is able to set `disabledConfirmation` and `confirmationText`. (ie `{Reset:{confirmationText:'Do you want to clear board?'}}`)

See [this](https://github.com/eHanlin/drawingboard.js#included-controls) if you want to use `drawingboard.js` controls.

### WritingPad


##### resize()

Resize canvas width.

##### show()

Show a container.

##### hide()

Hide a container.

##### isHidden()

Return true if current container's display is none.

##### toImage()

Get a image of base64.

##### toBlob(type, quality):Promise

Get a blob.

```js
board.toBlob().then(function(blob){
  //do something
});
```

##### load(resource)

Load a image to draw canvas, the resource can be url or img.

You must set `img.crossOrigin` and cross domain headers If your canvas need be exported what to use `toBlob` or `toImage`.

##### saveByKey(key)

Save current canvas to history by key.

##### restoreByKey(key, opts)

Draw a canvas from history's key.

* opts.useHistoryHeight: Reset canvas height from history's canvas height, if useHistoryHeight is true.

##### deleteKey(key)

Delete history by key.

##### containKey(key)

Return true if this key exist history.

##### clearStorage()

Remove images from storage

##### openGridBg()

Show the grid background.

##### closeGridBg()

Hide the grid background.

##### toggleGridBg()

Show or hide the grid background.

##### getHeight()

Get the container's height.

##### extendHeight(height)

Increase container's height.

* height: Input increasing values.
* opts.slide: The `slide` height/200px if value is true.
* opts.slideDuration: Durations are given in milliseconds. The default duration is `450`.
* opts.slideEl: The `slideEl` is element or css selector string which slides scroll top.

##### resetHeight(height)

Reset canvas height.

* height: canvas height.

##### autosize(auto:boolean)

Resize canvas width when `resize` event is triggered by browser.

##### openHintWritingArea()

Open hint that is able to write area.

##### closeHintWritingArea()

Close hint that is able to write area.

##### getControl(id:string)

Get a control object by id. Be able to set id in `opts.controls` like this：

```
writingPad.build(container, {
  controls:[
    {
      Drawing: {
        id:'1'
      }
    }
  ]
})
```


### Events

* hide
* startDrawing
* stopDrawing
* drawing
* openColorPicker
* closeColorPicker
* clear
* changeDrawingColor
* changeDrawingSize

