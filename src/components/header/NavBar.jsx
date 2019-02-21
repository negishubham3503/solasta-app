import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Login from '../login/login';
import fire from '../../config/fire';
import 'firebase/auth';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
  } from 'reactstrap';


class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.authListener = this.authListener.bind(this);
        this.state = {
          isOpen: false,
          user:{},
        };
      }

      componentDidMount(){
        this.authListener();
      }
      authListener(){
        fire.auth().onAuthStateChanged((user)=>{
          if(user){
            console.log(this.state.user);
            this.setState({user});
          }
          else{
            this.setState({user:null});
          }
        });
      }

    //logout function
    logout = ()=>{
        fire.auth().signOut();
        alert('logged out successfully');
    }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      //handling click for either login or logout
      handleClick = ()=>{
        if(this.state.user)
          fire.auth().signOut();
      }

    render() { 
        return ( 
            <div>
              <Navbar  light expand="md" className='shadow border-dark fixed-top' style={{backgroundColor:'#4b367c'}}>
                <Link className='navbar-brand b-1 text-dark p-0 m-0' to='/'>
                  {/* <img src={require('../res/logo.png')} height='50px' width='140px' alt='solasta_logo'/> */}
                  <h2 className='font-weight-bold text-light'>SOLASTA</h2>
                </Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <ul className="navbar-nav mr-auto ">
                         <li className="nav-item active">
                             <a className="nav-link text-light" href="#about-us">About us<span className="sr-only">(current)</span></a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link text-light" href="#past-events">past events</a>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link text-light" to="/events">Events</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link text-light" to="/our-team">our team</Link>
                         </li>
                         <li className='nav-item'>
                             <Link className='btn btn-light ' to={this.state.user?'/':'/login'} onClick={this.state.user?this.logout:null}>{this.state.user?'logout':'login'}</Link>
                         </li>

                     </ul>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
         );
    }

}
 
export default NavBar;