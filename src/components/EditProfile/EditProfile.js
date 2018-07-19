import React, { Component } from 'react';
import axios from 'axios';
import { updateEmail, updatePicture, updateUsername, updateBio, updateFirstName, updateLastName, updateCity, updateState, updateAdventuresCompleted, updateAdventureGoals, updateAdventures, updateComments } from '../../ducks/reducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dznmdwgn1/image/upload'

class EditProfile extends Component {
    constructor(){
        super();
        this.state ={
            username:'',
            email: '',
            picture:'',
            bio: '',
            firstname: '',
            lastname: '',
            city: '',
            state: '',
            adventures_completed: '',
            adventure_goals: '',
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
    
//   componentWillMount(){
//     // console.log(this.props);
//     axios.get('/api/user').then(response => {
//       // console.log('USER RESPONSE', response.data)
     
      
//     })
// }

    handleImageUpload = (file) => {

        axios.get('/api/upload').then(response => {
    
            // console.log(response.data.signature);
            let formData = new FormData();
            formData.append("signature", response.data.signature)
            formData.append("api_key", "814624655529214");
            formData.append("timestamp", response.data.timestamp)
            formData.append("file", file[0])
       
            axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
              // console.log('cloud response',response)
              this.setState({
                  picture: response.data.secure_url
              })
            }).catch( err => {
            console.log(err);
          })
        })
      }
    
    updateComments = (value) => {
        this.setState({
          comments: value,
        })
      }

    updateAdventures= (value) => {
        this.setState({
          adventures: value,
        })
      }

    updateAdventureGoals= (value) => {
        this.setState({
          adventure_goals: value,
        })
      }

    updateAdventuresCompleted= (value) => {
        this.setState({
          adventures_completed : value,
        })
      }

    updateCity= (value) => {
        this.setState({
          city: value,
        })
      }

    updateState= (value) => {
        this.setState({
          state: value,
        })
      }

    updateFirstName= (value) => {
        this.setState({
          firstname: value,
        })
      }

    updateLastName= (value) => {
        this.setState({
          lastname: value,
        })
      }

    updateBio= (value) => {
        this.setState({
          bio: value,
        })
      }
    
      updateEmail= (value) => {
        this.setState({
          email: value,
        });
      }
    
      updateUsername= (value) => {
        this.setState({
          username: value,
        });
      }
    
      editProfile() {
        // console.log("profile")
        // console.log('hello', this.state.adventure_goals);
        const { updateEmail, 
                updatePicture, 
                updateUsername, 
                updateBio, 
                updateFirstName, 
                updateLastName, 
                updateCity, 
                updateState, 
                updateAdventures, 
                updateAdventureGoals, 
                updateAdventuresCompleted, 
                updateComments, 
                history } = this.props;
        
                axios.put('/api/user', {
          username: this.state.username || this.props.user.username,
          email: this.state.email || this.props.user.email,
          picture: this.state.picture || this.props.user.picture,
          bio: this.state.bio || this.props.user.bio,
          firstName: this.state.firstname || this.props.user.firstname,
          lastName: this.state.lastname || this.props.user.lastname,
          city: this.state.city || this.props.user.city,
          state: this.state.state || this.props.user.state,
          // adventuresCompleted: this.state.adventures_completed || this.props.user.adventures_completed,
          // adventureGoals: this.state.adventure_goals || this.props.user.adventure_goals,
          adventures: this.state.adventures || this.props.user.adventures,
          comments: this.state.comments || this.props.user.comments,
        
        }).then(response => {
            updateUsername(this.state.username)
            updateEmail(this.state.email)
            updateBio(this.state.bio)
            updateFirstName(this.state.firstname)
            updateLastName(this.state.lastname)
            updateCity(this.state.city)
            updateState(this.state.state)
            // updateAdventuresCompleted(this.state.adventures_completed)
            // updateAdventureGoals(this.state.adventure_goals)
            updateAdventures(this.state.adventures)
            updateComments(this.state.comments)

          this.props.history.push('/profile');
        }).catch(err=> console.log("ERROR_____________________",err))
      }
    render() {
        // console.log(this.state.adventures_completed,"adventures-----------------")
        // console.log(this.props, "this")
        return (
        <div style = {{paddingTop: "80px"}} >
        <button className="buttons" onClick={this.editProfile}>Update</button>
            <h1> Username </h1>
            <input onChange= {(event)=>this.updateUsername(event.target.value)} placeholder={this.props.user.username}/>
            <div> Profile Photo </div>
            <input type="file" name="file" id="file" className="inputfile" onChange={(event)=>this.handleImageUpload(event.target.files)} placeholder={this.props.user.picture}/>
                      <br/>
                      <img src ={this.state.picture}/>
                      <br/>
                      <div> Email </div>
                      <br/>
                      <input onChange={(event)=>this.updateEmail(event.target.value)} placeholder={this.props.user.email}/>
                      <br/>
                      <h1> First Name </h1>
                      <input onChange={(event)=>this.updateFirstName(event.target.value)} placeholder={this.props.user.firstname}/>
                      <br/>
                      <h1> Last Name</h1>
                      <input onChange={(event)=>this.updateLastName(event.target.value)} placeholder={this.props.user.lastname}/>
                      <br/>
                      <h1> City </h1>
                      <input onChange={(event)=>this.updateCity(event.target.value)} placeholder={this.props.user.city}/>
                      <br/>
                      <h1> State </h1>
                      <select
                    value={this.state.state}
                    onChange={(event) => this.updateState(event.target.value)} placeholder= {this.props.user.state}
                    >
                      <option value='State'>State</option>
                        <option value='Alabama'>Alabama</option>
                        <option value='Alaska'>Alaska</option>
                        <option value='Arizona'>Arizona</option>
                        <option value='Arkansas'>Arkansas</option>
                        <option value='California'>California</option>
                        <option value='Colorado'>Colorado</option>
                        <option value='Connecticut'>Connecticut</option>
                        <option value='Delaware'>Delaware</option>
                        <option value='District Of Columbia'>District Of Columbia</option>
                        <option value='Florida'>Florida</option>
                        <option value='Georgia'>Georgia</option>
                        <option value='Hawaii'>Hawaii</option>
                        <option value='Idaho'>Idaho</option>
                        <option value='Illinois'>Illinois</option>
                        <option value='Indiana'>Indiana</option>
                        <option value='Iowa'>Iowa</option>
                        <option value='Kansas'>Kansas</option>
                        <option value='Kentucky'>Kentucky</option>
                        <option value='Louisiana'>Louisiana</option>
                        <option value='Maine'>Maine</option>
                        <option value='Maryland'>Maryland</option>
                        <option value='Massachusetts'>Massachusetts</option>
                        <option value='Michigan'>Michigan</option>
                        <option value='Minnesota'>Minnesota</option>
                        <option value='Mississippi'>Mississippi</option>
                        <option value='Missouri'>Missouri</option>
                        <option value='Montana'>Montana</option>
                        <option value='Nebraska'>Nebraska</option>
                        <option value='Nevada'>Nevada</option>
                        <option value='New Hampshire'>New Hampshire</option>
                        <option value='New Jersey'>New Jersey</option>
                        <option value='New Mexico'>New Mexico</option>
                        <option value='New York'>New York</option>
                        <option value='North Carolina'>North Carolina</option>
                        <option value='North Dakota'>North Dakota</option>
                        <option value='Ohio'>Ohio</option>
                        <option value='Oklahoma'>Oklahoma</option>
                        <option value='Oregon'>Oregon</option>
                        <option value='Pennsylvania'>Pennsylvania</option>
                        <option value='Rhode Island'>Rhode Island</option>
                        <option value='South Carolina'>South Carolina</option>
                        <option value='South Dakota'>South Dakota</option>
                        <option value='Tennessee'>Tennessee</option>
                        <option value='Texas'>Texas</option>
                        <option value='Utah'>Utah</option>
                        <option value='Vermont'>Vermont</option>
                        <option value='Virginia'>Virginia</option>
                        <option value='Washington'>Washington</option>
                        <option value='West Virginia'>West Virginia</option>
                        <option value='Wisconsin'>Wisconsin</option>
                        <option value='Wyoming'>Wyoming</option>
                    </select>
                    <h1> Bio </h1>
                      <textarea onChange={(event)=>this.updateBio(event.target.value)} placeholder={this.props.user.bio}/>
                      <br/>
                      <h1> Adventures </h1>
                      <input onChange={(event)=>this.updateComments(event.target.value)} placeholder={this.props.user.adventures}/>
                      <br/>
                      {/* <h1> Adventure Completed</h1>
                      <input onChange={(event)=>this.updateAdventuresCompleted(event.target.value)} placeholder={this.props.user.adventures_completed}/>
                      <br/>
                      <h1> Adventure Goals</h1>
                      <input onChange={(event)=>this.updateAdventureGoals(event.target.value)} placeholder={this.props.user.adventure_goals}/> */}
                      <br/>
                      <br/>
                      <h1> Comments</h1>
                      <input onChange={(event)=>this.updateAdventures(event.target.value)} placeholder={this.props.user.comments}/>
                      <br/>
            
        </div>
        );
    }
}
EditProfile.propTypes = {
  user: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return state
    }
    
    const mapDispatchToProps = { 
      updateEmail, updateUsername, updateBio , updateUsername, updateEmail, updateBio, updateFirstName, updateLastName, updateCity, updateState, updateAdventuresCompleted, updateAdventureGoals, updateAdventures, updateComments
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)

