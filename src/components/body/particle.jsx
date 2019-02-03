import React, { Component } from "react";
import Particles from "react-particles-js";
import './particle.css'

class Particle extends Component {

  render() {
    return (
      <React.Fragment>
      <Particles
        className="particles "
        canvasClassName="canvas fixed-bottom"
        width="100%"
        height="100%"
        params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }} 
      /> 
  </React.Fragment>
    );
  }
}

export default Particle;
