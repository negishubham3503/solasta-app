//todo hiding small right angle bracket when toggling
import React, { Component } from 'react';
import Card from './eventsCard';
import './events.css';

class Events extends Component {
    state = {
        events : ['a','b','c','d','e'],
        cat_window_status: true,
        event_details : {
            art : {
                desc : ' event about art',
                price: '2000',
                rules: ['Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.',
                        'Bring your medly in pen drives',
                        'Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.',
                        'Bring your medly in pen drives',
                        'Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.',
                        'Bring your medly in pen drives',
                        'follow above rules'],
                contact: ['Anshuman singh- alphabeta@iiitdm.ac.in - 969594939291',
                'Anshuman singh- alphabeta@iiitdm.ac.in - 969594939291']
                }
            ,
            drama : {
                desc : ' event about drama',
                price: '2000',
                rules: ['Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.',
                        'Bring your medly in pen drives',
                        'Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.',
                        'Bring your medly in pen drives',
                        'Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.',
                        'Bring your medly in pen drives',
                        'follow above rules'],
                contact: ['Anshuman singh- alphabeta@iiitdm.ac.in - 969594939291',
                'Anshuman singh- alphabeta@iiitdm.ac.in - 969594939291']
            },
            coding : {
                desc : ' event about coding',
                price: '2000',
                rules: ['Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.',
                        'Bring your medly in pen drives',
                        'Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.',
                        'Bring your medly in pen drives',
                        'Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.',
                        'Bring your medly in pen drives',
                        'follow above rules'],
                contact: ['Anshuman singh- alphabeta@iiitdm.ac.in - 969594939291',
                'Anshuman singh- alphabeta@iiitdm.ac.in - 969594939291']
            }
        },
        categories: ['art','drama','coding','duet','etc'],
    };
    render() { 
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
                        {this.state.categories.map( cat => <Card key={cat} category={cat} />)}
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