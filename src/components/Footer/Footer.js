import React, { Component } from 'react';
import './Footer.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';
import GoSignIn from 'react-icons/lib/go/sign-in';
import IoIosContact from 'react-icons/lib/io/ios-contact';

const Wrapper = styled.li`
font-size:1.3em`

export default class Footer extends Component {
  
    render() {
        return (
            <div>
            <div className = "footer">
              <Link to = "/" className= "logo">Adventure Project</Link>
                <div className="main-conatainer">
                         <ul className="footer-menu">
                            <li><Wrapper><Link to="/"><FaHome/></Link></Wrapper> </li>
                            <li><Wrapper><Link to="/profile">Profile<IoIosContact/></Link></Wrapper> </li>
                            <li><Wrapper><Link to="/adventures">Adventures</Link></Wrapper> </li>
                            <li><Wrapper><Link to="/About">About Us</Link></Wrapper> </li>
                        </ul>
                </div>
             </div>
            </div>
        );
    }
}