import React, { Component } from 'react';
import axios from 'axios';
import './Adventure.css';

class Adventure extends Component {
    constructor() {
        super();

        this.state = {
            comment: null,
        }
    }

    commentHandler = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    createComment = () => {
        let newComment = {
            usersID: '',
            comment: this.state.comment,
        }

        axios.post('', newComment)
    }
   
    render() {
        let adventure = this.props.location.state.adventure
        console.log(this.props.location.state.adventure)

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
                    <div>{adventure.location}</div>
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
            </div>
        );
    }
}

export default Adventure;