import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import './AdventureWeather.css'

class AdventureWeather extends Component {
    constructor() {
        super();

        this.state = {
            weather: null,
            weatherDaily: null,
            WeatherTomorrow: null,
            WeatherTomorrow2: null,
        }
    }
    
    componentDidMount() {
        axios.get(`/api/weather/${this.props.lat}/${this.props.lon}`).then(res => {
            console.log('hey--', res.data)
            this.setState({
                weather: res.data.currently,
                weatherDaily: res.data.daily.data[0],
                weatherTomorrow: res.data.daily.data[1],
                weatherTomorrow2: res.data.daily.data[2],
            })
        })
    }

    render() {
        // let weather = this.state.weather ? this.state.weather : null
        console.log('hey', this.state.weather)
        // console.log('weather--', this.state.weather.currently)
        const displayWeather = this.state.weather 
        ? 
        <div className="adventure-weather-container">
            <div className="adventure-weather-current">CURRENT LOCAL WEATHER: 
                <span> Three day forecast.</span>
            </div>
            <div className="adventure-weather-forecast">
                <div>
                    <WeatherIcon className="adventure-weather-icon" name="darksky" iconId={this.state.weather.icon} flip="horizontal" />
                    <div>High: {parseInt(this.state.weatherDaily.apparentTemperatureHigh, 0)}°F</div>
                    <div className="adventure-weather-temp">Low: {parseInt(this.state.weatherDaily.apparentTemperatureLow, 0)}°F</div>
                </div>
                <div>
                    <WeatherIcon className="adventure-weather-icon" name="darksky" iconId={this.state.weather.icon} flip="horizontal" />
                    <div>High: {parseInt(this.state.weatherTomorrow.apparentTemperatureHigh, 0)}°F</div>
                    <div className="adventure-weather-temp">Low: {parseInt(this.state.weatherDaily.apparentTemperatureLow, 0)}°F</div>

                </div>
                <div>
                    <WeatherIcon className="adventure-weather-icon" name="darksky" iconId={this.state.weather.icon} flip="horizontal" />
                    <div>High: {parseInt(this.state.weatherTomorrow2.apparentTemperatureHigh, 0)}°F</div>
                    <div className="adventure-weather-temp">Low: {parseInt(this.state.weatherDaily.apparentTemperatureLow, 0)}°F</div> 
                </div>
            </div>
        </div> 
        : <img src="https://loading.io/spinners/gear/index.config-gear-loading-icon.gif" width="100px" alt="fidget"/>

        return  (
            <div className="AdventureWeather">
                {displayWeather}
            </div>
        )
    }
}

AdventureWeather.propTypes = {
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
}

export default AdventureWeather;