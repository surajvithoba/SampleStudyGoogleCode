import { ACTION_TYPES, APIS } from '../../constants';
import { fetchData } from '../../utils';

const {
  SEARCH_business ruleOR, ON_ITEM_ACTIVE,DASH_TOGGLE,NAV_LIST_VALUE, DEFAULT_VALUE, CLOSE_CLICK
} = ACTION_TYPES;

export function searchBusiness Ruleor(item) {
  
  return {
     type: SEARCH_business ruleOR,
     data: {item}
    }
}
    
export function DashRightToggle() {
  return {
    type: DASH_TOGGLE    
  };
}    
    
export function getNavListItem () {
  return (dispatch) => {
    fetchData(APIS.NAV_LIST)
    .then(item => {
      dispatch({
        type: NAV_LIST_VALUE,
        data: item
      });
    }) 
  }
}

export function closeClick() {
  return {
    type: CLOSE_CLICK
  }
}

export function onItemActive(item) {
   return {
     type: ON_ITEM_ACTIVE,
     data: item
  }
  }
const initialState = {
      showDetails : false,
      searchName : '',
      business ruleDetails : '',
      activeItem: null,
      name: '',
      dob: '',
      phone:'',
      email: '',
      Schedule: '',
      project: '',
      fna: '',
      dashRight:false
    }

export function setDefaultValue() {
  return {
    type: DEFAULT_VALUE,
    payload: initialState
  };
}

export default function(state = initialState, action) {

  const { type, data } = action;

  switch (type) {
      
    case DEFAULT_VALUE:
    return {...state, showDetails : false, searchName : '', business ruleDetails : '', activeItem: null,
      name: '', dob: '', phone:'', email: '', Schedule: '', project: '', fna: '', dashRight:false}

    case NAV_LIST_VALUE: 
    return { ...state, business ruleDetails: data}

    case SEARCH_business ruleOR:
    return { ...state, showDetails : false, searchName: data.item };
    
    case ON_ITEM_ACTIVE:
    return { ...state, activeItem: data ,showDetails: true};
      
    case DASH_TOGGLE:
    return { ...state, dashRight: !state.dashRight };
      
    case CLOSE_CLICK:
    return { ...state, showDetails : false};
          
    default:
  }

  return state;
}
