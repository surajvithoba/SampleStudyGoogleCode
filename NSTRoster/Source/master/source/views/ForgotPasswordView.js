import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Header from '../components/Header/HeaderComponent.js';

export default class Forgotpassword extends React.Component {
  constructor (props){
    super(props);
    this.state = {
       auth: localStorage.getItem('islogin')
    }
    this.props.actions.setDefaultValue();
  }

  forgotSubmit(forgot) {
   var emailReqExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(forgot.emailId.length === 0){
     this.props.actions.checkEmailEmpty();
     document.getElementById("forgotpassword").focus();
   } else if(forgot.emailId.length > 0 && emailReqExp.test(forgot.emailId) !== true){     
     document.getElementById("forgotpassword").focus();
     this.props.actions.checkEmailAddress();
   } else {
     hashHistory.push('/fgtpaswdsucess');
   }            
  }
 
  onChangeEmail(event) {
    this.props.actions.emailChange(event.target.value);
  }
     render (){
      var forgot = this.props.ForgotPassword;
      return(
          <div>
          <Header auth = {this.state.auth}/>
            <div className="loginBG col-12">
          <div className="  col-6 no-float centerDiv pad-40  tran-bg">
       <div className="col-12">
            <div className="font25 txt-center"> Forgot  your password?</div>
            <div className="email-title">
               Enter your email address and we will send you an email to reset your password.
               </div>
               <div className="formcontainer">
              <label className="label-txt2">Email Address </label>
                <input type="text" name="forgotpassword" value={forgot.emailId}  className="forminput ad-int"  id="forgotpassword" onChange={this.onChangeEmail.bind(this)}/>
       {forgot.emptyEmail ?<div className = "error"> Please Enter Email</div> : null}
                       {forgot.emailError ?<div className = "error">  Please Enter Correct Email</div> : null} 
                </div>
            
            <div className="col-12 reset-password">
                         <input id="resetPassword" name="resetPassword" type="button" value="SEND" className="button pad-6 col-12" onClick={this.forgotSubmit.bind(this, forgot)}/>        
            </div>
         </div>
        <div className="clearfix"></div>
    </div>   
        </div>   
            <footer className="footerTxt"> <p> &#169; 2016 Google NetOps, New York, NY 10166 </p> </footer> 
         </div>     
      );
     }
}