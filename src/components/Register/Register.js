import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

import './register.css';
import LottieAbout from '../About/LottieAbout';


class Register extends Component {
    state = {
      user: null,
      showRegister: false,
      message: null,
      fetchedDataMessage: null,
      redirect: false
    };
  
    getMessage = error => error.response
      ? error.response.data
        ? error.response.data.message
        : JSON.stringify(error.response.data, null, 2)
      : error.message;
  
    register = () => {
      this.setState({ message: null });
      const username = this.refs.username.value;
      const password = this.refs.password.value;
      const email = this.refs.email.value;
      if(username == '' || password == '' || email == ''){
      this.setState({message: "Username, Password and Email are required"})
      return 
      }
      axios.post('/api/register', {
        username,
        password,
        email
      }).then(response => {
        this.setState({ redirect: true });
        this.myInput.current.style.display = ''
      }).catch(error => {
        this.setState({ message: this.getMessage(error) });
      });
    };
  
    logout = () => {
      axios.post('/api/logout').then(response => {
        this.setState({ user: null });
      }).catch(error => {
        this.setState({ message: this.getMessage(error) });
      });
    };
  
    fetchData = () => {
      this.setState({ fetchedDataMessage: null });
      axios.get('/secure-data').then(response => {
        this.setState({ fetchedDataMessage: 'Result: ' + JSON.stringify(response.data, null, 2 )});
      }).catch(error => {
        this.setState({ fetchedDataMessage: 'Something went wrong: ' + this.getMessage(error) });
      })
    };
  
    render() {
      const { user, showRegister, message, fetchedDataMessage } = this.state;
      const inputFields = <div className="required" >
        Username <input className='fields' ref="username" />
        {' '}
        <br/>
        Password <input  className='fields' type="password" ref="password" />
        {' '}
        <br/>
        Email <input className='fields' ref="email"/>
        {' '}
        
      </div>
   if(this.state.redirect){
    return <Redirect to='/profile' />
  }

      return (
          <div>
            <div className="registered">
            <div className="register-outer">
            <div className="register-inner">
            {!user && <div>
              <div className="input-boxes">
                  {!showRegister && <div>
                    <LottieAbout/>
                     <div className = "register-page" >Register</div>
                     <br/>
                      {inputFields}
                      <button className="inputfile" onClick={this.register}>Register</button>
                        </div>}
                            {message}
                          </div>
                        </div>}
                      {user && <div className="user-info">
                    <h2>User data:</h2>
                  <div>Username: {user.username} </div>
              </div>}
              </div>
              </div>
            </div>
       
        </div>
        
      );
    }
  }
  
  
  
  export default Register;