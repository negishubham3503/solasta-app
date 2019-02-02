import React, { Component } from 'react';
import './eventsCard.css';

class Card extends Component {
    render() { 
        return ( 
            <div className="col-sm-12 col-md-6 col-lg-3 ">
                <div className="container-fluid px-1 my-3 text-dark event_card" style={{position:"relative" ,height: "300px" }}>
                    <img src="https://picsum.photos/250" height="300" width="100%"/>
                    <h2 className="text-center py-5"  style={{position:"absolute", top:"50%",width:"100%"}}> event info</h2>
                </div>
            </div>
         );
    }
}
 
export default Card;