import React, { Component } from 'react';
import Particle from './particle';
import { Parallax, Background } from  'react-parallax';
import MyCarousel from './carousel';
import Timer from './timer';
import './body.css'

class Body extends Component {

    //to be used later in class title
    festNameStyle = {
        fontFamily: 'Archivo',
        fontWeight: "bold",
        color: "wheat",
    };


    render() { 
        const image1 = require('../res/solasta.jpeg');
        return ( 
            <div className="root-body " style={{position:'relative'}}>
            <Particle/>
            <div className='mt-5 img-body pt-3' style={{position:'relative'}}>
            <marquee><strong><span className='text-danger'>Notice: </span>the buses will leave at 8:30 am sharp from G. Pullareddy College</strong></marquee>
            <img className='mx-auto text-center img img-fluid' alt='solasta'src={image1} height='auto' width='auto' style={{display:'block'}}/>
            <Timer/>
            </div> 
                <div className='row'>
                    <div id='about-us'  className="centeralign col-md-8" style={{ height: "auto",backgroundColor:'#00ccff',color:'black' }}>
                    <h1 className="py-5 text-center fontnew ">
                                About Us
                    </h1>
                    <h3 className="centeralign px-5 text-justify mb-0 fontsizenew" style={{width:'100%', paddingBottom:'100px'}}>
                        Be a solivagant or a group traveller,
                        IIITDM Kurnool is the place to set your hearts racing right into your souls.
                        Solasta, the inception of designology. It is the annual techno-cultural fest of IIITDM Kurnool also
                        spans from Baker Street to the vast gold fields. Be there to witness it.
                    </h3>
                    </div>
                    <div className='col-md-4 pt-5 text-center' style={{backgroundColor:'#59595e'}}>
                            <h1 className="pb-3 text-center text-light " style={{fontFamily:'Exo',fontSize:'50px'}}>
                                       Invitation 
                            </h1>
                            <img className='pb-3' src={require('../res/qr_code.png')} height='300px' width='auto' alt='solasta_qr'
                            onClick={()=>document.location.replace('http://l.ead.me/bb4rZe')} style={{cursor:'pointer'}}/>
                    </div>
                    </div>
        
            
        {/* div for using carousel for past events */}
        <div id="past-events" className="container-fluid px-0 row mx-0"  style={{backgroundColor:'#0f3942'}}>
            <div className='col-md-1 col-sm-0'></div>
            <div className='col-md-10 col-sm-12 '>
                <h2 className='text-center text-light' style={{position:'absolute',width:'90%',zIndex:'4',fontFamily:'Exo'}}>Our Events</h2>
                <div className='mx-auto shadow' style={{width:'100%'}}><MyCarousel/> </div>
            </div>
            <div className='col-md-1 col-sm-0'></div>
        </div>
        </div>

         );
    }
}
 
export default Body;
