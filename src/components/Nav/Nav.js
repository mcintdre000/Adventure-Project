import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';
import GoSignIn from 'react-icons/lib/go/sign-in';
import IoIosContact from 'react-icons/lib/io/ios-contact';
import './Nav.css'
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../ducks/reducer';

const Wrapper = styled.li`
font-size:1.3em`


class Nav extends Component {
   
    constructor(){
        super();
        this.state = {
            showing: false,
            toggle: true
        }
    }

    toggleOn= () => {
        console.log('HIT----------->');
        this.setState({
            showing: this.state.toggle
        })
    }

    showLogin = () => {
        console.log('HIT----------->');
        this.setState({
            showing: !this.state.showing 
        })
    }
    logout = () => {
        const { logoutUser, history } = this.props;
        axios.post('/api/logout').then(response => {
          logoutUser();
          this.setState({
              profile:null
          })
          history.push('/')
        //   window.location.reload()
          ;
        });
      }
   
componentDidMount(){
    axios.get('/api/user').then(response =>{
        console.log(response)
        this.setState({
            profile: response.data.getUserProfile[0]})
         
        });

        setTimeout(() => {
            this.setState(this.state)
        }, 1000)
        

        if(this.state.showing) this.setState({showing: false});
    
        var modal = document.getElementById('modal-box-pop');
        window.onlick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
         }
    }

    render() {
   
        const showLogin = this.state.showing ? <Login /> : null
        // const toggleOn = this.state.toggle ? <Logout/> : <Login/> 
        
    return (
        
            <div>
                  <header ref={this.myInput} className = "header">
              <Link to = "/" className= "logo">Adventure Project</Link>
                <input  className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                         <ul className="menu" id ="menu">
                            <Wrapper><Link to="/"><FaHome/></Link></Wrapper>
                            <Wrapper><Link to="/profile">Profile<IoIosContact/></Link></Wrapper>
                            <Wrapper><Link to="/adventures">Adventures</Link></Wrapper>
                            {!this.state.profile ?
                            <Wrapper><a href="#popbox" id= "pop" onClick= {this.showLogin} > Log In<GoSignIn/> </a></Wrapper>
                            :<Wrapper><a onClick={this.logout}> Log Out <GoSignIn/> </a></Wrapper>}
                        </ul>
                  </header>
               <Login/> 
            </div>
        );
    }
}

const mapDispatchToProps = {
    loginUser,
    logoutUser,
  };
  
  export default connect(null, mapDispatchToProps)(Nav)