import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Header from '../components/Header/HeaderComponent.js';

class LoginForm extends React.Component {
    constructor(props) {
      localStorage.setItem("islogin", "0");
      super(props);
      var value = true;
      if (localStorage.getItem('UserName')) {
        value = true;
      }        
      this.state = {
        user: localStorage.getItem('UserName'),
        pwd: localStorage.getItem('Password'),
        chkbox : value,
        isIOS : navigator.platform.match(/(iPhone|iPod|iPad)/i)?true:false,
        auth: localStorage.getItem('islogin'),
        clickTouchid: false
      }
       this.props.actions.setDefaultValue();
    }

    rememberMe() {
      if (this.state.chkbox === true) {
        this.setState({chkbox:false});
      } else {
        this.setState({chkbox:true});
      }
    }

    touchIdOnclick(){
      if(this.state.clickTouchid===true) {
        this.setState({clickTouchid:false});
      } else {
        this.setState({clickTouchid:true});
      } 
    }

    formSubmit() {
      var user = this.state.user;
      if(this.state.user !== '') {
        user = this.state.user.trim();
      }      
      var password = this.state.pwd;
      
      if(user === null || user === '') {
        this.props.actions.userNameEmpty();
        document.getElementById("loginUserName").focus();
         } else {
            var namePat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(namePat.test(user) !== true) {
              document.getElementById("loginUserName").focus();
              this.props.actions.userNameError();
            } else {
              if(password === null || password === '') { 
                this.props.actions.emptyPwdError();
              }
            else {
            if(password.length < 6 || password.length > 9) {
            	this.props.actions.namePwdError();
            } else {
               if(user === 'demo@google.com' && password === 'netops'){
                 localStorage.setItem("islogin", "1");
                 if(this.state.chkbox){
                    localStorage.setItem("UserName", user);
                  }
                  else if(!this.state.chkbox){
                    localStorage.setItem("UserName", "");
                  }
                 hashHistory.push('/dashboard');
               } else { 
                 this.props.actions.authError();
               }
            }
          }
        } 
      }       
    }
  
    _onChangePwd(password) {
      this.setState({pwd: password.target.value});
    }
    
    _onChangeUser(username) {
      this.setState({user: username.target.value});
    }
    
    render() {
      var Login = this.props.Login;
      return(
          <div>
          <Header auth = {this.state.auth} />
         <div className="loginBG col-12">
          <div className=" col-6 no-float centerDiv pad-40  tran-bg">
       <div className="col-12">
            <div className="font25 txt-center marBot-30">  Sign in to your account</div>
               <div className="formcontainer">
              <label className="label-txt2">Email Address </label>
                <input type="text"  className="forminput ad-int"  value = {this.state.user} onChange = {this._onChangeUser.bind(this)} id="loginUserName" name="loginUserName"/>
                       {Login.emptyError ?<div className = "error"> Please Enter Email</div> : null}
                       {Login.nameError ?<div className = "error">  Please Enter Correct Email</div> : null}      
              </div>
              <div className="formcontainer">
              <label className="label-txt2">Password  </label>
              <input type="password" className="forminput ad-int" id="loginPswd"  name="loginPswd"
                   value = {this.props.pwd} onChange = {this._onChangePwd.bind(this)} />
                      {Login.emptyPwdError ?<div className = "error"> Please Enter Password</div> : null}
                      {Login.namePwdError ?<div className = "error"> Length should be from 6 to 8 letters</div> : null}  
                      {Login.authError ?<div className = "error"> Username or password wrong </div> : null}
              </div>
              <div className="col-12 chck-adj">
              <div className="pull-left">
                <div className="roundedTwo">
          <input type='checkbox' id="rememberMe" name="rememberMe" checked={this.state.chkbox} onChange={this.rememberMe.bind(this)} />
          <label htmlFor="rememberMe"></label>
        </div>
                <span className="lbt">Remember me</span>
            </div>
            {this.state.isIOS ?
                <div className="pull-right">
                    <div className="roundedTwo">
                     <input type="checkbox" id="touchId" name="touchId" checked={this.state.clickTouchid} onChange={this.touchIdOnclick.bind(this)}/>
                         <label htmlFor="touchId"></label>
                            </div>
                            <span className="lbt txt-line2">Enable Touch ID </span>
                </div>:null}                  
                <div className={this.state.clickTouchid ? "touchpopupBoxactive" : "touchpopupBoxactive touchpopuphide"} >
                  <div className="touchpopupdialog">
                    <div className="touchPopupContainer">
                      <div className="touchpopupborder-box touchpopupfilter-list">
                        <div className="touchpopup-content"> 
                          <p>Touch ID will be enabled after you login. Please click the Touch ID guide for more information.</p>
                        </div>
                        <button className="col-6 touchpopup-button" id="signout-touchid" name="signout-touchid">Touch ID Guide</button>
                        <button className="col-6 touchpopup-buttoncan" onClick={this.touchIdOnclick.bind(this)} id="signout-touchok" name="signout-touchok">Ok</button>
                      </div>    
                    </div>    
                  </div>             
                </div>
            </div>
             <div className="col-12 txt-center marTop-20">
                   <Link to = "forgotpassword" id="forgotPswd" name="forgotPswd" className="lbt dark-text">Forgot User ID or Password? </Link>
                </div>
            <div className="col-12 marTop-30">
                         <input id="submitBtn" name="submitBtn" type="button" value="SIGN IN" className="button pad-6 col-12" onClick={this.formSubmit.bind(this)}/>        
            </div>
         </div>
        <div className="clearfix"></div>
    </div>   
        </div>   
            <footer className="footerTxt"> <p> &#169; 2016 Google NetOps, New York, NY 10166 </p> </footer> 
              </div>              
            );
    }    
};

export default LoginForm;