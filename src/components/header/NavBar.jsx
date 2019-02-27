import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Login from '../login/login';
import fire from '../../config/fire';
import 'firebase/auth';
import './nav.css'
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
              <Navbar  light expand="md" className='shadow border-dark fixed-top' style={{backgroundColor:'#00386F'}}>
                <Link className='navbar-brand b-1 text-dark p-0 m-0' to='/'>
                  {/* <img src={require('../res/logo.png')} height='50px' width='140px' alt='solasta_logo'/> */}
                  <h2 className='font-weight-bold text-light' style={{fontFamily:'Exo'}}>SOLASTA</h2>
                </Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto navnew" navbar>
                    <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active navigatbar">
                             <a className="nav-link text-light" style={{fontFamily:'Exo'}} href="/#about-us">About Us<span className="sr-only">(current)</span></a>
                         </li>
                         <li className="nav-item navigatbar">
                             <a className="nav-link text-light" style={{fontFamily:'Exo'}} href="/#past-events">Events</a>
                         </li>
                         <li className="nav-item navigatbar">
                             <Link className="nav-link text-light" style={{fontFamily:'Exo'}} to="/events">Register</Link>
                         </li>
                         <li className="nav-item navigatbar">
                             <Link className="nav-link text-light" style={{fontFamily:'Exo'}} to="/our-team">Team</Link>
                         </li>
                         <li className='nav-item '>
                             <Link className='btn btn-light camelcasenav' style={{fontFamily:'Exo'}} to={this.state.user?'/':'/login'} onClick={this.state.user?this.logout:null}>{this.state.user?'logout':'login'}</Link>
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