import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';
import GoSignIn from 'react-icons/lib/go/sign-in';
import IoIosContact from 'react-icons/lib/io/ios-contact';
import './Nav.css'

const Wrapper = styled.li`
font-size:1.3em`


class Nav extends Component {
   
    constructor(){
        super();
    }


    render() {
        return (
        
            <div>
                 <header className = "header">
              <Link to = "/" className= "logo">Adventure Project</Link>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                         <ul className="menu">
                            <Wrapper><Link to="/" ><FaHome/></Link></Wrapper>
                            <Wrapper><Link to="/profile">Profile<IoIosContact/></Link></Wrapper>
                            <Wrapper><Link to="/register">Sign Up</Link></Wrapper>
                            <Wrapper><Link to="/contact">Contact</Link></Wrapper>
                            <Wrapper><Link to="/adventures">Adventures</Link></Wrapper>
                            <Wrapper><Link to="/login"> Log In <GoSignIn/></Link></Wrapper>
                        </ul>
             </header>


            </div>
             
       
        );
    }
}

export default Nav;