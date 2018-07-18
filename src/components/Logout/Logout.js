// import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { loginUser, logoutUser } from '../../ducks/reducer';
 

// class Logout extends Component {

//     logout() {
//         const { logoutUser, history } = this.props;
//         axios.post('/api/logout').then(response => {
//           logoutUser();
//           history.push('/')
//           // window.location.reload()
//           ;
//         });
//       }
//     render() {
       
//         return (
//             <button className="buttons" onClick={() => this.logout()}>Log out</button>
//         );
//     }
// }
// function mapStateToProps(state) {
//     return {
//       user : state.user,
//     };
//   }
//   const mapDispatchToProps = {
//     loginUser,
//     logoutUser,
//   };
  
//   export default connect(mapStateToProps, mapDispatchToProps)(Logout);

