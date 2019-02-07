import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() { 
        return ( 
            <div>
              <Navbar color="light" light expand="md" className='shadow-sm border fixed-top' >
                <Link className='navbar-brand b-1 text-dark' to='/'>SOLASTA</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <ul className="navbar-nav mr-auto">
                         <li className="nav-item active">
                             <a className="nav-link" href="/#info1">Home <span className="sr-only">(current)</span></a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#info2">Link</a>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/events">Events</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/our-team">our team</Link>
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