import { ACTION_TYPES } from '../../constants';

const {
  EMPTY_FIRST_NAME_ERROR,
  EMPTY_SECOND_NAME_ERROR,
  PHONE_ERROR,
  EMPTY_GENDER_ERROR,
  DAY_ERROR,
  MONTH_ERROR,
  YEAR_ERROR,
  MARITAL_ERROR,
  EMAIL_ERROR,
  EMPTY_EMAIL_ERROR,
  DAY_CHANGE,
  MONTH_CHANGE,  
  DEFAULT_VALUE,
  YEAR_CHANGE,
  EMAIL_CHANGE,
  MARITAL_CHANGE,
  GENDER_CHANGE,
  SECOND_NAME_CHANGE,
  FIRST_NAME_CHANGE,
  PHONE_CHANGE,
  SAVE_SUCCESS,
  DASH_TOGGLE
} = ACTION_TYPES;
  
export function emptyfirstNameError(status) {
  return {
    type: EMPTY_FIRST_NAME_ERROR,
    payload: { status }
  };
}

export function DashRightToggle() {
  return {
    type: DASH_TOGGLE
  }
}
    
export function emptysecondNameError(status) {
  return {
    type: EMPTY_SECOND_NAME_ERROR,
    payload: { status }
  };
}

export function phoneError(status) {
  return {
    type: PHONE_ERROR,
    payload: { status }
  };
}

export function emptygenderError(status) {
  return {
    type: EMPTY_GENDER_ERROR,
    payload: { status }
  };
}
  
export function dayError(status) {
  return {
    type: DAY_ERROR,
    payload: { status }
  };
}

export function monthError(status) {
  return {
    type: MONTH_ERROR,
    payload: { status }
  };
}

export function yearError(status) {
  return {
    type: YEAR_ERROR,
    payload: { status }
  };
}

export function maritalError(status) {
  return {
    type: MARITAL_ERROR,
    payload: { status }
  };
}

export function emailError(status) {
  return {
    type: EMAIL_ERROR,
    payload: { status }
  };
}

export function emptyEmailError(status) {
  return {
    type: EMPTY_EMAIL_ERROR,
    payload: { status }
  };
}
 
export function firstNameChange(change) {
  return {
   type: FIRST_NAME_CHANGE,
   payload: { change }
  };
}

export function secondNameChange(change) {
  return {
     type: SECOND_NAME_CHANGE,
     payload: { change }
  };
}


export function genderChange(change) {
  return {
     type: GENDER_CHANGE,
     payload: { change }
  };
}
  
export function maritalChange(change) {
  return {
     type: MARITAL_CHANGE,
     payload: { change }
  };
}
  
export function emailChange(change) {
  return {
     type: EMAIL_CHANGE,
     payload: { change }
  };
}

export function yearChange(change) {
  return {
     type: YEAR_CHANGE,
     payload: { change }
  };
}

export function monthChange(change) {
  return {
     type: MONTH_CHANGE,
     payload: { change }
  };
}

export function saveSuccess() {
  return {type: SAVE_SUCCESS }
}

export function phoneChange(change) {
  return {
     type: PHONE_CHANGE,
     payload: { change }
  };
}

export function dayChange(change) {
  return {
     type: DAY_CHANGE,
     payload: { change }
  };
}

const initialState = {
   firstName:'',
   secondName: '',
   phone: '',
   gender: '',
   marital: '',
   email: '',
   year:'',
   month: '',
   day: '',
   firstNameError: false,
   secondNameError: false,
   emptyError: false,
   emptyfirstNameError: false,
   emptysecondNameError: false,
   phoneError: false,
   emptygenderError: false,
   emptymaritalError: false,
   emptyEmailError: false,
   dayError: false,
   monthError: false,
   yearError: false,
   genderError: false,
   maritalError:false,
   emailError: false,
   dashRight:false,
   auth: localStorage.getItem('islogin')
};

export function setDefaultValue() {
  return {
    type: DEFAULT_VALUE,
    payload: initialState
  };
}
  
export default function(state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    
      case EMPTY_FIRST_NAME_ERROR:
        return { ...state, emptyfirstNameError: payload.status };

      case EMPTY_SECOND_NAME_ERROR:
        return { ...state, emptysecondNameError: payload.status };

      case PHONE_ERROR:
        return { ...state, phoneError: payload.status};    

      case EMPTY_GENDER_ERROR:     
        return { ...state, emptygenderError: payload.status};

      case DAY_ERROR:     
        return { ...state ,dayError: payload.status};

      case SAVE_SUCCESS: 
        return {...state, firstName:'',secondName:'',phone:'',gender:'',marital:'',email:'',year:'',month:'',day:'',
             firstNameError: false,secondNameError: false, emptyError:false, emptyfirstNameError: false, 
             emptysecondNameError: false,phoneError: false,emptygenderError: false,emptymaritalError: false,
             emailError : false,emptyEmailError: false,dayError: false
        };
      
      case DEFAULT_VALUE:
        return {...state, firstName:'', secondName: '', phone: '', gender: '',  marital: '', email: '', year:'', month: '', day: '', firstNameError: false, secondNameError: false, emptyError: false, emptyfirstNameError: false, emptysecondNameError: false, emptygenderError: false,
       emptymaritalError: false, emptyEmailError: false, dayError: false, monthError: false, yearError: false,
       phoneError:false, genderError: false, maritalError:false, emailError: false, dashRight:false}

      case MONTH_ERROR:
        return { ...state ,monthError: payload.status};

      case YEAR_ERROR:
        return { ...state ,yearError: payload.status};

      case MARITAL_ERROR:
        return { ...state , maritalError: payload.status};

      case EMAIL_ERROR:
        return { ...state ,emailError: payload.status};  

      case EMPTY_EMAIL_ERROR:
        return { ...state ,emptyEmailError: payload.status};

      case DAY_CHANGE:
        return {...state, day: payload.change}

      case MONTH_CHANGE:
        return {...state, month: payload.change}

      case PHONE_CHANGE:
        return {...state, phone: payload.change}

      case YEAR_CHANGE:
        return {...state, year: payload.change}

      case EMAIL_CHANGE:
        return {...state, email: payload.change}

      case MARITAL_CHANGE:
        return {...state, marital: payload.change}

      case GENDER_CHANGE:
        return {...state, gender: payload.change}

      case SECOND_NAME_CHANGE:
        return {...state, secondName: payload.change}
        
      case DASH_TOGGLE:
        return{...state,dashRight: !state.dashRight}

      case FIRST_NAME_CHANGE:
        return {...state, firstName: payload.change}
  
  default:
  }

  return state;
}
