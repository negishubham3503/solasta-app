import React, { Component } from "react";
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import Events from './components/body/events/events';
import OurTeam from './components/body/ourTeam/ourTeam';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login/login';
import fire from './config/fire';
import 'firebase/auth';

class App extends Component {
  componentDidMount(){
    const ele = document.getElementById('ipl-progress-indicator')
    if(ele){
      setTimeout(() => {
      ele.classList.add('available')
      setTimeout(() => {
      ele.outerHTML = ''
      }, 2000)
      }, 1000)
    }
  }
  render() {
    const Index = () => <h2>Home</h2>;
    const About = () => <h2>About</h2>;
    const Users = () => <h2>Users</h2>;

    // using router library to route bw links
    return (
      <Router>
        <div className="container-fluid px-0 ">
          <NavBar/>
          <Route path="/" exact component={Body}/>
          <Route path="/events" component={Events}/>
          <Route path="/our-team" component={OurTeam}/>
          <Route path="/login" component={Login}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
