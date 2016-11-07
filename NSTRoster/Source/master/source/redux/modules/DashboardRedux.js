import { ACTION_TYPES, APIS } from '../../constants';
import { postData, fetchData } from '../../utils';

const {
  DASH_TOGGLE,
  DASH_BOARD,
  DEFAULT_VALUE
} = ACTION_TYPES;

export function DashRightToggle() {
  return {
    type: DASH_TOGGLE
  };
}
  
export function getDashBoard() {
  return (dispatch) => {
    fetchData(APIS.DASH_BOARD)
    .then(data => {
      dispatch({
        type: DASH_BOARD,
        payload: data
      });
    });
  };
}

export function postSearch(data) {
  return (dispatch) => {
    postData(APIS.POST_SEARCH, data)
    .then(data => {
      dispatch({
        type: DASH_BOARD,
        payload: data
      });
    });
  };
}

const initialState = {
    dashRight: false
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

    case DASH_BOARD: 
    return {...state, dashData: payload.dash_board }

    case DASH_TOGGLE:
    return { ...state, dashRight: !state.dashRight };
      
    case DEFAULT_VALUE:
    return {...state, dashRight: false }

    default:
  }

  return state;
}
