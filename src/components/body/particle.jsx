import React, { Component } from "react";
import Particles from "react-particles-js";
import './particle.css'

class Particle extends Component {

  render() {
    return (
    <div style={{position:'relative'}}>
      <Particles
        className="particles "
        canvasClassName="canvas "
        width="100%"
        height="700px"
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
    </div>
    );
  }
}

export default Particle;
