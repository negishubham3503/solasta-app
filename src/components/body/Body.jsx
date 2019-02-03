import React, { Component } from 'react';
import Particle from './particle';
import { Parallax, Background } from  'react-parallax';

class Body extends Component {
    state = {  };

    //to be used later in class title
    festNameStyle = {
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        fontWeight: "bold",
        color: "wheat",
    };

    render() { 
        const image1 = "https://picsum.photos/700";
        const image2 ="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
        return ( 
            <div style={{position:'relative'}}>
            {/* <Particle/> */}
                {/* {using parallex with prop render} */}
                <Parallax className="text-center" bgImage={image1} strength={500}
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
                    <div  style={{ height: 700 }} id="main-view">
                        <div style={{top:"50%", width:'100%',position:'absolute'}}>
                            <h1 className="title2" style={this.festNameStyle}>
                                SOLASTA
                            </h1>
                        </div>
                    </div>
                </Parallax>

                {/* {using parallex} */}
                <Parallax className="text-center bg-success"    strength={500}
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
                    <div id="info1" style={{ height: 700 }}>
                    <h1 className="py-5 text-center text-light">
                        what is going on
                    </h1>
                    <h3 className="text-justified text-light">
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </h3>
                    </div>
                </Parallax>
            
        <div id="info2" className="container-fluid bg-primary text-light" style={{height:"40em"}}>
                    <h1 className="py-5 text-center">
                        what is going on
                    </h1>
                    <h3 className="text-justified">
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </h3>
            </div>
        </div>
         );
    }
}
 
export default Body;