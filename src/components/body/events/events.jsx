//todo : event details div should come to center of the screen even for large no of events
import React, { Component } from 'react';
import Card from './eventsCard';
import './events.css';
import event_det from './events_details';

class Events extends Component {
    state = {
        // events : ['a','b','c','d','e'],
        cat_window_status: true,
        event_details : event_det,
        categories: ['all','art','drama','coding','dance','photography','etc'],
        event_cat:'all',
    };
    render() { 
        return ( 
                <div className="container-fluid row mx-0 px-0 " style={{position:'relative'}}>
                    {/* icon for opening sidenav on small screen */}
                    <span className='fa fa-lg fa-angle-right mt-5 px-2 py-1 rounded-circle text-light' id='angle-right' style={{position:'absolute',top:'5%',left:'5%',zIndex:'1',backgroundColor:'blue',zIndex:'1'}} onClick={this.toggleWindow}/>

                    {/*side nav for choosing event type  */}
                    <div className="col-md-3 col-lg-2 shadow-lg border " id='category-chooser' style={{marginTop:"40px",backgroundColor:"#2c2541"}}>
                        <h2 className="text-light mt-5 mb-3  mx-0">Category 
                            <span className="fa fa-xs fa-close text-light float-right mt-1" style={{cursor:"pointer"}} onClick={this.toggleWindow}/>
                        </h2>
                        <ul className="text-light" style={{listStyleType:'none'}}>
                            {this.renderEventCategory()}
                        </ul>
                    </div>

                    {/*contains list of all events in form of an array event_cards  */}
                    <div className="col-md-9 col-lg-10 "style={{marginTop:"90px"}}>
                    <h1 className="text-center " >Events</h1>
                    <div className="row" style={{minHeight:'600px'}}>
                        {this.showEvent(this.state.event_cat)}
                        {/* {Object.keys(this.state.event_details).forEach(det => <Card data={det}/>)} */}
                    </div>
                </div>
                </div>
         );
    }
    renderEventCategory(){
        return (
            <ul style={{listStyleType:'none'}}>
                {this.state.categories.map((cat)=> (
                <li key={cat}
                style={{fontSize:'20px',color:'white',cursor:'pointer'}}  onClick={()=>this.setState({event_cat:cat})}>{cat}
                </li> ))}
            </ul>
        );
    }

    //shows the events based on the event selected in side nav
    showEvent=(cat)=>{
                let art_events = this.state.event_details[0].art;
                let coding_events = this.state.event_details[2].coding;
                let drama_events= this.state.event_details[1].drama;
                const dance_events = this.state.event_details[3].dance;
                const photography_events = this.state.event_details[4].photography;
                if(cat === 'art')
                    return art_events.map(evt => <Card category={evt} />);
                if(cat === 'drama')
                    return drama_events.map(evt => <Card category={evt} />)
                if(cat === 'coding')
                    return coding_events.map(evt => <Card category={evt} />)
                if(cat === 'dance')
                    return dance_events.map(evt => <Card category={evt} />)
                if(cat === 'photography')
                    return photography_events.map(evt => <Card category={evt} />)
                else {
                    return(
                         art_events.map(evt => <Card category={evt} />).concat(
                        coding_events.map(evt => <Card category={evt} />)).concat(
                        drama_events.map(evt => <Card category={evt} />)).concat(
                        dance_events.map(evt => <Card category={evt} />)).concat(
                        photography_events.map(evt => <Card category={evt} />)
                        )
                    );
                }

    }

    toggleWindow = ()=>{
        this.setState({cat_window_status: !this.state.cat_window_status});

         // hides cat window for size less than 768px
        let element = document.getElementById('category-chooser');
        let angleRight = document.getElementById('angle-right');
        if(window.screen.availWidth <= 768 ){
            if(this.state.cat_window_status){
                element.style['display']='block';
                angleRight.style['display']='none';
            }
            else{
                element.style['display']='none';
                angleRight.style['display']='block';
            }
        }
    }
}
 
export default Events;