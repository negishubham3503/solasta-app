
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
                    <img src={this.props.category.image} alt="random pic " height="300" width="100%"/>
                    <h2 className="text-center "  style={{position:"absolute", top:"50%",width:"100%"}}> 
                        {/* {this.props.category.name} */}
                    </h2>
                </div>
            </div>
            </React.Fragment>
         );
    }

   //this fun generates event details when clicked on event img 
    showDialog(status){
        if(this.state.isClicked === true){
            return (
                <div className="container-fluid border bg-light shadow" style={{position:'absolute',maxHeight:'100%',zIndex:'5',maxWidth:"80%",left:"10%"}}>
                <h3 style={{fontFamily:'Exo'}}>
                    {this.props.category.name}
                    <span className="fa fa-xs fa-close text-dark float-right mt-1 p-1 border rounded" 
                    onClick={this.toggleClick} style={{cursor:"pointer"}}/>
                </h3>
                <hr/>
                <p style={{fontFamily:'Exo'}}>
                    {this.props.category.desc}
                {/* All you need is a dance partner and amazing chemistry to join in India's most stunning duet dance event. */}
                </p>
                <h4 style={{fontFamily:'Exo'}}>Prizes worth <span className="bg-dark text-light">Rs {this.props.category.price}</span></h4>
                <h3 style={{fontFamily:'Exo'}}>Rules</h3>
                <ul style={{fontFamily:'Exo'}}>
                    {this.props.category.rules.map((rule)=><li>{rule}</li>)}
                </ul>
                <input style={{fontFamily:'Exo'}} type='submit' className='btn btn-outline-success my-2 my-sm-0' value='Register'/>
                <h3 style={{fontFamily:'Exo'}}>Contact Information</h3>
                <ul style={{fontFamily:'Exo'}}>{this.props.category.contact.map((cont)=><li>{cont}</li>)}</ul>
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