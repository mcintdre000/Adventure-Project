import React, { Component } from 'react';
import './AdventureInfo.css';
import PropTypes from 'prop-types';

class AdventureInfo extends Component {
    render() {
        let adventure = this.props.adventure
        let activity = this.props.activity
        return (
            <div className="AdventureInfo">
                <div className="adventure-info-container">
                    <div className="adventure-info-activity">ACTIVITY TYPE: 
                        <span>{activity.activity_type_name}</span>
                    </div>
                    <div>DESCRIPTION: 
                        <span dangerouslySetInnerHTML={{__html: activity.description}}></span>
                    </div>
                    <div className="adventure-info-name">NAME: 
                        <span>{adventure.name}</span>
                    </div> 
                    <div>REGION: 
                        <span>{adventure.city}, {adventure.state}</span>
                    </div>
                    <div>COUNTRY: 
                        <span>{adventure.country}</span>
                    </div>
                    <div className="adventure-info-direction">DIRECTION: 
                        <span>{adventure.directions}</span>
                    </div>         
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