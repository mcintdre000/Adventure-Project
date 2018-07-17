import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {geolocated} from 'react-geolocated';
import './Adventures.css';
import img1 from '../../media/RandomImgs/activity-adventure-backlit-450062.jpg';
import img2 from '../../media/RandomImgs/adult-adventure-daytime-1076081.jpg';
import img3 from '../../media/RandomImgs/adventure-backlit-climb-1109881.jpg';
import img4 from '../../media/RandomImgs/backlit-blurred-background-close-up-1209658.jpg';
import img5 from '../../media/RandomImgs/backlit-climb-climber-822421.jpg';
import img6 from '../../media/RandomImgs/backlit-clouds-dusk-803212.jpg';
import img7 from '../../media/RandomImgs/backlit-dawn-dusk-1222949.jpg';

const myPix = new Array(img1,img2,img3,img4,img5,img6,img7);

const randomNum = Math.floor(Math.random() * myPix.length);

class Adventures extends Component {
    constructor(){
        super();

        this.state = {
            adventures: [],
            filteredAdventures: [],
            city: '',
            state: '',
            showing: false,
            getLocation: false,
            // lat: null,
            // lon: null
        }
    }

    componentDidMount(){
        
        axios.get( '/api/data' ).then( response => {
            // console.log('componentDidMount call', response.data)
            this.setState({
                adventures: response.data    
            });
        })
    }
    showFilter = () => {
        this.setState({
            showing: !this.state.showing
        });
    }

    filterByRegion = () => {
        axios.post('/api/dataByLocation', {state: this.state.state}).then( res => {
            // console.log(res.data.places)
            this.setState({
                adventures: [],
                filteredAdventures: res.data.places
            })
    })
}

    filterByLocation = () => {
        // let lat = this.props.coords.latitude
        // let lon = this.props.coords.longitude
        axios.post('/api/dataByGeoLocation', { lat: this.props.coords.latitude, lon: this.props.coords.longitude }).then( res => {
            console.log(res.data.places)
            this.setState({
                adventures: [],
                filteredAdventures: res.data.places
            })
    })
      
}

    render() {
        // console.log('this.props.coords.', this.props.coords, 'this.state.latitude', this.state.latitude)
       
    let displayAdventures;
    this.state.filteredAdventures.length 
    ?
    displayAdventures = this.state.filteredAdventures.map((e,i) => {
        // console.log('e',e.activities[0].thumbnail)
        return (
                <Link to={{ pathname: `/adventure/${e.name}`, state: { adventure: e } }} key= {i}>
                    <p> {e.name} </p>
                    {e.activities.length ? <img src= {e.activities[0].thumbnail} /> : ''}
                    <p> {e.difficulty} </p>
                    <img src = {e.imgMedium} className ="photo" height="400px" width="400px"/>
                </Link>
        )
    })
    :
    displayAdventures = this.state.adventures.map((e, i)=> {
        // console.log('e',e,'e.city',e.city,'e.picture',e.picture)
            return (
                <Link to={{ pathname: `/adventure/${e.name}`, state: { adventure: e } }} key= {i}>
                    <p> { e.name } </p>
                    <p> { e.city } </p>
                    <p> { e.state } </p>
                    {e.picture === ''
                    ?
                    <img src= { myPix[randomNum] } className ="photo" height="400px" width="400px"/>
                    :
                    <img src= { e.picture } className= "photo" height="400px" width="400px"/>
                    }
                </Link>
                )           
        })

        return (
            <div>
                <div className="adventures-header">Header</div>
                Filter by:
                <button onClick={ () => this.showFilter() }>Region</button>
                { this.state.showing &&
                <div>
                    {/* <input onChange={ (e) => this.cityHandler(e.target.value)}placeholder='City'></input>  */}
                    <select
                    value={ this.state.state }
                    onChange={ e => this.setState({ state: e.target.value })}
                    >
                        <option value='State'>State</option>
                        <option value='Alabama'>Alabama</option>
                        <option value='Alaska'>Alaska</option>
                        <option value='Arizona'>Arizona</option>
                        <option value='Arkansas'>Arkansas</option>
                        <option value='California'>California</option>
                        <option value='Colorado'>Colorado</option>
                        <option value='Connecticut'>Connecticut</option>
                        <option value='Delaware'>Delaware</option>
                        <option value='District Of Columbia'>District Of Columbia</option>
                        <option value='Florida'>Florida</option>
                        <option value='Georgia'>Georgia</option>
                        <option value='Hawaii'>Hawaii</option>
                        <option value='Idaho'>Idaho</option>
                        <option value='Illinois'>Illinois</option>
                        <option value='Indiana'>Indiana</option>
                        <option value='Iowa'>Iowa</option>
                        <option value='Kansas'>Kansas</option>
                        <option value='Kentucky'>Kentucky</option>
                        <option value='Louisiana'>Louisiana</option>
                        <option value='Maine'>Maine</option>
                        <option value='Maryland'>Maryland</option>
                        <option value='Massachusetts'>Massachusetts</option>
                        <option value='Michigan'>Michigan</option>
                        <option value='Minnesota'>Minnesota</option>
                        <option value='Mississippi'>Mississippi</option>
                        <option value='Missouri'>Missouri</option>
                        <option value='Montana'>Montana</option>
                        <option value='Nebraska'>Nebraska</option>
                        <option value='Nevada'>Nevada</option>
                        <option value='New Hampshire'>New Hampshire</option>
                        <option value='New Jersey'>New Jersey</option>
                        <option value='New Mexico'>New Mexico</option>
                        <option value='New York'>New York</option>
                        <option value='North Carolina'>North Carolina</option>
                        <option value='North Dakota'>North Dakota</option>
                        <option value='Ohio'>Ohio</option>
                        <option value='Oklahoma'>Oklahoma</option>
                        <option value='Oregon'>Oregon</option>
                        <option value='Pennsylvania'>Pennsylvania</option>
                        <option value='Rhode Island'>Rhode Island</option>
                        <option value='South Carolina'>South Carolina</option>
                        <option value='South Dakota'>South Dakota</option>
                        <option value='Tennessee'>Tennessee</option>
                        <option value='Texas'>Texas</option>
                        <option value='Utah'>Utah</option>
                        <option value='Vermont'>Vermont</option>
                        <option value='Virginia'>Virginia</option>
                        <option value='Washington'>Washington</option>
                        <option value='West Virginia'>West Virginia</option>
                        <option value='Wisconsin'>Wisconsin</option>
                        <option value='Wyoming'>Wyoming</option>
                    </select>
                    <button onClick={ () => this.filterByRegion() }> Filter </button>
                </div>}
                <div>
                    <button onClick={ () => this.filterByLocation() }> Near Me </button>
                    {!this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : ''}
                </div>
                <div className="adventures-container">
                    { displayAdventures }
                </div>
            </div>
        );
    }
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Adventures);