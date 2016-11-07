import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import $ from 'jquery';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  dashNav () {
     if (localStorage.getItem('islogin')==="1") {
         hashHistory.push('/dashboard');
     }else{
       hashHistory.push('/');
     }  
  }
  render() {
     return (
        <header className="header container_adj">
         <div onClick = {this.dashNav.bind(this)} className="logo pull-left" id="midlogo" name="midlogo">
             <img src= {require("../../img/logo.png")} alt="Google NetOps Logo" id="logimg"  name="logimg" />
         </div>  
         <div className="pull-right">
             <div className="pull-left header-ajt">
                {this.props.auth  === '1'?<span className="lastsync" id="head-last" name="head-last">Last sync 10:30</span> : null }
                {this.props.auth  === '1'?<span className="md-icon" id="head-referesh" name="head-referesh"><span className="refreshimg" /></span> : null }
                {this.props.auth  === '1'?<span className="md-icon" id="head-current" name="head-current"><span className="currencyimg" /></span> : null }
                {this.props.auth  === '1'?<span className="md-icon" id="head-translate" name="head-translate"><span className="translateimg" /></span> : null }
                {this.props.auth  === '1'?<span className="md-icon" id="head-notify" name="head-notify"><span className="notifyimg" />
                <ul className="Notification-count "><li><span>5</span></li></ul></span> : null }    
             </div>
             {this.props.auth  === '1'?
              <div className="pull-left userText">
              <div className="profile-img"><img src= {require('../../../source/img/img-p.jpg')} />
              </div>: null }
       </div>
        </header>        
     );
  }
}

export default Header;