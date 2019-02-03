import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() { 
        return ( 
            <footer>
                <div className="container">
                    <div className="row">

                        <div className="col-md-5 col-md-offset-1 col-sm-6">
                            <h3>Footer Title</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <div className="footer-copyright">
                                <p>Copyright &copy; 2017 Your Company - Design: Tooplate</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-md-offset-1 col-sm-6">
                            <h3>Talk to us</h3>
                            <p><i className="fa fa-globe"></i> 512 Delicious Street, San Francisco, CA 10880</p>
                            <p><i className="fa fa-phone"></i> 010-020-0990</p>
                            <p><i className="fa fa-save"></i> info@company.com</p>
                        </div>

                        <div className="clearfix col-md-12 col-sm-12">
                            <hr />
                        </div>

                        <div className="col-md-12 col-sm-12">
                            <ul className="social-icon">
                                <li><a href="#rand1" className="fa fa-facebook"></a></li>
                                <li><a href="#rand" className="fa fa-twitter"></a></li>
                                <li><a href="#rand" className="fa fa-google-plus"></a></li>
                                <li><a href="#rand" className="fa fa-dribbble"></a></li>
                                <li><a href="#rand" className="fa fa-linkedin"></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;