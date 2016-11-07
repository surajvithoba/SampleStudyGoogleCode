import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import 'rc-select/assets/index.css';
import Select from 'rc-select';
import zhCN from 'rc-calendar/lib/locale/zh_CN.js';
import enUS from 'rc-calendar/lib/locale/en_US.js';
import moment from 'moment';
import 'moment/locale/zh-cn.js';
import 'moment/locale/en-gb.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import Calculator from './CalculatorComponent.js';
const format = 'YYYY-MM-DD';
const cn = location.search.indexOf('cn') !== -1;
const now = moment();
if (cn) {
now.locale('zh-cn').utcOffset(8);
} else {
now.locale('en-gb').utcOffset(0);
}
const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');
function onSelect(value) {
}
class Userdisplay extends React.Component{
render(){
return(
<div className="col-12 bg-white pad-20 borderRd-4">
   <div className="pro-img pull-left">
      <img src={require("../../img/img-p.jpg")}/>    
   </div>
   <div className="mar-Left90">
      <div className="font18"> <span> John smith</span> <img src={require("../../img/edit-green-icon.svg")} className="pro-edit"/></div>
      <div className="gray-text font13 marTop-10">
         <div className="col-12">91-568-96584 </div>
         <div className="col-12"> John_smith@google.com</div>
      </div>
   </div>
</div>
);    
}
}

class NoteHead  extends React.Component{
render(){
return(
<div className="col-12">
   <div className=" pull-right"> 
      <span className=""><img src={require("../../img/search-blue-icon.svg")} /></span> 
      <span className="mar-Left30"><img src={require("../../img/Add-blue-icon.svg")} /></span>
   </div>
</div>
);     
}
}

class Addnote  extends React.Component{
render(){
return(
<div className="col-12 addnote-form">
   <span className="font24 blue-text">Create a New Note  
   <span className="note-close"> <img src={require("../../img/close-blue-icon.svg")}/></span>
   </span>
   <div className="col-12">
      <div className="col-12 marBot-20">
         <input className="form-control-shadowNone" type="text" placeholder="Enter Note Name…" id="headeright-name" name="headeright-name" />         
      </div>
      <div className="col-12 marBot-20">
         <input className="form-control-shadowNone" type="text" placeholder="Enter Tags…" id="headeright-tages" name="headeright-tages" />         
      </div>
      <div className="col-12 marBot-20">
         <textarea  className="form-control-shadowNone" placeholder="Write your note…" id="headeright-note" name="headeright-note"></textarea>
      </div>
      <div className="col-12 txt-center">
         <button className="Grn-button " id="headeright-add" name="headeright-note">ADD NOTE </button>
      </div>
   </div>
</div>
); 
}  
}          

class Notelist  extends React.Component{
render(){
return(
<div className="col-12 ">
   <div className="text-container">
      <span className=" head-txt2 pull-left col-12"> Note Name Here </span>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie dignissim justo, a egestas dolor feugiat nec. Etiam urna odio,                                          dapibus eget ultricies vel, porttitor in sem. Integer dui est, ultrices vel quam euismod, tempor lobortis eros.
      </p>
   </div>
   <div className="col-12 bottom-strip">
      <div className="pull-left upperTxt">
         <span className="icn-mg" > <img src={require("../../img/days-icon.svg")} width="18" height="18"/></span> 3 DAYS AGO  
      </div>
      <div className="pull-right upperTxt">
         <span className="icn-mg" > <img src={require("../../img/meeting-icon.svg")} width="18" height="18"/></span> MEETING 
      </div>
   </div>
</div>
);     
}    
}
class NoteContentsection  extends React.Component{
render(){
return(
<div className="col-12 tab-container notes-box" id="Notes">
   <NoteHead/>
   <Notelist/>
   <Notelist/>
   <Notelist/>
   <Addnote/>
</div>
);
}
}

class AlertContent  extends React.Component{
render(){
return(
<div className="text-container">
   <i className="alert-icon blue-alert"> </i>
   <div className="mar-Left40" >
      <span className="head-txt pull-left col-8"> Lorem ipsum dolor sit </span>
      <span className="time-txt pull-right "> 13 min ago</span>
      <p>
         LoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim                                 
         veniam, quis nostrud.rem ipsum dolor sit  
      </p>
   </div>
</div>
);     
}    
}
class AlertSection  extends React.Component{
render(){
return(
<div className="col-12 tab-container alert-box " id="Alert" >
   <span className="col-12 title-c">Today</span>   
   <div className="col-12">
      <AlertContent/>
   </div>
</div>
);     
}    
}
class ContCalendar  extends React.Component{
constructor(props) {
super(props);
this.state = {
type: 'month',    
}
}
onTypeChange(type) {
this.setState({
type,
});
}
render(){
return(
<div className="col-12 tab-container calendar" id="Calendar">
   <div style={{ zIndex: 1000, position: 'relative' }}>
   <FullCalendar
   style={{ margin: 10 }}
   Select={Select}
   fullscreen={false}
   onSelect={onSelect}
   defaultValue={now}
   locale={cn ? zhCN : enUS}
   />
</div>
</div>
);     
}    
}
class ContCalculator  extends React.Component{
render(){
return(
<div className="col-12 tab-container calculator" id="Calculator">
   <Calculator/>
</div>
);     
}    
}
class Chat extends React.Component{
render(){
return(
<div className="col-12 tab-container chat" id="Chat">
   Chat
</div>
);     
}    
}
class HeaderRight extends React.Component{
constructor(props) {
super(props);
this.state = {
calculator: true,
calender: false,
alert: false,
note: false,
chat: false,
}
this.iconClick = this.iconClick.bind(this);
}
iconClick(icon){
this.setState({calculator:false,calender:false,alert:false,note:false,chat:false});
var obj = {};
obj[icon] = true;
this.setState(obj);
}
render(){
return(
<div className="col-12">
   <Userdisplay/>
   <div className="col-12  pad-20 d-link">
      <ul>
         <li><span id="Right-panelCalculator" name="Right-panelCalculator" className={this.state.calculator === true ? 'calculator_icon active' : 'calculator_icon inactive'} onClick = {() => this.iconClick('calculator')} name="Right-panelCalculator"> </span></li>
         <li><span id="Right-panelCalender" name="Right-panelCalender" className={this.state.calender === true ? 'calender_icon active' : 'calender_icon inactive'}   onClick = {() => this.iconClick('calender')} name="Right-panelCalender"> </span></li>
         <li><span id="Right-panelAlert" name="Right-panelAlert"  className={this.state.alert === true ? 'alert_icon active' : 'alert_icon inactive'}  onClick = {() => this.iconClick('alert')}> </span></li>
         <li><span id="Right-panelChat" name="Right-panelChat"  className={this.state.chat === true ? 'chat_icon active' : 'chat_icon inactive'}  onClick = {() => this.iconClick('chat')}> </span></li>
         <li><span id="Right-panelNote" name="Right-panelNote" className={this.state.note === true ? 'note_icon active' : 'note_icon inactive'}  onClick = {() => this.iconClick('note')}> </span></li>
      </ul>
   </div>

   {this.state.calculator? 
   <ContCalculator/>
   :null}

   {this.state.calender? 
   <ContCalendar/>
   :null}

   {this.state.alert? 
   <AlertSection/>
   :null}

   {this.state.note? 
   <NoteContentsection/>
   :null}

</div>
); 
}
}
export default HeaderRight;