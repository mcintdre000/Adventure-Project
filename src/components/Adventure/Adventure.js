import React, { Component } from 'react';
import axios from 'axios';
import './Adventure.css';
import PropTypes from 'prop-types';
import AdventureHeader from '../AdventureHeader/AdventureHeader';
import AdventureInfo from '../AdventureInfo/AdventureInfo';
import AdventureComment from '../AdventureComment/AdventureComment';
import AdventureLocation from '../AdventureLocation/AdventureLocation';
import AdventureToDo from '../AdventureToDo/AdventureToDo';

class Adventure extends Component {
    render() {
        return (
            <div className="Adventure">
                <AdventureHeader adventure={this.props.location.state.adventure} activity={this.props.location.state.adventure.activities[0]} />
                <AdventureInfo adventure={this.props.location.state.adventure} activity={this.props.location.state.adventure.activities[0]} />
                <AdventureComment adventure={this.props.location.state.adventure} />
                <AdventureLocation lat={this.props.location.state.adventure.lat} lon={this.props.location.state.adventure.lon} />   
                <AdventureToDo adventure={this.props.location.state.adventure} />
            </div>
        );
    }
}

Adventure.propTypes = {
    location: PropTypes.object.isRequired
}

export default Adventure;