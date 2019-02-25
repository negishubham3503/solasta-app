import React, { Component } from 'react';
import Card from './teamMember';
import team_det from './team_details';
class ourTeam extends Component {
    constructor(props){
        super(props);
        this.state={
            info:team_det
        }
    }
    render() {
        return (
            <div className='mt-5 pt-3'>
                <h1 className=' ml-5 font-weight-bold'>Team</h1>
                <hr/>
                <div className='container-fluid px-0  row'>
                    {this.state.info.map(inf => <Card key={inf.name} info={inf} />)}
                    {console.log(this.state.info)}

                </div>
            </div>
        );
    }
}
 
export default ourTeam;