import React, { Component } from 'react';
import axios from 'axios';
import './AdventurePhoto.css';
import PropTypes from 'prop-types';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dznmdwgn1/image/upload'

class AdventurePhoto extends Component {
    constructor() {
        super();

        this.state = {
            picture: '',
        }
    }

    
    handleImageUpload = (file) => {

        axios.get('/api/upload').then(response => {
    
            console.log(response.data.signature);
            let formData = new FormData();
            formData.append("signature", response.data.signature)
            formData.append("api_key", "814624655529214");
            formData.append("timestamp", response.data.timestamp)
            formData.append("file", file[0])
       
            axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
              console.log('cloud response',response)
              this.setState({
                  picture: response.data.secure_url
              })
            }).catch( err => {
            console.log(err);
          })
        })
    }

    render() {
        return (
            <div className="AdventurePhoto">
         
                <input type="file" name="file" id="file" className="inputfile" onChange={(event)=>this.handleImageUpload(event.target.files)} />
                <img src={this.state.picture} />
         
            </div>
        );
    }
}

AdventurePhoto.propTypes = {
    // location: PropTypes.object.isRequired
}

export default AdventurePhoto;