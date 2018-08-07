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

    this.userInfo()
    setTimeout(() => 
        this.setState({
            loading:false})
    , 3000);
    }
           
   
    
  
    

    userInfo(){
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
        if( this.state.profile.adventures_completed ){displayAdventuresExplored = this.state.profile.adventures_completed.map( ( e, i ) => {
            return (
            <Link to={{ pathname: `/adventure/${ e.name }`, state: { adventure: e } }} key= { i }>
                <p>{ e.name }</p>
                <img className='todo-images' src={ e.picture } />
            </Link>
            )
        })}
        let displayAdventureGoals;
        if( this.state.profile.adventure_goals ){ displayAdventureGoals = this.state.profile.adventure_goals.map( ( e, i ) => {
            return (
                <Link to={{ pathname: `/adventure/${ e.name }`, state: { adventure: e } }} key= { i }>
                    <p>{ e.name }</p>
                    <img className='todo-images' src={ e.picture } />
                </Link>
            )
        })}
        
            
            return (
            <div> 
                <LoadingScreen
        loading={ loading }
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc='https://media.tenor.com/images/498fd9bb2ad52a58dd03f242d1febabf/tenor.gif'
        text='Live for Hiking'
      >         <div className= 'profile-container' style ={{ paddingTop: '80px' }}>
                    { profile && <div className= 'profile-container-content'>
                    { profile.picture === null ? <img className ="photo" src= "https://qph.fs.quoracdn.net/main-qimg-87001d2ce810c2f48c97032cbc905939" height="100px" width="100px"/>
                    : <img src ={ profile.picture } className ="photo" />}
                    <div className='profile-info'>
                        <h1> { profile.firstname}{" "}{ profile.lastname}</h1>
                        <p> { profile.city }{ ", " }{ profile.state }</p>
                        <p className='tally' > Adventures Explored: { profile.adventures_completed ? profile.adventures_completed.length : '0' }</p>
                        <p className='bio' > { profile.bio } </p>
                        <div className = "movebutton1">
                            <Button type="primary"><Link to="/edit"> Edit Profile </Link></Button>
                        </div>
                        <div className='dropdown'>
                            <h1> Adventure Goals </h1>
                            <div className='div-goal'>{ displayAdventureGoals }</div>
                        </div>
                        <div className='dropdown'>
                        <h1> Adventures Explored </h1>
                            <div>{ displayAdventuresExplored }</div>
                        </div>
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
  
  


