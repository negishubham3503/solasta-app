import React, { Component } from 'react';
import './teamMember.css'

class Card extends Component {
    render() { 
        return ( 
            <div className='col-md-4 col-sm-0 mt-5 container-fluid text-center ' >
                    <h2>{this.props.info.desg}</h2>

                    <div className='card-container container-fluid'>
                    <img className=' mem-img mx-auto shadow-lg' src={this.props.info.image} alt="member_img"
                        height="350px" width="300px" />
                    <div className='mem-details mx-auto' >
                        <div className='text'>
                            <h6 >{this.props.info.mail}</h6>
                            <h6>{this.props.info.phone}</h6>
                        </div>
                    </div>
                    </div>
                    <h4>{this.props.info.name}</h4>
                    
            </div>
         );
    }
}
 
export default Card;