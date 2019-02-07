//TO DO
//how to add data in eventsDetails dynamically

import React, { Component } from 'react';
import './eventsCard.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.showDialog = this.showDialog.bind(this);
        this.toggleClick= this.toggleClick.bind(this);
    }

    state = {
        isClicked : false,
    }

    render() { 
        return ( 
            <React.Fragment>
            {this.showDialog(0)} 
            <div className="container-fluid col-sm-12 col-md-6 col-lg-3 " onClick={this.toggleClick}>
                <div className="container-fluid px-1 my-3 event_card" style={{position:"relative" ,height: "300px" }}>
                    <img src="https://picsum.photos/250" alt="random pic " height="300" width="100%"/>
                    <h2 className="text-center "  style={{position:"absolute", top:"50%",width:"100%"}}> 
                        {this.props.category}
                    </h2>
                </div>
            </div>
            </React.Fragment>
         );
    }

   //this fun generates event details when clicked on event img 
    showDialog(status){
        if(this.state.isClicked === true){
            // let desc = this.props.data.art.desc;
            return (
                <div className="container-fluid border bg-light shadow" style={{position:'absolute',maxHeight:'100%',zIndex:'5',maxWidth:"80%",left:"10%"}}>
                <h3>
                    {this.props.category}
                    <span className="fa fa-xs fa-close text-dark float-right mt-1 p-1 border rounded" 
                    onClick={this.toggleClick} style={{cursor:"pointer"}}/>
                </h3>
                <hr/>
                <p>
                    {/* {desc} */}
                All you need is a dance partner and amazing chemistry to join in India's most stunning duet dance event.
                </p>
                <h4>Prizes worth <span className="bg-dark text-light">rs 8000</span></h4>
                <h3>Rules</h3>
                <ul>
                    <li>rule 1</li>
                    <li>Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.</li>
                    <li>Bring your medly in pen drives</li>
                    <li>Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.</li>
                    <li>Bring your medly in pen drives</li>
                    <li>Time limit = 2-3 mins. Penalty will be Imposed for exceeding the time limit.</li>
                    <li>Bring your medly in pen drives</li>
                    <li>follow above rules</li>
                </ul>
                <h3>Registration</h3>
                <h3>Contact Information</h3>
                <input type='submit' className='btn btn-outline-success my-2 my-sm-0' value='Register'/>
                <p className='mt-3'>Anshuman singh- alphabeta@iiitdm.ac.in - 969594939291</p>
                <p>Anshuman singh- alphabeta@iiitdm.ac.in - 969594939291</p>
            </div>
            );
        }
        else return;
    }

    //updates the state of event image clicked
    toggleClick(){
        const isClicked = !this.state.isClicked;
        this.setState({isClicked});
    }
}
 
export default Card;