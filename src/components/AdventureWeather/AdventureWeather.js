import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class AdventureWeather extends Component {

    getWeather = () => {
        let location = {
            lat: this.props.lat,
            lon: this.props.lon
        }
        axios.get(`/api/weather/${this.props.lat}/${this.props.lon}`).then(res => {
            console.log('hey--', res)
        })
    }

    render() {
        return(
            <div className="AdventureWeather">
                <button onClick={this.getWeather} >GET WEATHER</button>
            </div>
        )
    }
}

AdventureWeather.propTypes = {
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
}

export default AdventureWeather;