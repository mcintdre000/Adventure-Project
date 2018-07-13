import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import AdventureMarker from "./AdventureMarker";

class AdventureMap extends Component {
  render() {
    
    // const markers = this.props.doctors.map( doctor => <AdventureMarker
    //   key={doctor.uid}
    //   doctor={doctor}
    //   location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
    // />);
    console.log('adventuremap--', this.props.location)
    return (
      <GoogleMap
        defaultZoom={8}
        center={ { lat: this.props.location.lat, lng: this.props.location.lon } }
        // center={this.props.location}
        >
        {/* {markers} */}
        <AdventureMarker location={this.props.location} />
      </GoogleMap>
    );
  }
} 

export default withScriptjs(withGoogleMap(AdventureMap));


