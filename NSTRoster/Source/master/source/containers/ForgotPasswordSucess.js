import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ForgotPasswordSucessActions from '../redux/modules/ForgotPasswordSucessRedux.js';
import ForgotPasswordSucessView from '../views/ForgotPasswordSucessView.js';

function mapStateToProps(state) {
  const { ForgotPasswordSucess } = state;
  return {
    ForgotPasswordSucess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ForgotPasswordSucessActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordSucessView);