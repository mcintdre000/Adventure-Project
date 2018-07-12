// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PICTURE = 'UPDATE_PICTURE';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_BIO = 'UPDATE_BIO';


const initialState = {
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case LOGIN:
    //   return { ...state, user: action.payload };
    // case LOGOUT:
    //   return { ...state, user: null };
    case UPDATE_EMAIL:
      return { ...state, user: { ...state.user, email: action.payload } };
    case UPDATE_PICTURE: 
      return {...state, user: { ...state.user, picture: action.payload} };
    case UPDATE_USERNAME: 
      return {...state, user: { ...state.user, username: action.payload} };
    case UPDATE_BIO:
      return{...state, user: {...state.user, bio: action.payload} };
    default:
      return state;
  }
};

// export function loginUser(user) {
//   console.log(user)
//   return {
//     type: LOGIN,
//     payload: user,
//   };
// };

// export function logoutUser() {
//   return {
//     type: LOGOUT,
//   };
// };

export function updateEmail(email) {
  console.log('reducer',email)
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
}

export function updatePicture(picture){
  console.log('reducer',picture)
  return {
    type: UPDATE_PICTURE,
    payload: picture,
  };
}

export function updateUsername(username){
  console.log('reducer', username)
  return {
    type: UPDATE_USERNAME,
    payload: username,
  };
}

export function updateBio(bio){
  console.log('reducer', bio)
  return {
    type: UPDATE_BIO,
    payload: bio,
  };
}