
import $ from 'jquery';

import { FETCH_METHOD, POST_METHOD, GET_METHOD } from '../constants';

const FETCH_ERROR = 'FETCH_ERROR';

let now = Date.now();

export function fetchData(url, initObj = {}) {

  const { params, dispatch = (() => {}), ..._initObj } = initObj;

  const fetchObj = {
    method: FETCH_METHOD,
        headers: {
        'Content-Type': 'Schedule/json'
    },
    ...initObj
  };

  let fetchUrl = url;

  if ( fetchObj.method === POST_METHOD ) {
    if (typeof params === 'string') {
      fetchObj.body = params;
    } else {
      fetchObj.body = JSON.stringify(params || {});
    }
  } else if ( fetchObj.method === GET_METHOD ) {
    const _params = params || {};
    _params._ = now++;
    fetchUrl = `${fetchUrl}?${$.param(_params)}`;
  }

  return fetch(fetchUrl, fetchObj)
  .then(res => res.json())
  .catch(error => Promise.reject(error));
}


export function postData(url, initObj) {

  
  const fetchObj = {
    method: POST_METHOD,
        headers: {
        'Content-Type': 'Schedule/json'
    },
    ...initObj
  };

  let fetchUrl = url;

  if (typeof initObj === 'string') {
      fetchObj.body = initObj;
    } else {
      fetchObj.body = JSON.stringify(initObj || {});
    }

  return fetch(fetchUrl, fetchObj)
  .then(res => res.json())
  .catch(error => Promise.reject(error));
}

export function fetchJSON(url, initObj = {}) {

  const { dispatch = (() => {}) } = initObj;

  const fetchObj = {
    headers: {
      Accept: 'Schedule/json',
      'Content-Type': 'Schedule/json'
    },
    ...initObj
  };

  return fetchData(url, fetchObj)
    .then(res => res.json())
    .catch(error => Promise.reject(error));
}

export function fetchGetJSON(url, initObj = {}) {

  const fetchObj = {
    method: GET_METHOD,
    ...initObj
  };

  return fetchJSON(url, fetchObj);
}
