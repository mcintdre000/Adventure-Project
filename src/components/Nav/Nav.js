import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';
import GoSignIn from 'react-icons/lib/go/sign-in';
import IoIosContact from 'react-icons/lib/io/ios-contact';
import './Nav.css';
import Login from '../Login/Login';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../ducks/reducer';
import PropTypes from 'prop-types';
import FaBars from 'react-icons/lib/fa/bars';
import AdventureProject from './AdventureProject.jpg'

const Wrapper = styled.li`
font-size:1.3em`

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  

class Nav extends Component {
   
    constructor(){
        super();
        this.state = {
            showing: false,
            toggle: false,
            menuOpen: false,
            open: false

        }
    }
    handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  

  closeMenu () {
    this.setState({menuOpen: false})
  }
   
    

    toggleOn= () => {
       
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        })
    }

    onCloseModal = () => {
        this.setState({ open: false });
      };
    
    showLogin = () => {
        this.setState({
            showing: !this.state.showing,
            open: true
        })
        this.toggleOn()
    }
   

    logout() {
    window.location = '/'
        const { logoutUser } = this.props;
    axios.post('/api/logout').then(response => {
        this.setState({
            toggle: !this.state.toggle
        })
      logoutUser();
 
      ;
    });
  } 
  
    render() {
       const showLogin = this.state.showing ? <Login open={open} close={this.onCloseModal}/> : null
       const hamburger = this.state.toggle ? 'header-menu show' : 'header-menu hide'
       const { open } = this.state;
    
     
       
    return (
     
       
            <div>
            
                <header className='header'>
                <Link to = "/" className= "logo">
                <img src ={AdventureProject} style={{color: "white", height:"70px", width:"70px"}}/>
                </Link>
                    <div className= 'burger' onClick={this.toggleOn}><FaBars/></div>
                     <ul className={hamburger}>
                            <Wrapper><Link to="/" className="Links" onClick={() => this.setState({toggle: !this.state.toggle})} ><FaHome/></Link></Wrapper>
                            {this.props.user && <Wrapper><Link className="Links" to="/profile" onClick={() => this.setState({toggle: !this.state.toggle})}>Profile<IoIosContact/></Link></Wrapper>}
                            <Wrapper><Link className="Links" to="/adventures" onClick={() => this.setState({toggle: !this.state.toggle})}>Adventures</Link></Wrapper>
                            {!this.props.user ?
                            <Wrapper><a className="Links" onClick={this.showLogin} > Log In<GoSignIn/> </a></Wrapper>
                            :<Wrapper><a className="Links" onClick= {() => this.logout()} > Log Out <GoSignIn/> </a></Wrapper>}
                     </ul> 
                </header>
                <Login open={open} close={this.onCloseModal}  center/>
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