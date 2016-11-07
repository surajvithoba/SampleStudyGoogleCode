import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router'
import Login from '../containers/Login.js';
import Dashboard from '../containers/Dashboard.js';
import NewBusiness Rule from '../containers/NewBusiness Rule.js';
import ForgotPassword from '../containers/ForgotPassword.js';
import ForgotPasswordSucess from '../containers/ForgotPasswordSucess.js';
export default (
	<Router>
		<Route path="/" component={Login}/>
	    <Route path="dashboard" component={Dashboard}/>
        <Route path="newbusiness rule" component={NewBusinessRule}/>
        <Route path="forgotpassword" component={ForgotPassword}/>
        <Route path="fgtpaswdsucess" component={ForgotPasswordSucess}/>
    </Router>
);
