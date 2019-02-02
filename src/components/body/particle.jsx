import React, { Component } from "react";
import Particles from "react-particles-js";
import './particle.css'

class Particle extends Component {

  render() {
    return (
      <React.Fragment>
      <Particles
        className="particles"
        canvasClassName="canvas"
        width="100%"
        height="100%"
        params={{
          particles: {
            number: {
              value: 100
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
      <h1 className="title">
        SOLASTA
      </h1>
  </React.Fragment>
    );
  }
}

export default Particle;
