
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as LoginActions from '../redux/modules/LoginRedux.js';
import LoginView from '../views/LoginView.js';

function mapStateToProps(state) {
  const { Login } = state;
  return {
    Login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);