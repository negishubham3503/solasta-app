import React, { Component } from "react";
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import Events from './components/events/events';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        {/* <Body/> */}
        <Events/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
