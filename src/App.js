import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '35aeea6c10d94ff6a8c33531d5f00712'
});

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#000000",
        blur: 2
      }
    },   
    number:{
      value: 30,
      density: { 
        enable: true,
        value_area: 800
      }
    }
  }   
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box:[],
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions
      .map((box) => { 
        return box.region_info.bounding_box
      })
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const box = clarifaiFace
      .map((face) => {
        return {
          leftCol: face.left_col * width,
          topRow: face.top_row * height,
          rightCol: width - (face.right_col * width),
          bottomRow: height - (face.bottom_row * height)
        }
      }
    );
    return box;
  }

  displayFaceBox = (box) => {
    this.setState({box:box});
    console.log(box)
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

render() {
  return (
    <div className="App">
      <Particles className="particles"
        params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
    </div>
  );
}
}

export default App;
