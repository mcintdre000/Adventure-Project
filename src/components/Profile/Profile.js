import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../ducks/reducer';


class Profile extends Component {
    constructor(){
        super()
        this.state ={
            profile: [],
            todo: []
        }
    }
    componentDidMount(){

    // const {loginUser} = this.props;
    // console.log('login user======',loginUser)
            this.userInfo()

        axios.get('/api/user').then(response =>{
            console.log(response)
            this.setState({
                profile: response.data.getUserProfile[0]

            }); if (response.data) {
                this.props.loginUser(response.data.getUserProfile[0]);
            } else { this.props.history.push("/"),alert('Please Login to create a profile.')}
        })
    //    let storedData = localStorage.getItem('user');
    // //    console.log('storedData', storedData, 'this.state.todo', this.state.todo)
    //         if(storedData){
    //             let convertedJSON = JSON.parse(storedData);
    //             this.setState({
    //                 todo: convertedJSON
    //             })
    // } 
}

    userInfo(){
        axios.get('/api/user').then(response =>{
            // console.log(response)
            this.setState({
                profile: response.data.getUserProfile[0]
            }); if (response.data) {
                this.props.loginUser(response.data.getUserProfile[0]);
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
        console.log('this.state.todo======================', this.state.todo)
        const { profile } = this.state;
        const { user } = this.props;
        // console.log(profile)
        // let profileInfo  = this.state.profile( e => {
        //     console.log(e);
        //     return(
        //         <div>
        //            <h1> {e.username}</h1>
        //         </div>
        //     )
        // })
        let displayAdventure;
        if( !this.state.profile.length === 0 ){displayAdventure = this.state.profile.map( e => {
            if(e.adventures_completed){
            return (<p>e.adventures_completed</p>)}
        })}
        return (
            <div className= "profile" style = {{paddingTop: "80px"}}> 

                {profile && <div>
                <h1>{profile.username}</h1>
                <h1>{profile.email}</h1>
                <h1> {profile.firstname}{" "}{profile.lastname}</h1>
                {profile.picture === null ? <img src= "https://qph.fs.quoracdn.net/main-qimg-87001d2ce810c2f48c97032cbc905939" height="100px" width="100px"/>
                : <img src ={profile.picture} className ="photo" height="100px" width="100px"/>}
                <p> {profile.bio} </p>
                <p> {profile.city}{","}{profile.state}</p>
                <p> {displayAdventure}</p>
                {/* <p> {profile.adventure_goals}</p> */}
                <p> {profile.adventures}</p>
                <p> {profile.comments}</p>
                <div className = "movebutton1">
                     <button className ="buttons"> <Link to="/edit">Edit profile</Link> </button>
                     <button className="buttons" onClick={() => this.logout()}>Log out</button>
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
  
  


