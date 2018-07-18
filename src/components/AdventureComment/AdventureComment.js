import React, { Component } from 'react';
import axios from 'axios';
import './AdventureComment.css';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa';

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
            console.log('comment--', response.data)
            this.setState({
                displayComments: response.data
            })
        })
    }

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

    editComment= (postid) => {
        console.log('edit--', postid)
        let { unique_id } = this.props.adventure
        let editComment = {
            comment: this.state.editComment,
            usersID: 2,
            unique_id: unique_id
        }
        axios.put(`/api/editComment/${postid}`, editComment).then( res => {
            console.log('edit--', res.data)
            this.setState({
                displayComments: res.data
            })
        }).catch( error => {
            console.log(error)
        })
    }
    
    deleteComment = (postid) => {
        let { unique_id } = this.props.adventure
        axios.delete(`/api/deleteComment/${postid}`).then( res => {
            axios.get(`/api/comments/${unique_id}`).then( response => {
                this.setState({
                    displayComments: response.data
                })
            })
        })
    }
   
    render() {
        let displayComments = this.state.displayComments ? this.state.displayComments.map( (e, i) => {
            return (
                <div key={i} className="adventure-comment-display">
                    <div>{e.username}</div>
                    <img width="100px" src={e.picture} />
                    <div>{e.content}</div>
                    {/* <FaIcon icon="camera-retro" /> */}
                    {/* <button onClick={ () => this.editComment(e.id) }>edit</button> */}
                    {/* <input onChange={this.editCommentHandler} placeholder="edit here" /> */}
                    {/* <button onClick={ () => this.deleteComment(e.id) }>delete</button> */}
                </div>
            )
        }) : null 

        return (
            <div className="AdventureComment">
                <div className="adventure-comment-container">
                    <div className="adventure-comment-title">TIPS & COMMENTS</div>
                    {displayComments}
                    <input placeholder="COMMENT" onChange={this.commentHandler} />
                    <button onClick={this.createComment} >SAVE</button>
                    {this.state.comment}
                    <FontAwesome.FaTrash /> 
                    <FontAwesome.FaEdit /> 
                    <FontAwesome.FaBeer />
                </div>
            </div>
        );
    }
}

AdventureComment.propTypes = {
    adventure: PropTypes.object.isRequired
}

export default AdventureComment;