const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PICTURE = 'UPDATE_PICTURE';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_BIO = 'UPDATE_BIO';
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ADVENTUREGOALS = 'UPDATE_ADVENTUREGOALS';
const UPDATE_ADVENTURES = 'UPDATE_ADVENTURES';
const UPDATE_ADVENTURESCOMPLETED = 'UPDATE_ADVENTURESCOMPLETED'
const UPDATE_COMMENTS = 'UPDATE_COMMENTS'

const initialState = {
  user: null,
};

export default function reducer (state = initialState, action) {
   
  switch (action.type) {
    case LOGIN:
      return { ...state, user: {...action.payload, adventure_goals: [], adventures_completed:[]}  };
    case LOGOUT:
      return { ...state, user: null };
    case UPDATE_EMAIL:
      return { ...state, user: { ...state.user, email: action.payload } };
    case UPDATE_PICTURE: 
      return {...state, user: { ...state.user, picture: action.payload} };
    case UPDATE_USERNAME: 
      return {...state, user: { ...state.user, username: action.payload} };
    case UPDATE_BIO:
      return{...state, user: {...state.user, bio: action.payload} };
    case UPDATE_FIRSTNAME:
      return{...state, user: {...state.user, firstName: action.payload} };
      case UPDATE_LASTNAME:
      return{...state, user: {...state.user, lastName: action.payload} };
    case UPDATE_CITY:
      return{...state, user: {...state.user, city: action.payload} };
    case UPDATE_STATE:
      return{...state, user: {...state.user, state: action.payload} };
    case UPDATE_ADVENTUREGOALS:
      return{...state, user: {...state.user, adventure_goals: action.payload} };
    case UPDATE_ADVENTURESCOMPLETED:
      return{...state, user: {...state.user, adventures_completed: action.payload} };
    case UPDATE_ADVENTURES:
      return{...state, user: {...state.user, adventures: action.payload} };
    case UPDATE_COMMENTS:
      return{...state, user: {...state.user, comments: action.payload} };
    default:
      return state;
  }
};

export function loginUser(user) {
  return {
    type: LOGIN,
    payload: user,
  };
};

export function logoutUser() {
  return {
    type: LOGOUT,
  };
};

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
}

export function updatePicture(picture){
  return {
    type: UPDATE_PICTURE,
    payload: picture,
  };
}

export function updateUsername(username){
  return {
    type: UPDATE_USERNAME,
    payload: username,
  };
}

export function updateBio(bio){
  return {
    type: UPDATE_BIO,
    payload: bio,
  };
}

export function updateFirstName(firstName){
    return {
      type: UPDATE_FIRSTNAME,
      payload: firstName,
    };
}

export function updateLastName(lastName){
        return {
          type: UPDATE_LASTNAME,
          payload: lastName,
        };
    }

export function updateCity(city){
        return {
          type: UPDATE_CITY,
          payload: city,
        };
    }

 export function updateState(state){
        return {
          type: UPDATE_STATE,
          payload: state,
        };
    }

export function updateAdventureGoals(adventureGoals){
        return {
          type: UPDATE_ADVENTUREGOALS,
          payload: adventureGoals,
        };
    }

export function updateAdventuresCompleted(adventuresCompleted){
        return {
          type: UPDATE_ADVENTURESCOMPLETED,
          payload: adventuresCompleted,
        };
    }

export function updateAdventures(adventures){
        return {
          type: UPDATE_ADVENTURES,
          payload: adventures,
        };
    }

export function updateComments (comments){
        return {
          type: UPDATE_COMMENTS,
          payload: comments,
        };
    }
     