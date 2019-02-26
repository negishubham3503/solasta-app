import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() { 
        return ( 
            <footer>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-4 col-md-offset-1 col-sm-6">
                            <h3>Developers</h3>
                            <p>Anshuman singh -<br/>
                            &nbsp;&nbsp; kcoe17b027@iiitk.ac.in</p>
                            <p>Saahil Mishra -<br/>
                            &nbsp;&nbsp; kcoe17b037@iiitk.ac.in</p>
                           
                        </div>

                        <div className="col-md-4 col-md-offset-1 col-sm-6 ">
                            <div  style={{width:'100%'}}>
                            <h3>Talk to us</h3>
                            <p><i className="fa fa-globe"></i> IIITDM kurnool,Jaganathagattu ,kurnool, A.P</p>
                            <p><i className="fa fa-phone"></i> 010-020-0990</p>
                            <p><i className="fa fa-save"></i> <a className='college-url' href='www.iiitdmkl.ac.in'>iiitdmkl.ac.in</a></p>
                            </div>
                        </div>
                        <div className="col-md-4 col-md-offset-1 col-sm-6 px-0 text-center" width='100%' height='100%'>
                            <h3>How to reach</h3>
                            <iframe  frameBorder="0" style={{border:0}} 
                            src="https://www.google.com/maps/embed/v1/view?zoom=17&center=15.7618%2C78.0364&key=AIzaSyCFk7ZAMOgs5Ec6umKGeHjathxqZ4eZJw4"
                            allowFullScreen></iframe>
                        </div>

                        <div className="clearfix col-md-12 col-sm-12">
                            <hr />
                        </div>

                        <div className="col-md-12 col-sm-12">
                            <ul className="social-icon">
                                <li><a href="https://www.facebook.com/solastaiiitdm/" className="fa fa-facebook"></a></li>
                                <li><a href="#rand" className="fa fa-twitter"></a></li>
                                <li><a href="#rand" className="fa fa-dribbble"></a></li>
                                <li><a href="https://www.instagram.com/solasta_19/" className="fa fa-instagram"></a></li>
                            </ul>
                            <div className="footer-copyright text-center">
                                <p>Copyright &copy; 2019 IIITDMKL dev team</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;