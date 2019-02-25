import React, { Component } from 'react';
import Particle from './particle';
import { Parallax, Background } from  'react-parallax';
import MyCarousel from './carousel';
import Timer from './timer';

class Body extends Component {
    state = {  };

    //to be used later in class title
    festNameStyle = {
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        fontWeight: "bold",
        color: "wheat",
    };


    render() { 
        const image1 = require('../res/solasta.jpeg');
        const image2 ="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
        const abtWander = require('../res/pathfinder.png');
        return ( 
            <div className="root-body " style={{position:'relative'}}>
            <Particle/>
            <div className='mt-5' style={{height:'630px',position:'relative'}}>
            <img className='mx-auto text-center img img-fluid' src={image1} height='auto' width='auto' style={{display:'block'}}/>
            <Timer/>
            </div> 
                {/* <Parallax className="text-center"  strength={500}>
                    <Background className="custom-bg">
                        <img className='mt-5 ' src={image1}   alt="solasta logo" style={{right:'-320px',top:'260px',position:'absolute',height:'600px'}}/>
                    </Background>

                    <Timer/> 
                </Parallax> */}

                {/* {using parallex for about us} */}
                {/* <Parallax className="about-us"  bgImage={image2}  strength={500}> */}
                    <div id='about-us'  className="centeralign " style={{ height: "500px",backgroundColor:'#00e673',color:'black' }}>
                    <h1 className="py-5 text-center ">
                                About Us
                    </h1>
                    <h3 className="centeralign px-3 text-center" style={{width:'100%'}}>
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </h3>
                    </div>
                {/* </Parallax> */}
            
        {/* div for using carousel for past events */}
        <div id="past-events" className="container-fluid px-0 bg-dark"  >
            <h2 className='text-center text-light' style={{position:'absolute',width:'100%',zIndex:'4'}}>Past Events</h2>
            <div className='mx-auto' ><MyCarousel/> </div>
        </div>
        {/* div for about wanderlust */}
        {/* <div className='row '>
            <div className='col-md-6'>
                <h2 className='mx-auto' > About wanderlust</h2>
            </div>
            <div className='col-md-6'>
                <img className='img-fluid' src={abtWander} alt='about wanderlust' style={{width:'60%',height:'400px'}}/>
            </div>
        </div> */}
        </div>

         );
    }
}
 
export default Body;