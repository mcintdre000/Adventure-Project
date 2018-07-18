import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import GoAlert from 'react-icons/lib/go/alert';
import LottieError from './LottieError'
import './Error.css'


export default class ErrorComponent extends Component {
    render() {
        return (
        <div>
            <div className="background">
              <div className = "Error">
                  <div className = "Text">
                       404 Error 
                   <br/>
                      The Page You Requested is Invalid
                   <br/>
                      <GoAlert/>
                   <br/>
                      Click on the Link Below to Return to the Homepage
                   <br/>
                      <Link to="/" > <LottieError/></Link>
                  </div>
              </div>
            </div>
        </div>  
            
        );
    }
}
