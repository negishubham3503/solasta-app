import React, { Component } from "react";
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import Events from './components/events/events';

class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0 ">
        <NavBar/>
        <Body/>
        {/* <Events/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
