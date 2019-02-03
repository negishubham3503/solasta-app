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
        return ( 
            <div style={{position:'relative'}}>
            <Particle/>
                {/* {using parallex} */}
                <Parallax className="text-center" bgImage={image1} strength={500}>
                    <div  style={{ height: 700 }}>
                        <div style={{top:"50%", width:'100%',position:'absolute'}}>
                            <h1 className="title2" style={this.festNameStyle}>
                                SOLASTA
                            </h1>
                        </div>
                    </div>
                </Parallax>
                <Parallax className="text-center bg-success"   id="info1" strength={500}>
                    <div  style={{ height: 700 }}>
                    <h1 className="py-5 text-center">
                        what is going on
                    </h1>
                    <h3 className="text-justified">
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