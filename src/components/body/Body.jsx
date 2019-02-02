import React, { Component } from 'react';
import Particle from './particle';

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <Particle/>
            <div id="info1" className="container-fluid bg-warning text-light" style={{height:"40em"}}>
                    <h1 className="py-5 text-center">
                        what is going on
                    </h1>
                    <h3 className="text-justified">
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </h3>
        </div>
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
            </React.Fragment>
         );
    }
}
 
export default Body;