import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateAdventureGoals, updateAdventuresCompleted } from '../../ducks/reducer';
import axios from 'axios';


class AdventureToDo extends Component {
    constructor() {
        super();
    }

    componentWillUnmount() {
        if(this.props.user) {axios.put('/api/userToDo', {
            adventures_completed: this.props.user.adventures_completed,
            adventure_goals: this.props.user.adventure_goals
        }).then( response => {
            console.log('will Unmount response', response)
        })
    }}

    submitAdventure = (event) => {
        console.log('this.props.user', this.props.user)        
        if ( event.target.name === 'completed') {
            let completedCopy = this.props.user.adventures_completed.slice();
            completedCopy.push(this.props.adventure)
            this.props.updateAdventuresCompleted(completedCopy)
            this.setState(this.state)
        } else {
            let goalsCopy = this.props.user.adventure_goals.slice();
            goalsCopy.push(this.props.adventure)
            this.props.updateAdventureGoals(goalsCopy)
        }
    }

    render() {
        console.log('this.props.adventure', this.props.adventure)
        console.log('this.props',this.props)
        return (
            <div>
                <div>
                    <h2> Adventure Goal </h2>
                    <input name="goal" onClick={ (event) => this.submitAdventure(event)} type="checkbox" />
                </div>
                <div>
                    <h2> Adventure Explored </h2>
                    <input name="completed" onClick={ (event) => this.submitAdventure(event)} type="checkbox" />
                </div>
            </div>
        );
    }
}

AdventureToDo.propTypes = {
    adventure: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return state     
}

const mapDispatchToProps = {
    updateAdventureGoals,
    updateAdventuresCompleted
}

export default connect( mapStateToProps, mapDispatchToProps )( AdventureToDo );