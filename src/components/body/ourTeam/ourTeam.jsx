import React, { Component } from 'react';
import Card from './teamMember';
class ourTeam extends Component {
    state = {
        info: [
            {
                id:1,
                name: 'anshuman singh',
                position: 'developer',
                mail: 'anshumansingh2051@gmail.com',
                phone: '9511028795',
            },
            {
                id:2,
                name: 'random',
                position: 'co-ordinator',
                mail: 'randommail@gmail.com',
                phone: '9639391513',
            },
            {
                id:3,
                name: 'anshuman singh',
                position: 'developer',
                mail: 'anshumansingh2051@gmail.com',
                phone: '9511028795',
            },
            {
                id:4,
                name: 'random',
                position: 'co-ordinator',
                mail: 'randommail@gmail.com',
                phone: '9639391513',
            },
        ]
    }
    render() {
        return (
            <div className='mt-5 pt-3'>
                <h1 className=' ml-5 font-weight-bold'>Team</h1>
                <hr/>
                <div className='container-fluid px-0  row'>
                    {this.state.info.map(inf => <Card key={inf.id} info={inf} />)}

                </div>
            </div>
        );
    }
}
 
export default ourTeam;