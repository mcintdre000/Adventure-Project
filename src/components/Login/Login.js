import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import './modal.css';
import LottieAbout from '../About/LottieAbout';


class Login extends Component {
  constructor(){
      super()
        this.state = {
          user: null,
          showRegister: false,
          message: null,
          fetchedDataMessage: null,
          redirect: false,
          open: true,
      };
          this.myInput = React.createRef();
    }
  
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
      })
      .then(response => {
        this.setState({ redirect: true });
            this.myInput.current.style.display = '';
      }).catch(error => {
        this.setState({ message: this.getMessage(error) });
      });
    };
  
    logout = () => {
      axios.post('/api/logout').then(response => {
        this.setState({ user: null, redirect: false});
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
      const inputFields = <div className ="login">
        Username: <input className="logger"ref="username" />
        {' '}
        <br/>
        Password: <input className="logger" type="password" ref="password" />
        {' '}
      </div>

      if(this.state.redirect){
        if(window.location.href !== '/profile') return <Redirect to='/profile' />
      }
     
          
      
      
  
      return (
          <div>
            <div>
               <Modal open={this.props.open} onClose={this.props.close} classNames ={{modal:'custom-modal'}}>
                <div className="login-or-register">
                <LottieAbout/>
                  <h1 style={{textDecoration: 'underline'}}>Adventure Project</h1>
                    <br/>
                    {inputFields}
                    {message}
                    <br/>
                  <div style={{display: "flex"}} className="logs">
                <button className="clicker" type ="sumbit"onClick={this.login}>Log in</button>
                  <br/>
                   <button className="clicker"><Link onClick={this.props.close}style={{color:'black'}} to="/register">Sign Up</Link></button>
                </div>
              </div>
              </Modal>
            </div>
            
        </div>
        
      );
    }
  }
  
  
  
  export default Login;