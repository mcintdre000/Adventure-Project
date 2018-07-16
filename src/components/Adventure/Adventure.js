import React, { Component } from 'react';
import './Adventure.css';
import PropTypes from 'prop-types';
import AdventureHeader from '../AdventureHeader/AdventureHeader';
import AdventureInfo from '../AdventureInfo/AdventureInfo';
import AdventureComment from '../AdventureComment/AdventureComment';
import AdventureLocation from '../AdventureLocation/AdventureLocation';
import AdventurePhoto from '../AdventurePhoto/AdventurePhoto';

class Adventure extends Component {
    render() {
        return (
            <div className="Adventure">
                <AdventureHeader adventure={this.props.location.state.adventure} activity={this.props.location.state.adventure.activities[0]} />
                <AdventurePhoto />
                <AdventureInfo adventure={this.props.location.state.adventure} activity={this.props.location.state.adventure.activities[0]} />
                <AdventureComment adventure={this.props.location.state.adventure} />
                <AdventureLocation lat={this.props.location.state.adventure.lat} lon={this.props.location.state.adventure.lon} />   
            </div>
        );
    }
}

Adventure.propTypes = {
    location: PropTypes.object.isRequired
}

export default Adventure;