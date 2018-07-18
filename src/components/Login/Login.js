import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';



class Register extends Component {
  constructor(){
      super()
        this.state = {
          user: null,
          showRegister: false,
          message: null,
          fetchedDataMessage: null,
          redirect: false
      };
          this.myInput = React.createRef();
    }
    
  
    componentDidMount(){
        this.login()
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
        console.log('1',response);
        this.setState({ redirect: true});
            this.myInput.current.style.display = '';
      }).catch(error => {
        this.setState({ message: + this.getMessage(error) });
      });
    };
  
    logout = () => {
      axios.post('/api/logout').then(response => {
        this.setState({ user: null, redirect: false});
        // window.reload()
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
      const inputFields = <div>
        Username: <input ref="username" />
        {' '}
        Password: <input type="password" ref="password" />
        {' '}
      </div>

      if(this.state.redirect){
        console.log("hit");
        if(window.location.href !== '/profile') return <Redirect to='/profile' />
      }
  
      return (
          <div>
            <div>
              <a href="#x" className="overlay" id="popbox" ></a>
                <div id="modal-box-pop" ref={this.myInput}>
                   <a className="close" href="#close" onClick={this.showLogin}  ></a>
                <div className="login-or-register" style={{color:'rgba(25, 206, 34, 0.637)'}}>
                   <h1 style={{textDecoration: 'underline'}}>Log in</h1>
                    <br/>
                    {inputFields}
                    <br/>
                  <div style={{display: "flex", margin: '0 10px'}}>
                <button type ="sumbit"onClick={this.login}>Log in</button>
                  <br/>
                   <button><Link style={{color:'black'}} to="/register">Sign Up</Link></button>
                  </div>
               </div>
              </div>
            </div>
        </div>
        
      );
    }
  }
  
  
  
  export default Register;