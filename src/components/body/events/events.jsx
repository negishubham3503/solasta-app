//fixing the div size of event info
//todo hiding small right angle bracket when toggling

import React, { Component } from 'react';
import Card from './eventsCard';
import './events.css';
import event_det from './events_details';

class Events extends Component {
    state = {
        events : ['a','b','c','d','e'],
        cat_window_status: true,
        event_details : event_det,
        categories: ['art','drama','coding','duet','etc'],
    };
    render() { 
        let art_events = this.state.event_details[0].art;
        let coding_events = this.state.event_details[2].coding;
        let drama_events= this.state.event_details[1].drama;
        return ( 
                <div className="container-fluid row mx-0 px-0 " style={{position:'relative'}}>
                    {/* icon for opening sidenav on small screen */}
                    <span className='fa fa-lg fa-angle-right ' style={{position:'absolute',top:'5%',left:'5%',zIndex:'1'}} onClick={this.toggleWindow}/>

                    {/*side nav for choosing event type  */}
                    <div className="col-md-3 col-lg-2 shadow-lg border " id='category-chooser' style={{marginTop:"40px",backgroundColor:"#3f51b5"}}>
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
                    <div className="row">
                        <div className='col-md-12'>
                            <h2>art events</h2>
                            <div className='row'>
                                {art_events.map(evt => <Card category={evt} />)}
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <h2>coding</h2>
                            <div className='row'>
                                {coding_events.map(evt => <Card category={evt} />)}
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <h2>drama</h2>
                            <div className='row'>
                                {drama_events.map(evt => <Card category={evt} />)}
                            </div>
                        </div>
                        {/* {Object.keys(this.state.event_details).forEach(det => <Card data={det}/>)} */}
                    </div>
                </div>
                </div>
         );
    }
    renderEventCategory(){
        return (
            <ul style={{listStyleType:'none'}}>
                {this.state.categories.map((cat)=> (<li key={cat}>
                <a  href="#random" style={{fontSize:'20px',color:'white',textDecoration:'none'}} >{cat}</a> 
                </li> ))}
            </ul>
        );
    }

    toggleWindow = ()=>{
        this.setState({cat_window_status: !this.state.cat_window_status});

         // hides cat window for size less than 768px
        let element = document.getElementById('category-chooser');
        if(window.screen.availWidth <= 768 ){
            if(this.state.cat_window_status){
                element.style['display']='block';
            }
            else{
                element.style['display']='none';
            }
        }
    }
}
 
export default Events;