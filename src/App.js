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
      </div>
    );
  }
}

export default withRouter(App);
