import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Header from '../components/Header/HeaderComponent.js';

export default class ForgotpasswordTwo extends React.Component {
  constructor (props){
    super(props);
    this.state = {
           auth: localStorage.getItem('islogin')
    }
  }
    render(){
        return (
<div>
<Header auth = {this.state.auth}/>
<div className="loginBG login-height col-12">
          <div className="  col-6 no-float centerDiv pad-50  tran-bg">
       <div className="col-12">
            <div className="font25 txt-center"> Forgot  your password?</div>
            <div className="email-title font18">
We have sent you an email with a link to reset your password
               </div>   
            <div className="col-12 ">
                        <Link to="/" id="forgotpwd" name="forgotpwd"> <input id="forgotok" name="forgotok" type="button" value="OK" className="button pad-6 col-12"/></Link>        
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