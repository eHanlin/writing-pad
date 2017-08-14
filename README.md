writing-pad
==============================

## Dependencies

* [drawingboard.js](https://github.com/eHanlin/drawingboard.js.git#v0.4.7)
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

* opts.canvasWidth: Set canvas width. The canvas is able to view width as wide as container when canvas width is wider than container.
* opts.controlsLayout: Set control panel's layout.(left or center)
* opts.useMovingGesture: Set true if you want to use scale gesture.

### WritingPad


#### resize()

Resize canvas width.

#### restore()

Draw a image to canvas from web storage.

#### show()

Show a container.

#### hide()

Hide a container.

#### isHidden()

Return true if current container's display is none.

#### toImage()

Get a image of base64.

#### saveByKey(key)

Save current canvas to history by key.

#### restoreByKey(key)

Draw a canvas from history's key.

#### clearStorage()

Remove images from storage

#### openGridBg()

Show the grid background.

#### closeGridBg()

Hide the grid background.

#### toggleGridBg()

Show or hide the grid background.

#### getHeight()

Get the container's height.

#### extendHeight(height)

Increase container's height.

* height: Input increasing values.

#### autosize(auto:boolean)

Resize canvas width when `resize` event is triggered by browser.


