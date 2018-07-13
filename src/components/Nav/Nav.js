import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';
import GoSignIn from 'react-icons/lib/go/sign-in';
import IoIosContact from 'react-icons/lib/io/ios-contact';
import './Nav.css'
import Login from '../Login/Login';

const Wrapper = styled.li`
font-size:1.3em`


class Nav extends Component {
   
    constructor(){
        super();
        this.state = {
            showing: false
        }
    }

    showLogin = () => {
        this.setState({
            showing: !this.state.showing 
        })
    }


    render() {
        

        const showLogin = this.state.showing ? <Login /> : null

        return (
        
            <div>
                 <header className = "header">
              <Link to = "/" className= "logo">Adventure Project</Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                         <ul className="menu">
                            <Wrapper><Link to="/" ><FaHome/></Link></Wrapper>
                            <Wrapper><Link to="/profile">Profile<IoIosContact/></Link></Wrapper>
                            <Wrapper><Link to="/contact">Contact</Link></Wrapper>
                            <Wrapper><Link to="/adventures">Adventures</Link></Wrapper>
                            <Wrapper><a  href="#popbox" id= "pop" onClick={this.showLogin}> Log In<GoSignIn/> </a></Wrapper>
                            <Wrapper><Link to="/register">Sign Up</Link></Wrapper>
                        </ul>
             </header>
             
              <a href="#x" class="overlay" id="popbox" ></a>

            <div id="modal-box-pop">
            <a class="close" href="#close" onClick={this.showLogin} ></a>
               {showLogin}
               </div>
              
               
        </div>


       
        );
    }
}

export default Nav;