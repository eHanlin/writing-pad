
export const DEFAULT = { 
  autoHistory:false,
  autoStorage:false,
  eraserColor:'transparent',
  background:'',
  controlsPosition:'center',
  controls:[
/*    {
      Size:{
        type: 'dropdown'
      }
    },
    {
      DrawingMode:{
        filler: false
      }
    },
    {
      Navigation:{
        back: false,
        forward: false
      }
    },*/
    'Color',
    {   
      Drawing:{
        color:'rgba(0, 0, 255, 1)'
      }   
    },  
    {
      Drawing:{
      }
    },
    {   
      Eraser:{
        lineWidth: '30'
      }   
    },  
    'Reset',
    /*{   
      Navigation:{
        back: false,
        forward: false
      }   
    },*/  
    //"Redo",
    "Undo",
    "ExtendVertical",
    "Grid",
    "Question",
    "Close",
  ]
};

