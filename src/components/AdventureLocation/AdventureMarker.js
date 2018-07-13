import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import PropTypes from 'prop-types';

class AdventureMarker extends Component {
  render(){
    return(
        <Marker
          position={ { lat:  this.props.location.lat, lng: this.props.location.lon } }
        >
        </Marker>
    );
  }
}

AdventureMarker.propTypes = {
  location: PropTypes.object.isRequired
}

export default AdventureMarker;