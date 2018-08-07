import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { geolocated } from 'react-geolocated';
import { Button } from 'antd';
import './Adventures.css';
import img1 from '../../media/RandomImgs/activity-adventure-backlit-450062.jpg';
import img2 from '../../media/RandomImgs/adult-adventure-daytime-1076081.jpg';
import img3 from '../../media/RandomImgs/adventure-backlit-climb-1109881.jpg';
import img4 from '../../media/RandomImgs/backlit-blurred-background-close-up-1209658.jpg';
import img5 from '../../media/RandomImgs/backlit-climb-climber-822421.jpg';
import img6 from '../../media/RandomImgs/backlit-clouds-dusk-803212.jpg';
import img7 from '../../media/RandomImgs/backlit-dawn-dusk-1222949.jpg';

const myPix = new Array( img1,img2,img3,img4,img5,img6,img7 );

const randomNum = Math.floor( Math.random() * myPix.length );

class Adventures extends Component {
    constructor(){
        super();

        this.state = {
            adventures: [],
            filteredAdventures: [],
            nearMeAdventures: [],
            city: '',
            state: '',
            showing: false,
            getLocation: false,
        }
    }

    componentDidMount(){
        axios.get( '/api/data' ).then( response => {
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
        axios.post( '/api/dataByLocation', { state: this.state.state } ).then( res => {
            this.setState({
                adventures: [],
                nearMeAdventures: [],
                filteredAdventures: res.data
            })
    })
}

    filterByLocation = () => {
        axios.post('/api/dataByGeoLocation', { lat: this.props.coords.latitude, lon: this.props.coords.longitude }).then( res => {
            this.setState({
                adventures: [],
                filteredAdventures: [],
                nearMeAdventures: res.data
            })
    })
      
}

    render() {
    let displayAdventures;
    if(this.state.filteredAdventures.length){
        displayAdventures = this.state.filteredAdventures.map( ( e, i ) => {
            return (
                    <Link to={{ pathname: `/adventure/${ e.name }`, state: { adventure: e } }} key= { i }>
                       <div className="adventure-info">
                    <div>{ e.name } </div>
                    <div>{ e.city }, </div>
                    <div>{ e.state } </div>
                    { e.picture === null
                    ?
                    <img className='adventures-photo' src= { myPix[randomNum] } height="400px" width="400px"/>
                    :
                    <img className='adventures-photo' src= { e.picture } height="400px" width="400px"/>
                    }
                    </div>
                    </Link>
        )
    })}
    else if(this.state.nearMeAdventures.length){
        displayAdventures = this.state.nearMeAdventures.map( ( e, i ) => {
            return (
                <Link to={{ pathname: `/adventure/${ e.name }`, state: { adventure: e } }} key= { i }>
                    <div className="adventure-info">
                    <div>{ e.name } </div>
                    <div>{ e.city }, </div>
                    <div>{ e.state } </div>
                    { e.picture === null
                    ?
                    <img className='adventures-photo' src= { myPix[randomNum] } height="400px" width="400px"/>
                    :
                    <img className='adventures-photo' src= { e.picture } height="400px" width="400px"/>
                    }
                    </div>
                </Link>
    ) 
        })
    }else{

    displayAdventures = this.state.adventures.map( ( e, i )=> {
            return (
                <Link to={{ pathname: `/adventure/${ e.name }`, state: { adventure: e } }} key= { i }>
                    <div className="adventure-info">
                    <div className= "adventure-name">{ e.name } </div>
                    <div>{ e.city }, </div>
                    <div>{ e.state } </div>
                    { e.picture === null
                    ?
                    <img className='adventures-photo' src= { myPix[randomNum] } height="400px" width="400px"/>
                    :
                    <img className='adventures-photo' src= { e.picture } height="400px" width="400px"/>
                    }
                    </div>
                </Link>
                )           
        })
    }
        return (
            <div className="outer-adventure">
                <div className="inner-adventure">
                <div className="adventures-header"> </div>
                 
                <div className="adventure-text">Filter by:</div>
                <button  className="inputfile" onClick={ () => this.showFilter() }>Region</button>
                { this.state.showing &&
                <div>
                    <select className="inputfile"
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
                    <Button className="inputfile" onClick={ () => this.filterByRegion() }> Filter </Button>
                </div> }
                <div>
                    <Button className="inputfile" onClick={ () => this.filterByLocation() }> Near Me </Button>
                    { !this.props.isGeolocationAvailable
                        ? <div className="adventure-text">Your browser does not support Geolocation</div>
                        : !this.props.isGeolocationEnabled
                            ? <div className="adventure-texts" >Geolocation is not enabled</div>
                            : '' }
                </div>
                <div className="adventures-container">
                    { displayAdventures }
                </div>
              </div>
               
            </div>
        );
    }
}

Adventures.propTypes = {
    coords: PropTypes.object.isRequired
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })( Adventures );