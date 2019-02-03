import React, { Component } from 'react';
import Card from './eventsCard';

class Events extends Component {
    state = {
        events : ['a','b','c','d','e'],
        categories: ['art','drama','coding','duet','etc'],
    };
    render() { 
        const event_cards = this.state.events.map(()=> <Card/>);
        const categories = this.state.categories.map((cat)=> <li>
            <a  href="#" style={{fontSize:'20px',color:'white',textDecoration:'none'}} >{cat}</a> 
            </li> 
            );
        return ( 
                <div className="container-fluid row mx-0 px-0 " >

                    {/*side nav for choosing event type  */}
                    <div className="col-md-3 col-lg-2 shadow-lg border" style={{marginTop:"40px",backgroundColor:"#3f51b5"}}>
                        <h2 className="text-light mt-5 mb-3  mx-0">Category 
                            <span className="fa fa-xs fa-close text-light float-right mt-1" style={{cursor:"pointer"}}/>
                        </h2>
                        <ul className="text-light" style={{listStyleType:'none'}}>
                            {categories}
                        </ul>
                    </div>

                    {/*contains list of all events in form of an array event_cards  */}
                    <div className="col-md-9 col-lg-10 "style={{marginTop:"90px"}}>
                    <h1 className="text-center " >Events</h1>
                    <div className="row">
                        {event_cards}
                    </div>
                </div>
                </div>
         );
    }
}
 
export default Events;