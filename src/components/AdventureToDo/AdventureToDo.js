import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAdventureGoals, updateAdventuresCompleted } from '../../ducks/reducer';


class AdventureToDo extends Component {
    constructor() {
        super();

        this.state = {
            // adventureGoals: [],
            // adventuresCompleted: []
        }
    }

    submitAdventure = (event) => {
        let goalsCopy = this.props.user.adventureGoals.slice();
        let completedCopy = this.props.user.adventuresCompleted.slice();
        console.log('completedCopy', completedCopy)

        if ( event.target.name === 'completed') {
            completedCopy.push(this.props.adventure)
            this.props.updateAdventuresCompleted(completedCopy)
            this.setState(this.state)
        } else {
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