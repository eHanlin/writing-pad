
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
    {   
      Drawing:{
        color:'rgba(0, 0, 255, 1)',
        tipText:'藍筆'
      }   
    },  
    {
      Drawing:{
        tipText:'黑筆'
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
    "ExtendVertical",
    "Grid",
    "Question",
    "Close",
  ]
};

