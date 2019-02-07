import React, { Component } from 'react';
import './teamMember.css'

class Card extends Component {
    render() { 
        return ( 
            <div className='col-md-4 col-sm-0 mt-5 container-fluid text-center' style={{position:'relative'}}>
                    <h2>{this.props.info.position}</h2>
                    <img className='img-fluid mem-img' src="https://picsum.photos/290" alt="member_img"
                        height="300" width="300" />
                    <div className='info mem-details' >
                        <h6 >{this.props.info.mail}</h6>
                        <h6>{this.props.info.phone}</h6>
                    </div>
                    <h4>{this.props.info.name}</h4>
                    
            </div>
         );
    }
}
 
export default Card;