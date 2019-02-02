import React, { Component } from 'react';
import Card from './eventsCard';

class Events extends Component {
    state = {
        events : ['a','b','c','d','e'],
    };
    render() { 
        const event_cards = this.state.events.map(()=> <Card/>);
        return ( 
            <React.Fragment>
            <div className="container-fluid row mx-0 px-0 mb-5" >
                <div className="col-md-3 col-lg-2 bg-secondary"style={{marginTop:"90px"}}>
                    dfj
                </div>
                <div className="col-md-9 col-lg-10 "style={{marginTop:"90px"}}>
                <h1 className="text-center " >Events</h1>
                    <div className="row">
                        {event_cards}
                        {/* {event_cards} */}
                    </div>
                </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Events;