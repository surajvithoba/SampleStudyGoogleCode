
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as DashBoardActions from '../redux/modules/DashboardRedux.js';
import DashBoardView from '../views/DashBoardView.js';

function mapStateToProps(state) {
  const { DashBoard  } = state;
  
  return {
    DashBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DashBoardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardView);