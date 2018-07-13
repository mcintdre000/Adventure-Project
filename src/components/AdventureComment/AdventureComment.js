import React, { Component } from 'react';
import axios from 'axios';
import './AdventureComment.css';
import PropTypes from 'prop-types';

class AdventureComment extends Component {
    constructor() {
        super();

        this.state = {
            displayComments: null,
            comment: null,
            editComment: null,
        }
    }

    componentDidMount() {
        let { unique_id } = this.props.adventure
        axios.get(`/api/comments/${unique_id}`).then( response => {
            console.log('res--', response)
            this.setState({
                displayComments: response.data
            })
        })

    }

    // componentWillMount() {
    //     let { id } = this.props.adventure
    //     axios.get(`/api/comments/${id}`).then( res => {
    //         console.log('res--', res)
    //         this.setState({
    //             displayComments: res.data
    //         })
    //     })
    // }

    commentHandler = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    editCommentHandler = (e) => {
        this.setState({
            editComment: e.target.value
        })
    }

    createComment = () => {
        let { unique_id, name } = this.props.adventure
        let newComment = {
            comment: this.state.comment,
            hikingID: unique_id,
            hikingName: name,
            usersID: 2,
        }
        axios.post('/api/createComment', newComment).then( res => {
            console.log('works', res)
            axios.get(`/api/comments/${unique_id}`).then( response => {
                console.log('res--', response)
                this.setState({
                    displayComments: response.data
                })
            })
        })
    }

    editComment= (id) => {
        axios.put(`/api/editComment/${id}`).then().catch()
    }
    
    deleteComment = (postid) => {
        axios.delete(`/api/deleteComment/${postid}`).then().catch()
    }
   
    render() {
        let displayComments = this.state.displayComments ? this.state.displayComments.map( (e, i) => {
            return (
                <div key={i}>
                    <div>{e.content}</div>
                    <div>{e.username}</div>
                    <img src={e.picture} />
                    <button onClick={ () => this.editComment(e.id) }>edit</button>
                    <input onChange={this.editCommentHandler} placeholder="edit here" />
                    <button onClick={ () => this.deleteComment(e.id) }>delete</button>
                </div>
            )
        }) : null 

     

        return (
            <div className="AdventureComment">
                <div className="adventure-comment-container">
                    <input placeholder="COMMENT" onChange={this.commentHandler} />
                    <button onClick={this.createComment} >SAVE</button>
                    {this.state.comment}
                    {displayComments}
                </div>
            </div>
        );
    }
}

AdventureComment.propTypes = {
    adventure: PropTypes.object.isRequired
}

export default AdventureComment;