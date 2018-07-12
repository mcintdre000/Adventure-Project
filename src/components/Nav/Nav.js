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
                          
                            <Wrapper><Link data-toggle="collapse" to="/" ><FaHome/></Link></Wrapper>
                            <Wrapper><Link data-toggle="collapse" to="/profile">Profile<IoIosContact/></Link></Wrapper>
                            <Wrapper><Link data-toggle="collapse" to="/contact">Contact</Link></Wrapper>
                            <Wrapper><Link data-toggle="collapse" to="/adventures">Adventures</Link></Wrapper>
                            <Wrapper><Link data-toggle="collapse" to="/login"> Log In <GoSignIn/></Link></Wrapper>
                            <Wrapper><Link data-toggle="collapse" to="/register">Sign Up</Link></Wrapper>
                         
                        </ul>
             </header>


            </div>
             
       
        );
    }
}

export default Nav;