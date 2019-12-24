import React from 'react'
import Boundingbox  from 'react-bounding-box'
import './App.css';

class BoundingBox extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            showboundingboxes: false,
            xCoordinates:'',
            yCoordinates:'',
              image: '',
              box:[],
              boxes :[],
            
              options:{
                colors: {
                            normal: 'rgba(255,225,255,1)',
                            selected: 'rgba(0,225,204,1)',
                            unselected: 'rgba(100,100,100,1)'
                          },
                style: {
                    maxWidth: '100%',
                    maxHeight: '90vh'
                  },

              }
              
        }
    }
    handleLoad=()=>{
      //manually draw the bounding box without react bounding box
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            var img = document.getElementById("target");
            img.style.display = "none"
            ctx.drawImage(img, 0, 0);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(30, 20, 150, 150);
          
    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = e => {
            this.setState({ 
                image: e.target.result
            } );
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      };
      handleCoordinates = event => {
        let boxes = this.state.box;
    
        boxes[parseInt(event.target.name)] = event.target.value;
    
        this.setState({
        
               boxes : [boxes]
        
        });
        console.log(boxes);
      };
      handleCLick = () => {
       this.setState({
           showboundingboxes: true
       })
      };
      
      displayDate = (e)=>{
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        this.setState({
            xCoordinates : x,
            yCoordinates: y
        })
      }
    render(){
        return(
            <div className="boundingboxComponent">
                 <div className="inputImage">
          <span>
            <input
              type="file"
              onChange={this.onImageChange}
              className="filetype"
              id="single"
            />
          </span>
        </div>
        <div className="firstCord">
          {" "}
          X1 :{" "}
          <input type="number" name="0" onChange={this.handleCoordinates} />
          Y1 :{" "}
          <input
            type="number"
            name="1"
            onChange={this.handleCoordinates}
          />{" "}
        </div>
        <div className="secondCord">
          {" "}
          X2 :{" "}
          <input type="number" name="2" onChange={this.handleCoordinates} />
          Y2 :{" "}
          <input
            type="number"
            name="3"
            onChange={this.handleCoordinates}
          />{" "}
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary submitButton"
            onClick={this.handleCLick}
          >
            Generate image
          </button>
        </div>
        {this.state.showboundingboxes ?  <Boundingbox id="custom" image={this.state.image} onSelected={this.showCoordinates}
             boxes={this.state.boxes}
             options={this.state.options}
            /> : ''}
        
        
          {/* <canvas id="myCanvas" width="1000" height="1000" /> 
       <img id="target" src={this.props.image} alt="" onClick={this.handleLoad} />  */}
            </div>
        )
    }
}

export default BoundingBox