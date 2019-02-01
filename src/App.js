import React, { Component } from "react";
import Title from './components/header/Title';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Title/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
