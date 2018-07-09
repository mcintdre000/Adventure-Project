import React, { Component } from 'react';

export default class Adventures extends Component {
    constructor(){
        super();
        this.state = {
            adevntures = [],

        }
    }

    componentDidMount(){

    }
    render() {

       let displayAdventures = this.state.adventures.map((e, i)=> {
            return (<div> e </div>)
        })
        return (
            <div>Adventures</div>
        );
    }
}