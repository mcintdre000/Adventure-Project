import React, { Component } from 'react';
import axios from 'axios';
import './Adventure.css';

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
        let { id, name } = this.props.location.state.adventure
        let newComment = {
            comment: this.state.comment,
            hikingID: id,
            hikingName: name,
            usersID: 2,
        }
        axios.post('/api/comment', newComment).then( res => {
            console.log('works', res)
            axios.get(`/api/comments/${id}`).then( response => {
                console.log('res--', response)
                this.setState({
                    displayComments: response.data
                })
            })
        })
    }
   
    render() {
        let adventure = this.props.location.state.adventure
        
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
                <div className="adventure-header-container">
                    <div className="adventure-header-img"> 
                        <img className="adventure-header-img" src={adventure.imgMedium} />
                    </div>
                    <div className="adventure-header-text-container">
                        <div className="adventure-header-text-name">{adventure.name}</div>
                        <div className="adventure-header-text-location">{adventure.location}</div>
                    </div>
                </div>
                <div className="adventure-info-container">
                    <div>difficulty: {adventure.difficulty}</div>
                    <div>Star Votes: {adventure.starVotes}</div>
                    <div>Stars: {adventure.stars}</div>
                    {/* <div>{adventure.url}</div> */}
                    <div>{adventure.name}</div>
                    <div>{adventure.location}</div>
                    <div>{adventure.summary}</div>
                    {/* <img src={adventure.imgMedium} alt="img" />
                    <img src={adventure.imgSmall} alt="img" />
                    <img src={adventure.imgSmallMed} alt="img" />
                    <img src={adventure.imgSqSmall} alt="img" /> */}
                </div>
                <div className="adventure-comments-container">
                    <input placeholder="COMMENT" onChange={this.commentHandler} />
                    <button onClick={this.createComment} >SAVE</button>
                    {this.state.comment}
                </div>
                <div>
                    {displayComments}
                </div>
            </div>
        );
    }
}

export default Adventure;