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
        let data = this.state.info.filter((inf=>inf.name!=='Sai Kaushik'));
        return (
            <div className='mt-5 pt-3 pb-5' style={{backgroundColor:'#f2f2f2'}}>
                <h1 className=' ml-5 font-weight-bold centrehold' style={{fontFamily:'Exo'}}>Our Team</h1>
                <hr/>
                <Card key={this.state.info[0].name} info={this.state.info[0]}/>
                <div className='container-fluid px-0  row '>
                    {data.map(inf => <Card key={inf.name} info={inf} />)}
                </div>
            </div>
        );
    }
}
 
export default ourTeam;