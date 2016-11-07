import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ForgotPasswordActions from '../redux/modules/ForgotPasswordRedux.js';
import ForgotPasswordView from '../views/ForgotPasswordView.js';

function mapStateToProps(state) {
  const { ForgotPassword } = state;
  return {
    ForgotPassword
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ForgotPasswordActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordView);