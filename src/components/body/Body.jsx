import React, { Component } from 'react';
import Particle from './particle';
import { Parallax, Background } from  'react-parallax';
import Carousel from './carousel';


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
        return ( 
            <div className="root-body " style={{position:'relative'}}>
            <Particle/>
                {/* {using parallex with prop render} */}
                <Parallax className="text-center"  strength={500}
                    renderLayer={percentage=>(
                            <div
                                style={{
                                    position:'absolute',
                                    background: `rgba(255, 125, 0, ${percentage+0.2 })`,
                                    left: "50%",
                                    top: "53%",
                                    borderRadius: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: percentage * 400,
                                    height: percentage * 400
                                }}>
                                </div>
                                
                    )}
                    >
                    <Background className="custom-bg">
                        <img className='mt-5' src={image1} height='auto' width='550px' alt="solasta logo" style={{position:'absolute',left:'-270px',top:'280px'}}/>
                    </Background>
                    <div  style={{ height: 700 }} id="main-view">
                        <div style={{top:"50%", width:'100%',position:'absolute'}}>
                            <h1 className="title2" style={this.festNameStyle}>
                                {/* SOLASTA */}
                            </h1>
                        </div>
                    </div>
                </Parallax>

                {/* {using parallex} */}
                <Parallax className="about-us"  bgImage={image2}  strength={500}
                    // renderLayer={per=>(
                    //     console.log(per),
                    //     <div
                    //         style={{
                    //             background:`rgba(255,255,${100 + (per* 100)%155},1)`,
                    //         }}
                    //         >
                    //         this is text
                    //         </div>
                    // )}
                    >
                    <div id='about-us' style={{ height: 700 }}>
                    <h1 className="py-5 text-center ">
                                About Us
                    </h1>
                    <h3 className="float-right" style={{width:'50%'}}>
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </h3>
                    </div>
                </Parallax>
            
        <div id="past-events" className="container-fluid px-0 bg-dark" style={{height:'400px',width:'100%'}} >
            <h2 className='text-center text-light' style={{position:'absolute',width:'100%',zIndex:'4'}}>Past Events</h2>
            <div className='mx-auto' style={{width:'100%'}}><Carousel/> </div>
        </div>
        </div>
         );
    }
}
 
export default Body;