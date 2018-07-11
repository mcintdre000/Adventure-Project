import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import './Adventures.css';
>>>>>>> filter

export default class Adventures extends Component {
    constructor(){
        super();

        this.state = {
            adventures: [],
            city: '',
            state: '',
            showing: false
        }
    }

    componentDidMount(){
        // const config = {
        //     headers: {'Accept': 'text/plain', 'X-Mashape-Key': 'c90L0Id5Ifmsh2HGmKnxhlTV19nkp10D3M0jsn9Vv1gy4kB5ty'}
        // }
        // axios.get( "https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=Phoenix&q[country_cont]=United+States&q[state_cont]=Arizona", config).then( res => {
        //     console.log(res.data.places)
        //     this.setState({
        //         adventures: res.data.places
        //     });
        // })
        axios.get('/api/data' ).then( res => {
            // console.log(res.data)
            this.setState({
                adventures: res.data.trails          
            });
        })

        // axios.post('/api/dataByLocation', { city: 'Denver', state: 'Colorado'}).then( res => {
        //     console.log(res.data.places)
        // })
    }

    showFilter = () => {
        this.setState({
            showing: !this.state.showing
        });
    }

    filterByRegion = () => {
        axios.post('/api/dataByLocation', { city: this.state.city, state: this.state.state}).then( res => {
            console.log(res.data.places)
            this.setState({
                adventures: res.data.places
            })
        })
    }

    cityHandler = (val) => {
        this.setState({
            city: val
        });
    }

    render() {

       let displayAdventures = this.state.adventures.map((e, i)=> {
            return (<Link to={{ pathname: `/adventure/${e.name}`, state: { adventure: e } }} key= {i}>
                    <p> {e.name} </p>
                    <p> {e.summary} </p>
                    <p> {e.difficulty} </p>
                    <img src = {e.imgMedium} className ="photo" height="400px" width="400px"/>
                    </Link>
                )
        })
        return (
            <div>
                <div className="adventures-header">Header</div>
                <button onClick={ () => this.showFilter() }>Region</button>
                {this.state.showing &&
                <div>
                    <input onChange={ (e) => this.cityHandler(e.target.value)}placeholder='City'></input> 
                    <select
                    value={this.state.state}
                    onChange={e => this.setState({ state: e.target.value })}
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
                    <button onClick={() => this.filterByRegion() }>Filter</button>
                </div>}
                <div className="adventures-container">
                    {displayAdventures}
                </div>
            </div>
        );
    }
}