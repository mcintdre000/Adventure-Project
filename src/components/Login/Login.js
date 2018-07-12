import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';


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
  
    
    login = () => {
      this.setState({ message: null });
      const username = this.refs.username.value;
      const password = this.refs.password.value;
      axios.post('/api/login', {
        username,
        password
      }).then(response => {
        console.log('1',response);
        this.setState({ redirect: true});
        
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
      // const userData = JSON.stringify(user, null, 2);
      const inputFields = <div>
        Username: <input ref="username" />
        {' '}
        Password: <input type="password" ref="password" />
        {' '}
      </div>

      if(this.state.redirect){
        console.log("hit");
        return <Redirect to='/profile' />
      }
  
      return (
          <div>
            <div style ={{paddingTop:'80px'}}>
            {!user && <div>
              {/* <a href="javascript:void(0)" onClick={() => this.setState({ showRegister: false })}>Login</a> */}
              {' '}
              
             
              <div className="login-or-register">
                {!showRegister && <div>
                  <h2>Log in</h2>
                  {inputFields}
                  <button onClick={this.login}>Log in</button>
                </div>}
                {message}
              </div>
            </div>}
            {user && <div className="user-info">
              <h2>User data:</h2>
              <div>Username: {user.username} </div>
              <button onClick={this.logout}>Log out</button>
            </div>}
          </div>
        </div>
        
      );
    }
  }
  
  
  
  export default Register;