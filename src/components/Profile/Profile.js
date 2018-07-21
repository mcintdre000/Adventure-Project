import React, { Component } from 'react';
import './Profile.css';
import axios from 'axios';
import { Button } from 'antd';
import 'antd/lib/button/style/index.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../ducks/reducer';
import LoadingScreen from 'react-loading-screen';

class Profile extends Component {
    constructor( props ){
        super( props );

        this.state = {
            profile: [],
            todo: [],
            loading:true
        }
    }

    componentDidMount(){

    const {loginUser} = this.props;
    this.userInfo()
    setTimeout(() => 
        this.setState({
            loading:false})
    , 3000);

        // axios.get('/api/user').then(response =>{
        //     console.log(response)
        //     this.setState({
        //         profile: response.data.getUserProfile[0]

        //     }); if (response.data) {
        //         this.props.loginUser(response.data.getUserProfile[0]);
        //     } else { this.props.history.push("/"),alert('Please Login to create a profile.')}
        // })
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
        // if()
        axios.get( '/api/user' ).then( response =>{
            this.setState({
                profile: response.data.getUserProfile[0]
            }); if ( response.data ) {
                this.props.loginUser( response.data.getUserProfile[0] );
              } else { this.props.location.history.push( "/" ),alert( 'Please Login to create a profile.' )}
        })
    }

    logout() {
        const { logoutUser } = this.props;
        axios.post('/api/logout').then(response => {
          logoutUser();
        window.location = '/';
        });
      }
    
    render() {
        const { profile } = this.state;
        const { loading } = this.state
        let displayAdventuresExplored;
        if( this.state.profile.adventures_completed ){displayAdventuresExplored = this.state.profile.adventures_completed.map( e => {
            return (
            <div>
                <p>{ e.name }</p>
                <img src={ e.picture } />
            </div>
            )
        })}
        let displayAdventureGoals;
        if( this.state.profile.adventure_goals ){ displayAdventureGoals = this.state.profile.adventure_goals.map( e => {
            return (
                <div>
                    <p>{ e.name }</p>
                    <img src={ e.picture } />
                </div>
            )
        })}
        
            
            return (
            <div className= "profile" style = {{ paddingTop: "80px" }}> 
                <LoadingScreen
        loading={ loading }
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc='https://media.tenor.com/images/498fd9bb2ad52a58dd03f242d1febabf/tenor.gif'
        text='Live for Hiking'
      >         <div style ={{ paddingTop: '80px' }}>
                { profile && <div>
                <h1>{ profile.username}</h1>
                <h1>{ profile.email}</h1>
                <h1> { profile.firstname}{" "}{ profile.lastname}</h1>
                { profile.picture === null ? <img src= "https://qph.fs.quoracdn.net/main-qimg-87001d2ce810c2f48c97032cbc905939" height="100px" width="100px"/>
                : <img src ={ profile.picture } className ="photo" height="100px" width="100px"/>}
                <p> { profile.bio } </p>
                <p> { profile.city }{ "," }{ profile.state }</p>
                { displayAdventuresExplored }
                { displayAdventureGoals }
                <p> { profile.adventures }</p>
                <p> { profile.comments }</p>
                <div className = "movebutton1">
                     <button className ="buttons"> <Link to="/edit">Edit profile</Link> </button>
                     
                </div>
                </div>
                
            }
            </div>
             </LoadingScreen>
            </div>
        );
    }
}
    
function mapStateToProps( state ) {
    return {
      user : state.user,
    };
  }
  const mapDispatchToProps = {
    loginUser,
    logoutUser,
  };
  
  export default connect( mapStateToProps, mapDispatchToProps )( Profile );
  
  


