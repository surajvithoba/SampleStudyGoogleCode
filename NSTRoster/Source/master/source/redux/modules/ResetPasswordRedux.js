import { ACTION_TYPES } from '../../constants';

const {
  CHECK_MATCHING,
  NEWPSWD_EMPTY,
  CONFIRMPSWD_EMPTY,
  NEWPSWD_CHANGE,
  CONFIRMPSWD_CHANGE,
  NEXTPAGE,
  NEWCONFIRM_EMPTY,
  DEFAULT_VALUE
} = ACTION_TYPES;
  
export function checkMatching() {
  return {
    type: CHECK_MATCHING    
  };
}
 
export function checkNewPswdEmpty() {
  return {
   type: NEWPSWD_EMPTY
  };
}
 
export function checkConfirmPswdEmpty() {
  return {
   type: CONFIRMPSWD_EMPTY
  };
}

export function newPswdChange(value) {
  return {
    type: NEWPSWD_CHANGE,
    payload: value
  }
}
 
export function confirmPswdChange(value) {
  return {
    type: CONFIRMPSWD_CHANGE,
    payload: value
  }
}
 
export function nextPage(value) {
  return {
    type: NEXTPAGE,
    payload: value
  }
}

export function newConfirmEmpty() {
  return {
    type: NEWCONFIRM_EMPTY
  }
}

const initialState = {
    emptyNewPswd: false,
    emptyConfirmPswd: false,
    pswdMatching: false,
    newPswd: '',
    confirmPswd: ''
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
      
    case DEFAULT_VALUE:
    return {...state, emptyNewPswd: false, emptyConfirmPswd: false, pswdMatching: false, newPswd: '', confirmPswd: ''}

    case CHECK_MATCHING:
    return { ...state, emptyNewPswd:false, emptyConfirmPswd:false, pswdMatching: true};
    
    case NEWPSWD_EMPTY:
    return { ...state, emptyNewPswd:true, emptyConfirmPswd:false, pswdMatching: false};
    
    case CONFIRMPSWD_EMPTY:
    return { ...state, emptyNewPswd:false, emptyConfirmPswd:true, pswdMatching: false};
      
    case NEWCONFIRM_EMPTY:
    return { ...state, emptyNewPswd:true, emptyConfirmPswd:true, pswdMatching: false};
    
    case NEWPSWD_CHANGE:
    return { ...state, newPswd: payload}
    
    case CONFIRMPSWD_CHANGE:
    return { ...state, confirmPswd: payload}
    
    case NEXTPAGE:
    return { ...state, emptyNewPswd:false, emptyConfirmPswd:false, pswdMatching: false};
    
    default:
  }

  return state;
}
