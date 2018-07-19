import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';
import GoSignIn from 'react-icons/lib/go/sign-in';
import IoIosContact from 'react-icons/lib/io/ios-contact';
import './Nav.css'
import Login from '../Login/Login';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../ducks/reducer';
import PropTypes from 'prop-types';


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
    componentWillMount() {
        document.body.addEventListener('click', this.handleClick);
      }
    
      componentWillUnmount() {
        document.body.removeEventListener('click', this.handleClick);
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
   

    logout() {
     console.log('hitt');
        const { logoutUser, history } = this.props;
    axios.post('/api/logout').then(response => {
      logoutUser();
    window.location = '/'
      ;
    });
  } 
  
    render() {
        console.log(this.props.user);
        const showLogin = this.state.showing ? <Login /> : null
      
    return (
     
            <div>
                  <header ref={this.myInput} className = "header">
              <Link to = "/" className= "logo">Adventure Project</Link>
                <input  className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                         <ul className="menu" id ="menu">
                            <Wrapper><Link to="/"><FaHome/></Link></Wrapper>
                            {this.props.user && <Wrapper><Link to="/profile">Profile<IoIosContact/></Link></Wrapper>}
                            <Wrapper><Link to="/adventures">Adventures</Link></Wrapper>
                            {!this.props.user ?
                            <Wrapper><a href="#popbox" id= "pop" onClick= {this.showLogin} > Log In<GoSignIn/> </a></Wrapper>
                            :<Wrapper><a onClick= {() => this.logout()} > Log Out <GoSignIn/> </a></Wrapper>}
                        </ul>
                  </header>
               <Login/> 
            </div>
        );
    }
}


Nav.propTypes = {
    user: PropTypes.object.isRequired
  }
function mapStateToProps(state) {
    return {
      user : state.user,
    };
  }
const mapDispatchToProps = {
    loginUser,
    logoutUser,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Nav)