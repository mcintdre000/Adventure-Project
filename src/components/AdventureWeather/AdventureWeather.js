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
            WeatherDayThree: null,
        }
    }
    
    componentDidMount() {
        axios.get(`/api/weather/${this.props.lat}/${this.props.lon}`).then(res => {
            this.setState({
                weather: res.data.daily.summary,
                weatherDaily: res.data.daily.data[0],
                weatherTomorrow: res.data.daily.data[1],
                WeatherDayThree: res.data.daily.data[2],
            })
        })
    }

    render() {
        const displayWeather = this.state.weather 
        ? 
        <div className="adventure-weather-container">
            <div className="adventure-weather-current">CURRENT LOCAL WEATHER: 
                <span>{this.state.weather}</span>
            </div>
            <div className="adventure-weather-forecast">
                <div>
                    <div className="adventure-weather-text">TODAY</div>
                    <div><WeatherIcon className="adventure-weather-icon" name="darksky" iconId={this.state.weatherDaily.icon} flip="horizontal" /></div>
                    <div className="adventure-weather-high">High: {parseInt(this.state.weatherDaily.apparentTemperatureHigh, 0)}°F</div>
                    <div className="adventure-weather-low">Low: {parseInt(this.state.weatherDaily.apparentTemperatureLow, 0)}°F</div>
                </div>
                <div>
                    <div className="adventure-weather-text">DAY 2</div>
                    <div><WeatherIcon className="adventure-weather-icon" name="darksky" iconId={this.state.weatherTomorrow.icon} flip="horizontal" /></div>
                    <div className="adventure-weather-high">High: {parseInt(this.state.weatherTomorrow.apparentTemperatureHigh, 0)}°F</div>
                    <div className="adventure-weather-low">Low: {parseInt(this.state.weatherTomorrow.apparentTemperatureLow, 0)}°F</div>
                </div>
                <div>
                    <div className="adventure-weather-text">DAY 3</div>
                    <div><WeatherIcon className="adventure-weather-icon" name="darksky" iconId={this.state.WeatherDayThree.icon} flip="horizontal" /></div>
                    <div className="adventure-weather-high">High: {parseInt(this.state.WeatherDayThree.apparentTemperatureHigh, 0)}°F</div>
                    <div className="adventure-weather-low">Low: {parseInt(this.state.WeatherDayThree.apparentTemperatureLow, 0)}°F</div> 
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