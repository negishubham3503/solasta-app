//todo going to main page(body ) when login is successfull
import React, { Component } from 'react';
import fire from '../../config/fire';
import 'firebase/auth';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            authType:'login',
        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup= this.signup.bind(this);
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        alert('successful login')}).catch((error)=>{
            alert(error);
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{}).catch((error)=>{
            alert(error);
            console.log(error);
        })
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    updateUser= ()=>{
        if(this.state.authType === 'login')
            this.setState({authType:'signup'});
        else
            this.setState({authType:'login'})
    }

    renderButton= ()=>{
      if(this.state.authType === 'login'){
        //   for signup page
            return (
                <form>
                    <div className='form-group'>
                        <label>First name</label>
                        <input className='form-control' placeholder='enter your first name'/>
                    </div>
                    <div className='form-group'>
                        <label>Last name</label>
                        <input className='form-control' placeholder='enter your last name'/>
                    </div>
                    <div className='form-group'>
                        <label  htmlFor='exampleInputEmail'>Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type='email' name='email'
                        className='form-control' id='exampleInputEmail' aria-describedby='emailHelp'
                        placeholder='enter email'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword'>Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type='password'
                        name='password'  className='form-control' id='exampleInputPassword1' placeholder='Password'/>
                    </div>
                    <div className='form-group'>
                        <label>college name</label>
                        <input className='form-control ' placeholder='enter your college name' required/>
                    </div>
                    <small> new user? <span className='text-primary' style={{cursor:'pointer'}}
                    onClick={this.updateUser}>{this.state.authType}</span><br/></small>
                    <button onClick={this.signup}  className='btn btn-success'>signup</button>
                </form>
                )
        }
        else{
            // for login page
            return (
                <form>
                    <div className='form-group'>
                        <label  htmlFor='exampleInputEmail'>Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type='email' name='email'
                        className='form-control' id='exampleInputEmail' aria-describedby='emailHelp'
                        placeholder='enter email'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword'>Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type='password'
                        name='password'  className='form-control' id='exampleInputPassword1' placeholder='Password'/>
                    </div>
                    <small> new user? <span className='text-primary' style={{cursor:'pointer'}}
                    onClick={this.updateUser}>{this.state.authType}</span><br/></small>
                <button type='submit' onClick={this.login} className='btn btn-primary' >login</button>
                </form>
                )
        } 

    }
    render() { 
        return ( 
            <div className='container-fluid row'>
            <div className='col-md-6 mt-5 pt-5 container-fluid' style={{minHeight:'700px'}}>
                {this.renderButton()}
            </div>
            </div>
         );
    }
}
 
export default Login;