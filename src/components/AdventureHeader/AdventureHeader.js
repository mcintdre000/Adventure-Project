import React, { Component } from 'react';
import './AdventureHeader.css';
import PropTypes from 'prop-types';

class AdventureHeader extends Component {
    render() {
        let adventure = this.props.adventure
        let activity = this.props.activity
        return (
            <div className="AdventureHeader">
                <div className="adventure-header-container">
                    <div className="adventure-header-img">
                        <img className="adventure-header-img" src={adventure.imgMedium} />                 
                    </div>
                </div>
                <div className="adventure-header-text-container">
                    <div className="adventure-header-text-name">{adventure.name}</div>
                    <div className="adventure-header-text-location">{adventure.city}, {adventure.state}</div>
                    <div className="adventure-header-text-location">{adventure.country}</div>
                </div>
            </div>
        );
    }
}

AdventureHeader.propTypes = {
    adventure: PropTypes.object.isRequired,
    activity: PropTypes.object.isRequired
}

export default AdventureHeader;