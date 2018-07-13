import React, { Component } from 'react';
import axios from 'axios';
import './Adventure.css';
import PropTypes from 'prop-types';
import AdventureHeader from '../AdventureHeader/AdventureHeader';
import AdventureInfo from '../AdventureInfo/AdventureInfo';
import AdventureLocation from '../AdventureLocation/AdventureLocation';

class Adventure extends Component {
    constructor() {
        super();

        this.state = {
            displayComments: null,
            comment: null,
        }
    }

    componentDidMount() {
        let { id } = this.props.location.state.adventure
        axios.get(`/api/comments/${id}`).then( res => {
            console.log('res--', res)
            this.setState({
                displayComments: res.data
            })
        })
    }

    commentHandler = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    createComment = () => {
        let { unique_id, name } = this.props.location.state.adventure
        let newComment = {
            comment: this.state.comment,
            hikingID: unique_id,
            hikingName: name,
            usersID: 2,
        }
        axios.post('/api/comment', newComment).then( res => {
            console.log('works', res)
            axios.get(`/api/comments/${unique_id}`).then( response => {
                console.log('res--', response)
                this.setState({
                    displayComments: response.data
                })
            })
        })
    }
   
    render() {
        let adventure = this.props.location.state.adventure
        let activity = this.props.location.state.adventure.activities[0]
        console.log('adventures--',this.props.location.state.adventure)
        console.log('activity--',this.props.location.state.adventure.activities[0])
        let displayComments = this.state.displayComments ? this.state.displayComments.map( (e, i) => {
            return (
                <div key={i}>
                    <div>{e.content}</div>
                    <div>{e.username}</div>
                    <img src={e.picture} />
                </div>
            )
        }) : null 

        return (
            <div className="Adventure">
                <AdventureHeader adventure={this.props.location.state.adventure} activity={this.props.location.state.adventure.activities[0]} />
                <AdventureInfo adventure={this.props.location.state.adventure} activity={this.props.location.state.adventure.activities[0]} />
                <div className="adventure-comments-container">
                    <input placeholder="COMMENT" onChange={this.commentHandler} />
                    <button onClick={this.createComment} >SAVE</button>
                    {this.state.comment}
                    {displayComments}
                </div>
                <AdventureLocation lat={adventure.lat} lon={adventure.lon} />   
            </div>
        );
    }
}

Adventure.propTypes = {
    location: PropTypes.object.isRequired
}

export default Adventure;