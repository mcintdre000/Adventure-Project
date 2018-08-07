import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateAdventureGoals, updateAdventuresCompleted } from '../../ducks/reducer';
import axios from 'axios';
import './AdventureToDo.css';
import * as FontAwesome from 'react-icons/lib/fa'

class AdventureToDo extends Component {
    constructor() {
        super();

        this.state = {
            showCompleted: false,
            showGoal: false
        }
    }

    componentWillUnmount() {
        if(this.props.user) {axios.put('/api/userToDo', {
            adventures_completed: this.props.user.adventures_completed,
            adventure_goals: this.props.user.adventure_goals
        }).then( response => {
            console.log('will Unmount')
        })
    }}

    submitAdventure = (event) => {
        if ( event === 'completed') {
            this.showCompleted()
            let completedCopy = this.props.user.adventures_completed.slice();
            completedCopy.push(this.props.adventure)
            this.props.updateAdventuresCompleted(completedCopy)
        } else {
            this.showGoal()
            let goalsCopy = this.props.user.adventure_goals.slice();
            goalsCopy.push(this.props.adventure)
            this.props.updateAdventureGoals(goalsCopy)
        }
    }

    showCompleted = () => {
        this.setState({
            showCompleted: !this.state.showCompleted
        })
    }

    showGoal = () => {
        this.setState({
            showGoal: !this.state.showGoal
        })
    }

    render() {
        return (
            <div className="AdventureToDo">
                <div className="adventure-todo-container">
                    <div>
                        <h2 className="adventure-todo-title">ADVENTURE GOAL</h2>
                    </div>
                    <div>
                        <h1 className="adventure-todo-h1">Adventure ToDo List</h1>
                        <div className="adventure-todo-checkbox-container">
                            <h2>ToDo </h2>
                            { !this.state.showGoal ? 
                            <FontAwesome.FaCircle className="adventure-todo-checkbox-button" onClick={ (event) => this.submitAdventure(event)} /> : <FontAwesome.FaCheckCircle className="adventure-todo-checkbox-button" onClick={ this.showGoal } /> }
                        </div>
                    </div>
                    <div>
                        <h1 className="adventure-todo-h1">Adventure Done-It List</h1>
                        <div className="adventure-todo-checkbox-container-bottom">
                            <h2>Explored </h2>
                            { !this.state.showCompleted ? 
                            <FontAwesome.FaCircle className="adventure-todo-checkbox-button" onClick={ () => this.submitAdventure("completed")}  /> : <FontAwesome.FaCheckCircle className="adventure-todo-checkbox-button" onClick={ this.showCompleted } /> }
                        </div>
                    </div>
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