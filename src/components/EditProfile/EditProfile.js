import React, { Component } from 'react';
import axios from 'axios';
import { updateEmail, updatePicture, updateUsername, updateBio, updateFirstName, updateLastName, updateCity, updateState, updateAdventuresCompleted, updateAdventureGoals, updateAdventures, updateComments } from '../../ducks/reducer';
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
    
  componentWillMount(){
    console.log(this.props);
    axios.get('/api/user').then(response => {
      console.log('USER RESPONSE', response.data)
     
      
    })
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
          adventures: value,
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
          lastName: value,
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
        const { updateEmail, updatePicture, updateUsername, updateBio, updateFirstName, updateLastName, updateCity, updateState, updateAdventures, updateAdventureGoals, updateAdventuresCompleted, updateComments, history } = this.props;
        axios.put('/api/user', {
          username: this.state.username || this.props.user.username,
          email: this.state.email || this.props.user.email,
          picture: this.state.picture || this.props.user.picture,
          bio: this.state.bio || this.props.user.bio,
          firstName: this.state.firstName || this.props.user.firstName,
          lastName: this.state.lastName || this.props.user.lastName,
          city: this.state.city || this.props.user.city,
          state: this.state.state || this.props.user.state,
          adventuresCompleted: this.state.adventuresCompleted || this.props.user.adventuresCompleted,
          adventureGoals: this.state.adventureGoals || this.props.user.adventureGoals,
          adventures: this.state.adventures || this.props.user.adventures,
          comments: this.state.comments || this.props.user.comments,
        
        }).then(response => {
            updateUsername(this.state.username)
            updateEmail(this.state.email)
            updateBio(this.state.bio)
            updateFirstName(this.state.firstName)
            updateLastName(this.state.lastName)
            updateCity(this.state.city)
            updateState(this.state.state)
            updateAdventuresCompleted(this.state.adventuresCompleted)
            updateAdventureGoals(this.state.adventureGoals)
            updateAdventures(this.state.adventures)
            updateComments(this.state.comments)

          this.props.history.push('/profile');
        }).catch(err=> console.log("ERROR_____________________",err))
      }
    render() {
        return (
        <div style = {{paddingTop: "80px"}} >
            <h1> Username </h1>
            <input onChange= {(event)=>this.updateUsername(event.target.value)} placeholder={this.props.user.username}/>
                      <br/>
                    <div> Email </div>
                      <br/>
                    <input onChange={(event)=>this.updateEmail(event.target.value)} placeholder={this.props.user.email}/>
                      <br/>
                      <h1> Bio </h1>
                      <input onChange={(event)=>this.updateBio(event.target.value)} placeholder={this.props.user.bio}/>
                      <br/>
                      <h1> First Name </h1>
                      <input onChange={(event)=>this.updateFirstName(event.target.value)} placeholder={this.props.user.firstName}/>
                      <br/>
                      <h1> Last Name</h1>
                      <input onChange={(event)=>this.updateLastName(event.target.value)} placeholder={this.props.user.lastName}/>
                      <br/>
                      <h1> City </h1>
                      <input onChange={(event)=>this.updateCity(event.target.value)} placeholder={this.props.user.city}/>
                      <br/>
                      <h1> State </h1>
                      <input onChange={(event)=>this.updateState(event.target.value)} placeholder={this.props.user.state}/>
                      <br/>
                      <h1> Adventure Completed</h1>
                      <input onChange={(event)=>this.updateAdventuresCompleted(event.target.value)} placeholder={this.props.user.adventuresCompleted}/>
                      <br/>
                      <h1> Adventure Goals</h1>
                      <input onChange={(event)=>this.updateAdventureGoals(event.target.value)} placeholder={this.props.user.adventuresGoals}/>
                      <br/>
                      <h1> Comments</h1>
                      <input onChange={(event)=>this.updateAdventures(event.target.value)} placeholder={this.props.user.comments}/>
                      <br/>
                      <h1> Adventures </h1>
                      <input onChange={(event)=>this.updateComments(event.target.value)} placeholder={this.props.user.adventures}/>
                      <br/>
            <div> Profile Photo </div>
            <input type="file" name="file" id="file" className="inputfile" onChange={(event)=>this.handleImageUpload(event.target.files)} placeholder={this.props.user.picture}/>
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
      updateEmail, updateUsername, updateBio , updateUsername, updateEmail, updateBio, updateFirstName, updateLastName, updateCity, updateState, updateAdventuresCompleted, updateAdventureGoals, updateAdventures, updateComments
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)

