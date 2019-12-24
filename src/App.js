import React, { Component } from "react";
// import BoundingBox from "./BoundingBox";
import { withRouter  } from "react-router";
import Image from "./images";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: [
        "https://www.gstatic.com/webp/gallery/1.jpg",
        "https://www.gstatic.com/webp/gallery/2.jpg",
        "https://www.gstatic.com/webp/gallery/3.webp",
        "https://www.gstatic.com/webp/gallery/5.webp"
      ],
      image: "",
      boxes: [],
      showImages: true,
      colors: {
        normal: "rgba(255,225,255,1)",
        selected: "rgba(0,225,204,1)",
        unselected: "rgba(100,100,100,1)"
      }
    };
  }
  // onImageChange = event => {
  //   this.setState({
  //     showImage: false
  //   });
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();
  //     reader.onload = e => {
  //       this.setState({ image: e.target.result });
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // };
  // handleCoordinates = event => {
  //   let boxes = this.state.boxes;

  //   boxes[parseInt(event.target.name)] = event.target.value;

  //   this.setState({
  //     boxes
  //   });
  //   //console.log(boxes);
  // };
  handleCLick = () => {
    this.setState({
      showImages: false
    })
    this.props.history.push({
      pathname: '/customImage',
      state: { ...this.states }
    })
  };

  render() {
    return (
      <div className="App">
      {this.state.showImages?
      <div className="photo gallery">
      <p className="galleryText"> Photo Gallery </p>
      <p className="customImage">Want to upload customImage </p>
      <button
        type="button"
        className="btn btn-primary submitButton"
        onClick={this.handleCLick}
      >
        click Here
      </button>
    <div className="displayPhotos">  
      {this.state.imageArray.map(item => (
        <Image value={item} key={item} />
      ))}
      </div>
    </div> : '' }
        

        {/* <div className="inputImage">
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
            Generate i  mage
          </button>
        </div> */}
        {/* <div className="customImage">
          {this.state.showImage ? <BoundingBox {...this.state} /> : ""}
        </div> */}
      </div>
    );
  }
}

export default withRouter(App);
