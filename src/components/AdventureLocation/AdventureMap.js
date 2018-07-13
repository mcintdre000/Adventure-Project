import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import AdventureMarker from "./AdventureMarker";
import PropTypes from 'prop-types';

class AdventureMap extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        center={ { lat: this.props.location.lat, lng: this.props.location.lon } }
        >
        <AdventureMarker location={this.props.location} />
      </GoogleMap>
    );
  }
} 

AdventureMap.propTypes = {
  location: PropTypes.object.isRequired
}

export default withScriptjs(withGoogleMap(AdventureMap));


