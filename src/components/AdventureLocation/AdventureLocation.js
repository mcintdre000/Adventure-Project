import React, { Component } from 'react';
import './AdventureLocation.css';
import AdventureMap from "./AdventureMap";
import PropTypes from 'prop-types';

class AdventureLocation extends Component {
    render() {
        console.log('adventureLocation--', this.props)
        return (
            <div className="AdventureLocation">
                <AdventureMap
                location={this.props}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDm9FPkFDlOwwiTmFLNR2C77-z29s75wvU&v=3.exp&libraries=geometry,drawing,places`}
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



