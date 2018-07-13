import React, { Component } from 'react';
import './AdventureLocation.css';
import AdventureMap from "./AdventureMap";
import PropTypes from 'prop-types';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class AdventureLocation extends Component {
    render() {
        console.log('adventureLocation--', this.props)
        return (
            <div className="AdventureLocation">
                <AdventureMap
                location={this.props}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px`, width: `100vw` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			    />
            </div>
        );
    }
}

AdventureLocation.propTypes = {
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
}

export default AdventureLocation;



