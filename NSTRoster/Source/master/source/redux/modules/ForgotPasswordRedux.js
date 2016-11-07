import { ACTION_TYPES } from '../../constants';

const {
  CHECK_EMAIL,
  EMAIL_EMPTY,
  EMAIL_CHANGE,
  DEFAULT_VALUE
} = ACTION_TYPES;

export function checkEmailAddress() {
  return {
    type: CHECK_EMAIL    
  };
}
 
export function checkEmailEmpty() {
  return {
   type: EMAIL_EMPTY
  };
}
 
export function emailChange(value) {
  return {
    type: EMAIL_CHANGE,
    payload: value
  }
}

const initialState = {
    emptyEmail: false,
    emailError: false,
    emailId: ''
};

export function setDefaultValue() {
  return {
    type: DEFAULT_VALUE,
    payload: initialState
  };
}
export default function(state = initialState, action) {

  const { type, payload} = action;

  switch (type) {

    case CHECK_EMAIL:
    return { ...state, emptyEmail:false, emailError:true};
    
    case EMAIL_EMPTY:
    return { ...state, emailError:false, emptyEmail:true}
    
    case EMAIL_CHANGE:
    return { ...state, emailId: payload}
    
    case DEFAULT_VALUE:
    return {...state, emptyEmail: false,  emailError: false,  emailId: ''}
    
    default:
  }

  return state;
}
