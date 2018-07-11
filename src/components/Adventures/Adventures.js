import React, { Component } from 'react';
import axios from 'axios';

export default class Adventures extends Component {
    constructor(){
        super();

        this.state = {
            adventures: [],
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
            console.log(res.data)
            this.setState({
                        adventures: res.data.trails
                       
                    });
        })
    }
    render() {

       let displayAdventures = this.state.adventures.map((e, i)=> {
            return (<div key= {i}>
                    <p> {e.name} </p>
                    <p> {e.summary} </p>
                    <p> {e.difficulty} </p>
                    <img src = {e.imgMedium}className ="photo" height="400px" width="400px"/>
                    </div>
                )
        })
        return (
            <div>Adventures
                <div>
                    <div>Header</div>
                    {displayAdventures}
                </div>
            </div>
        );
    }
}