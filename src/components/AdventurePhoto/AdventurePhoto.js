import React, { Component } from 'react';
import axios from 'axios';
import './AdventurePhoto.css';
import PropTypes from 'prop-types';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dznmdwgn1/image/upload'

class AdventurePhoto extends Component {
    constructor() {
        super();

        this.state = {
            photo: '',
            displayPhotos: null,
        }
    }

    componentDidMount() {
        let id = this.props.adventure.unique_id
        axios.get(`/api/photo/${id}`).then( res => {
            this.setState({
                displayPhotos: res.data
            })
        })
    }

    handleImageUpload = (file) => {
        let id = this.props.adventure.unique_id;
        let name = this.props.adventure.name;
        
        axios.get('/api/upload').then(response => {
            let formData = new FormData();
            formData.append("signature", response.data.signature)
            formData.append("api_key", "814624655529214");
            formData.append("timestamp", response.data.timestamp)
            formData.append("file", file[0])
            axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
                this.setState({
                    photo: response.data.secure_url
                })
                let newPhoto = {
                    name: name,
                    photo: this.state.photo
                }
                axios.post(`/api/uploadPhoto/${id}`, newPhoto).then( res => {
                    this.setState({
                        displayPhotos: res.data
                    })
                }).catch( err => {
                    console.log(err)
                })
            }).catch( err => {
            console.log(err);
          })
        })
    }

    render() {
        let displayPhotos = this.state.displayPhotos ? this.state.displayPhotos.map( (e, i) => {
            return (
                <div key={i}>
                    <img className="adventure-photo-image" src={e.photo} alt="img" />
                </div>
            )
        }) : <img width="100px" height="100px" src="https://img.devrant.com/devrant/rant/r_647810_4FeCH.gif" />;

        return (
            <div className="AdventurePhoto">
                <div className="adventure-photo-container">
                    {displayPhotos}
                    <div className="adventure-photo-upload-button">UPLOAD
                        <input className="adventure-photo-upload" type="file" name="file" id="file" onChange={(event)=>this.handleImageUpload(event.target.files)} />
                    </div>
                </div>
            </div>
        );
    }
}

AdventurePhoto.propTypes = {
    adventure: PropTypes.object.isRequired
}

export default AdventurePhoto;