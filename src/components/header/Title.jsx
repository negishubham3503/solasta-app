import React, { Component } from "react";
import Particles from "react-particles-js";
import NavBar from "./NavBar";
import './title.css'

class Title extends Component {

  render() {
    return (
      <React.Fragment>
      <NavBar/>
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

export default Title;
