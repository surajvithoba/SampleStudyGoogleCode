
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Login from './modules/LoginRedux.js';
import DashBoard from './modules/DashboardRedux.js';
import NewBusiness Rule from './modules/NewBusiness RuleRedux.js';
import ForgotPassword from './modules/ForgotPasswordRedux.js';
import ForgotPasswordSucess from './modules/ForgotPasswordSucessRedux.js';

export default combineReducers({
  Login,
  DashBoard,
  NewBusiness Rule,
  ForgotPassword,
  ForgotPasswordSucess,
  routing: routerReducer
});
