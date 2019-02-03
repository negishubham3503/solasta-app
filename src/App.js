import React, { Component } from "react";
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import Events from './components/events/events';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    const Index = () => <h2>Home</h2>;
    const About = () => <h2>About</h2>;
    const Users = () => <h2>Users</h2>;

    // using router library to route bw links
    return (
      <Router>
        <div className="container-fluid px-0 ">
          <NavBar />
          <Route path="/" exact component={Body}/>
          <Route path="/events" component={Events}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
