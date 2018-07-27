import React, { Component } from 'react';
import './AdventureHeader.css';
import PropTypes from 'prop-types';
import axios from 'axios';

class AdventureHeader extends Component {
    constructor() {
        super()

        this.state = {
            photo: null
        }
    }
    componentDidMount() {
        axios.get(`/api/photo/${this.props.adventure.unique_id}`).then( res => {
            if(res.data.length >= 1) {
                this.setState({
                    photo: res.data[0].photo
                })
            }  
        })
    }

    render() {
        let adventure = this.props.adventure
        return (
            <div className="AdventureHeader">
                <div className="adventure-header-container">
                    <div className="adventure-header-img">
                        <img className="adventure-header-img" src={this.state.photo} />                 
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
}

export default AdventureHeader;