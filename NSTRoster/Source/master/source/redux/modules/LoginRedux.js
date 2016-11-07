import { ACTION_TYPES, APIS } from '../../constants';
import { fetchData } from '../../utils';

const {
  USER_NAME_EMPTY,
  USER_NAME_ERROR,
  EMPTY_PWD_ERROR,
  NAME_PWD_ERROR,
  AUTH_ERROR,
  LOGGED_IN,
  LOGIN_FAILED,
  DEFAULT_VALUE
} = ACTION_TYPES;

export function checkUser(obj) {
  return (dispatch) => {fetchData(APIS.DO_LOGIN, obj)
      .then(data => {
       if(data && data !== null){
		 if(!data.error){
            dispatch({
              type: LOGGED_IN,
              payload: data
            });
         } else if (data.error.code === 101){
            dispatch({
              type: LOGIN_FAILED,  payload: data
            });
         }
       }
       })
       .catch(error => { console.error('request failed', error); });
     };
}

export function userNameEmpty() {
  return {
    type: USER_NAME_EMPTY,
    payload: { }
  };
}

export function userNameError() {
  return {
    type: USER_NAME_ERROR
  };
}

export function emptyPwdError() {
  return {
    type: EMPTY_PWD_ERROR
  };
}

export function namePwdError() {
  return {
    type: NAME_PWD_ERROR
  };
}
export function authError() {
  return {
    type: AUTH_ERROR
  };
}

const initialState = {
    nameError: false,
    emptyError: false,
    namePwdError: false,
    emptyPwdError: false,
    authError: false,
    chkbox: false,
    loggedIn : false
};  

export function setDefaultValue() {
  return {
    type: DEFAULT_VALUE,
    payload: initialState
  };
}
  
export default function(state = initialState, action) {

  const { type } = action;

  switch (type) {
      
    case DEFAULT_VALUE:
    return {...state, nameError: false, emptyError: false, namePwdError: false, emptyPwdError: false, authError: false, chkbox: false, loggedIn : false}

    case USER_NAME_EMPTY:
      return { ...state, emptyError:true };

    case USER_NAME_ERROR:
      return { ...state, nameError:true,emptyError:false};

    case EMPTY_PWD_ERROR:
      return { ...state, emptyError:false,nameError:false,namePwdError:false,emptyPwdError:true};    

     case NAME_PWD_ERROR:     
      return { ...state, emptyError:false,nameError:false,namePwdError:true,emptyPwdError:false};

     case AUTH_ERROR:
      return { ...state ,emptyError:false,nameError:false,namePwdError:false,emptyPwdError:false,authError: true};
      
     case LOGGED_IN:
      return { ...state ,emptyError:false,nameError:false,namePwdError:false,emptyPwdError:false,authError: false, loggedIn : true};     
      
    case LOGIN_FAILED:
    return { ...state ,emptyError:false,nameError:false,namePwdError:false,emptyPwdError:false,authError: true,loggedIn : false};     

    default:
  }

  return state;
}
