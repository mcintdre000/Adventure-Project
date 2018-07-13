import React, { Component } from 'react';
import { Marker } from "react-google-maps";
// import StethoscopeIcon from "../stethoscopeIcon.png";

export default class DoctorMarker extends Component {

  render(){
    console.log('DoctorMarker--', this.props)

    return(
        <Marker
          // position={this.props.location}
          position={ { lat:  this.props.location.lat, lng: this.props.location.lon } }
          // icon={StethoscopeIcon}
        >
        </Marker>
    );
  }
}