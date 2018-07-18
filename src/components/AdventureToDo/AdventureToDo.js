import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAdventureGoals, updateAdventuresCompleted } from '../../ducks/reducer';
import axios from 'axios';


class AdventureToDo extends Component {
    constructor() {
        super();

        this.state = {
            // adventureGoals: [],
            // adventuresCompleted: []
        }
    }

    componentWillUnmount() {
        axios.put('/api/user', {
            adventures_completed: this.props.user.adventures_completed,
            adventure_goals: this.props.user.adventure_goals
        }).then( response => {
            console.log('will Unmount response', response)
        })
    //     localStorage.setItem('user', JSON.stringify({
    //             adventures_completed: this.props.user.adventures_completed,
    //             adventure_goals: this.props.user.adventure_goals}));
    }

    submitAdventure = (event) => {
        console.log('this.props.user', this.props.user)
        // console.log('completedCopy', completedCopy)
        
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
        // console.log('-----adventureGoals - local state', this.state.adventureGoals, '-------adventuresExplored', this.state.adventuresCompleted)
        let adventure = this.props.adventure
        return (
            <div>
                <div>
                    <h2> Adventure Goal </h2>
                    <input name="goal" type="checkbox" />
                </div>
                <div>
                    <h2> Adventure Explored </h2>
                    <input name="completed" onClick={ (event) => this.submitAdventure(event)} type="checkbox" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
        // adventureGoals: state.adventureGoals,
        // adventuresCompleted: state.adventuresCompleted
        
    
}

const mapDispatchToProps = {
    updateAdventureGoals,
    updateAdventuresCompleted
}

export default connect( mapStateToProps, mapDispatchToProps )( AdventureToDo );