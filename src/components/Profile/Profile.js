import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../ducks/reducer';


class Profile extends Component {
    constructor(){
        super()
        this.state ={
            profile: []
        }
    }
    componentDidMount(){
    const {loginUser} = this.props;
            this.userInfo()
       
    }

    userInfo(){
        axios.get('/api/user').then(response =>{
            console.log(response.data)
            this.setState({
                profile: response.data.getUserProfile
            }); if (response.data) {
                this.props.loginUser(response.data);
              } else { this.props.history.push("/"),alert('Please Login to create a profile.')}
        })
    }

    logout() {
        const { logoutUser, history } = this.props;
        axios.post('/api/logout').then(response => {
          logoutUser();
          history.push('/');
        });
      }
    
    render() {
        const { profile } = this.state;
        const { user } = this.props;
        console.log(profile[0])
        // let profileInfo  = this.state.profile( e => {
        //     console.log(e);
        //     return(
        //         <div>
        //            <h1> {e.username}</h1>
        //         </div>
        //     )
        // })
        return (
            <div style = {{paddingTop: "80px"}}> 

                {profile[0] && <div>
                <h1>{profile[0].username}</h1>
                <h1> {profile[0].firstName}{" "}{profile[0].lastName}</h1>
                {profile[0].picture === null ? <img src= "https://qph.fs.quoracdn.net/main-qimg-87001d2ce810c2f48c97032cbc905939" height="100px" width="100px"/>
                : <img src ={profile[0].picture} className ="photo" height="100px" width="100px"/>}
                <p> {profile[0].bio} </p>
                <p> {profile[0].city}{" "}{profile[0].state}</p>
                <p> {profile[0].adventures_completed}</p>
                <p> {profile[0].adventure_goals}</p>
                <p> {profile[0].adventures}</p>
                <p> {profile[0].comments}</p>
                <div className = "movebutton1">
                     <button className ="button"> <Link to="/edit">Edit profile</Link> </button>
                </div>
                </div>}
                
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      user : state.user,
    };
  }
  const mapDispatchToProps = {
    loginUser,
    logoutUser,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
  
  


