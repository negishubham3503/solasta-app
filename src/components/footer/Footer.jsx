import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() { 
        return ( 
            <footer>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-4 col-md-offset-1 col-sm-6 px-5">
                            <h1 style={{fontFamily:'Archivo'}}>Developers</h1>
                            <div className="newmargin coders">
                            <h5 className="margindon" style={{fontFamily:'Archivo'}}>Anshuman Singh <br/>
                            coe17b027@iiitk.ac.in</h5>
                            <h5 className="margindona" style={{fontFamily:'Archivo'}}>Sahil Mishra <br/>
                            coe17b034@iiitk.ac.in</h5>
                            </div>
                           
                        </div>

                        <div className="col-md-4 col-md-offset-1 col-sm-6  px-5">
                            <div  style={{width:'100%'}}>
                            <h1 style={{fontFamily:'Archivo'}}>Talk to Us</h1>
                            <div className="newmargin">
                            <h5 className="margindown coders"><i className="fa fa-globe" ></i> <span>Indian Institute of Information Technology Design and Manufacturing<br />Near Dinnidevarapadu Village<br />Jaganathagattu<br />Kurnool, Andhra Pradesh – 518002</span></h5>
                            <h5 className="margindown coders"><i className="fa fa-phone"></i> 010-020-0990</h5>
                            <h5 className="margindona coders"><i className="fa fa-save" ></i> <a className='college-url' href='www.iiitdmkl.ac.in'>www.iiitdmkl.ac.in</a></h5>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-md-offset-1 col-sm-6 px-0 text-center" width='150%' height='150%'>
                            <h1 style={{fontFamily:'Archivo'}}>Reach Us</h1>
                            <div className="newmargin">
                            <iframe  frameBorder="0" style={{border:0}} 
                            src="https://www.google.com/maps/embed/v1/view?zoom=17&center=15.7618%2C78.0364&key=AIzaSyCFk7ZAMOgs5Ec6umKGeHjathxqZ4eZJw4"
                            allowFullScreen></iframe>
                            </div>
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
                                <p>Copyright &copy; 2019 IIITDM Kurnool. All rights reserved.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;
