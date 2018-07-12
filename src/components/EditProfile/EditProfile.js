import React, { Component } from 'react';
import axios from 'axios';
import { updateEmail, updatePicture, updateUsername, updateBio, } from '../../ducks/reducer';
import { connect } from 'react-redux';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/adamsdevmountain/image/upload'

class EditProfile extends Component {
    constructor(){
        super();
        this.state ={
            username:'',
            email: '',
            picture:'',
            bio: '',
            firstName: '',
            lastName: '',
            city: '',
            state: '',
            adventuresCompleted: '',
            adventureGoals: '',
            adventures: '',
            comments:''

        }
        
        this.updateEmail = this.updateEmail.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updateBio = this.updateBio.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateAdventuresCompleted = this.updateAdventuresCompleted.bind(this);
        this.updateAdventureGoals  = this.updateAdventureGoals.bind(this);
        this.updateAdventures = this.updateAdventures.bind(this);
        this.updateComments = this.updateComments.bind(this);
    }

    handleImageUpload = (file) => {

        axios.get('/api/upload').then(response => {
    
            console.log(response.data.signature);
            let formData = new FormData();
            formData.append("signature", response.data.signature)
            formData.append("api_key", "546115183267443");
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
    
    updateComments(value){
        this.setState({
         comments: value,
        })
      }

    updateAdventures(value){
        this.setState({
          adevntures: value,
        })
      }

    updateAdventureGoals(value){
        this.setState({
        adventureGoals: value,
        })
      }

    updateAdventuresCompleted(value){
        this.setState({
         adventuresCompleted : value,
        })
      }

    updateCity(value){
        this.setState({
          city: value,
        })
      }

    updateState(value){
        this.setState({
          state: value,
        })
      }

    updateFirstName(value){
        this.setState({
          firstName: value,
        })
      }

    updateLastName(value){
        this.setState({
          LastName: value,
        })
      }

    updateBio(value){
        this.setState({
          bio: value,
        })
      }
    
      updateEmail(value) {
        this.setState({
          email: value,
        });
      }
    
      updateUsername(value){
        this.setState({
          username: value,
        });
      }
    
      editProfile() {
        console.log("profile")
        const { updateEmail, updatePicture, updateUsername, updateBio, history } = this.props;
        axios.post('/api/user', {
          username: this.state.username || this.props.user.username,
          email: this.state.email || this.props.user.email,
          picture: this.state.picture || this.props.user.picture,
          bio: this.state.bio || this.props.user.bio,
        
        
        }).then(response => {
            updateUsername(this.state.username)
            updateEmail(this.state.email)
            updateBio(this.state.bio)
            
            
            
          this.props.history.push('/profile');
        }).catch(err=> console.log("ERROR_____________________",err))
      }
    render() {
        return (
        <div style = {{paddingTop: "80px"}} >
            <h1> Hello </h1>
            <div> Profile Photo </div>
                      <br/>
                    <input type="file" name="file" id="file" className="inputfile" onChange={(event)=>this.handleImageUpload(event.target.files)} placeholder={this.props.picture}/>
                        <br/>
                        <br/>
                      <img src ={this.state.picture}/>
                      <button className="button" onClick={this.editProfile}>Update</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
    }
    
    const mapDispatchToProps = { 
      updateEmail, updateUsername, updateBio
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)

// id serial primary key,
// username text unique , 
// password VARCHAR,
// firstName text, 
// lastName text, 
// email text, 
// picture text, 
// bio text, 
// city text, 
// state text, 
// birthday text, 
// adventures_completed text, 
// adventure_goals text, 
// adventures text, 
// comments text,
// stamp timestamp