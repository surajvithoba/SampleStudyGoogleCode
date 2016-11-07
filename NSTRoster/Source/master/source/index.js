
import React from 'react';
import { render } from 'react-dom';
import hashHistory from 'react-router/lib/hashHistory';
import { syncHistoryWithStore } from 'react-router-redux';

import './styles/commonstyles.less';

import './utils/polyfill';
import Root from './containers/Root';
import configureStore from './redux/configureStore';
console.log('test');
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);
