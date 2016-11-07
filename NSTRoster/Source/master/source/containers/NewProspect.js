
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as NewBusiness RuleActions from '../redux/modules/NewBusiness RuleRedux.js';
import NewBusiness RuleView from '../views/NewBusiness RuleView.js';

function mapStateToProps(state) {
  const { NewBusiness Rule } = state;
  return {
    NewBusiness Rule
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NewBusiness RuleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBusiness RuleView);

