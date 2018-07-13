import React, { Component } from 'react';
import axios from 'axios';
import './AdventureInfo.css';
import PropTypes from 'prop-types';

class AdventureInfo extends Component {
    render() {
        let adventure = this.props.adventure
        let activity = this.props.activity
        return (
            <div className="AdventureInfo">
                <div className="adventure-info-container">
                    <div>name: {adventure.name}</div>
                    <div>city: {adventure.city}</div>
                    <div>state: {adventure.state}</div>
                    <div>country: {adventure.country}</div>
                    <div>direction: {adventure.directions}</div>
                    <div>activity type name: {activity.activity_type_name}</div>
                    <div>activity type description: {activity.description}</div>
                </div>
            </div>
        );
    }
}

AdventureInfo.propTypes = {
    adventure: PropTypes.object.isRequired,
    activity: PropTypes.object.isRequired
}

export default AdventureInfo;