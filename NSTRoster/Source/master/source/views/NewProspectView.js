import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Header from '../components/Header/HeaderComponent.js';
import Dashleft from '../components/DashBoard/DashLeftComponent.js';
import HeaderRight from '../components/Header/HeaderRightComponent.js';

class NewBusiness Rule extends React.Component{

constructor (props){
    super(props);
    this.state = {
       auth: localStorage.getItem('islogin'),
       dashRight: false,
       showPopup : false
      }
    this.props.actions.setDefaultValue();
    }
    toggleAuth() {
      this.setState({dashRight: !this.state.dashRight});
    }
  
    save(business rule) {
      if(business rule.firstName!== '' && business rule.secondName !== '' && 
       business rule.phone !== '' && business rule.gender !== '' && 
       business rule.marital !== '' && business rule.email !== '' &&
       business rule.year !== '' && business rule.month !== '' &&
       business rule.day !== '') {
         this.setState({showPopup:true});
         this.props.actions.saveSuccess(); 
      }    
      if(business rule.firstName === ''){
        this.props.actions.emptyfirstNameError(true);
      } else {
        this.props.actions.emptyfirstNameError(false);
      }
      if(business rule.secondName === ''){
        this.props.actions.emptysecondNameError(true);
      } else {
        this.props.actions.emptysecondNameError(false);
      }
      if(business rule.phone === '') {
        this.props.actions.phoneError(true);
      } else {
        this.props.actions.phoneError(false);
      }
      if(business rule.gender === ''){
        this.props.actions.emptygenderError(true);
      } else {
        this.props.actions.emptygenderError(false);
      }      
      if(business rule.day === ''){
        this.props.actions.dayError(true);
      } else {
        this.props.actions.dayError(false);
      }
      if(business rule.month === ''){
        this.props.actions.monthError(true);
      } else {
        this.props.actions.monthError(false);
        this.setState({monthError: false});
      }
      if(business rule.year === ''){
        this.props.actions.yearError(true);
      } else {
        this.props.actions.yearError(false);
      }
      if(business rule.marital === ''){
        this.props.actions.maritalError(true);
      } else {
        this.props.actions.maritalError(false);
      }
      if(business rule.email === ''){
        this.props.actions.emptyEmailError(true);
      } else {
        var namePat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(namePat.test(business rule.email) !== true) {
          document.getElementById("email").focus();
          this.props.actions.emailError(true);
        }
        else {
          this.props.actions.emailError(false);
        }
      }
      if(business rule.email === '') {
        this.props.actions.emptyEmailError(true);
      } else {
        this.props.actions.emptyEmailError(false);
      }
  }

  onChangeFirstName(event) {
    this.props.actions.firstNameChange(event.target.value);
  }

  onChangeSecondName(event) {
    this.props.actions.secondNameChange(event.target.value);
  }

  onChangePhone(event) {
    this.props.actions.phoneChange(event.target.value);
  }

  onChangeGender(event) {
        this.props.actions.genderChange(event.target.value);
  }

  onChangeMarital(event) {
    this.props.actions.maritalChange(event.target.value);
  }

  onChangeEmail(event) {
    this.props.actions.emailChange(event.target.value);
  }

  onChangeYear(){
    var year = document.getElementById('year');
    var selectedNode = {};
    if(year.selectedIndex === 0) {
      selectedNode.value = '';
    } else {
      selectedNode = year.options[year.selectedIndex];
    }
    this.props.actions.yearChange(selectedNode.value);
  }
  onChangeMonth(){
    var month = document.getElementById('month');
    var selectedNode = {};
    if(month.selectedIndex === 0) {        
      selectedNode.value = '';
    } else {
      selectedNode = month.options[month.selectedIndex];
    }
    this.props.actions.monthChange(selectedNode.value);
  }

  onChangeDay() {
    var day = document.getElementById('day');
    var selectedNode = {};
    if(day.selectedIndex === 0) {
      selectedNode.value = '';
    } else {
      selectedNode = day.options[day.selectedIndex];
    }
    this.props.actions.dayChange(selectedNode.value);
  }

  onChangeGender() {
    var gender = document.getElementById('gender');
    var selectedNode = {};
    if(gender.selectedIndex === 0) {
      selectedNode.value = '';
    } else {
      selectedNode = gender.options[gender.selectedIndex];
    }
    this.props.actions.genderChange(selectedNode.value);
  }
  
  onChangeMarital() {
    var marital = document.getElementById('marital');
    var selectedNode = {};
    if(marital.selectedIndex === 0) {
      selectedNode.value = '';
    } else {
      selectedNode = marital.options[marital.selectedIndex];
    }
    this.props.actions.maritalChange(selectedNode.value);
  }
  
  popUpOnclick() {
    if(this.state.showPopup === true) {
      this.setState({showPopup: false});
    } else {
      this.setState({showPopup: true});
    } 
  }

   render(){
     var business rule = this.props.NewBusiness Rule;
       var business ruleActions = this.props.actions;
        return (<div>
          <Header auth = {this.state.auth}/>
                  <Dashleft />
            <div className="mainContainer">    
            <div className="col-12 c-container">
                <h1 className="white-txt sanslight title">New Business Rule</h1>
                </div>
            <div className="Business Rule-form c-container2">
                       <form role="form">
                          <div className="col-12 form-content">
                             <div className="col-6 pad-10">
                                <label htmlFor="labelfirstname">First Name</label>
                                <input className="form-control" type="text" id = "firstname" name= "firstname" value = {this.props.NewBusiness Rule.firstName} placeholder="Jane" required="" onChange = {this.onChangeFirstName.bind(this)}/>
                                 {business rule.emptyfirstNameError? <div className = "erTxt">Please enter first name</div> : null }
                                 {business rule.firstNameError? <div className = "erTxt">Please enter first name more than 4 letters</div> : null }
                             </div>
                             <div className="col-6 pad-10">
                                <div className="form-group">
                                   <label htmlFor="labelmiddle">Middle (Optional)</label>
                                   <input type="text" id="last_name" name="last_name"  className="form-control input-lg" placeholder="Middle Name" tabIndex="2" />
                                </div>
                             </div>
                             <div className="col-6 pad-10">
                                <label htmlFor="labellstname">Last Name</label>
                                <input className="form-control" type="text" placeholder="Jane" id="secondName" name="secondName" value = {business rule.secondName} required=""  onChange = {this.onChangeSecondName.bind(this)}/>
                                {business rule.emptysecondNameError? <div className = "erTxt">Please enter last name</div> : null }
                                {business rule.secondNameError? <div className = "erTxt">Please enter last name more than 4 letters</div> : null }
                             </div>
                             <div className="col-6 pad-10">
                                <div className="col-12">
                                   <div className="form-group">
                                      <div><label htmlFor="labeldob"> Date of Birth </label></div>
                                      <div className="col-4">
                                         <select className="form-control business ruleform-control" id="month" name="month" onChange = {this.onChangeMonth.bind(this)} value={business rule.month}>
                                            <option id="month1" name="month1">Month</option>
                                            <option id="January" name="January">January</option>
                                            <option id="February" name="February">February</option>
                                            <option id="March" name="March">March</option>
                                            <option id="April" name="April">April</option>
                                            <option id="May" name="May">May</option>
                                            <option id="June" name="June">June</option>
                                            <option id="July" name="July">July</option>
                                            <option id="August" name="August">August</option>
                                            <option id="September" name="September">September</option>
                                            <option id="October" name="October">October</option>
                                            <option id="November" name="November">November</option>
                                            <option id="December" name="December">December</option>
                                         </select>
                                 {business rule.monthError? <div className = "erTxt">Please enter month</div> : null }
                                      </div>
                                      <div className="col-4 pad-lft-10">
                                         <select className="form-control business ruleform-control" id="day" name="day" onChange = {this.onChangeDay.bind(this)} value={business rule.day}>
                                            <option  id="days" name="days">Day</option>
                                            <option  id="day1" name="day1">1</option>
                                            <option  id="day2" name="day2">2</option>
                                            <option  id="day3" name="day3">3</option>
                                            <option  id="day4" name="day4">4</option>
                                            <option  id="day5" name="day5">5</option>
                                            <option  id="day6" name="day6">6</option>
                                            <option  id="day7" name="day7">7</option>
                                            <option  id="day8" name="day8">8</option>
                                     <option  id="day9" name="day9">9</option>       
                                     <option  id="day10" name="day10">10</option>
                                            <option  id="day11" name="day11">11</option>
                                            <option  id="day12" name="day12">12</option>
                                            <option  id="day13" name="day13">13</option>
                                            <option  id="day14" name="day14">14</option>
                                            <option  id="day15" name="day15">15</option>
                                            <option  id="day16" name="day16">16</option>
                                            <option  id="day17" name="day17">17</option>
                                            <option  id="day18" name="day18">18</option>
                                            <option  id="day19" name="day19">19</option>
                                             <option  id="day20" name="day20">20</option>
                                             <option  id="day21" name="day21">21</option>
                                             <option  id="day22" name="day22">22</option>
                                             <option  id="day23" name="day23">23</option>
                                             <option  id="day24" name="day24">24</option>
                                             <option  id="day25" name="day25">25</option>
                                             <option  id="day26" name="day26">26</option>
                                             <option  id="day27" name="day27">27</option>
                                             <option  id="day28" name="day28">28</option>
                                             <option  id="day29" name="day29">29</option>
                                             <option  id="day30" name="day30">30</option>
                                             <option  id="day31" name="day31">31</option>
                                         </select>
                                 {business rule.dayError? <div className = "erTxt">Please enter day</div> : null }
                                      </div>
                                      <div className="col-4 pad-lft-10">
                                         <select className="form-control business ruleform-control" id="year" name="year" onChange = {this.onChangeYear.bind(this)} value={business rule.year}>
                                            <option  id="years" name="years">Year</option>
                                            <option  id="1985" name="1985">1985</option>
                                            <option id="1986" name="1986">1986</option>
                                            <option id="1987" name="1987">1987</option>
                                            <option id="1988" name="1988">1988</option>
                                            <option id="1989" name="1989">1989</option>
                                            <option id="1990" name="1990">1990</option>
                                            <option id="1991" name="1991">1991</option>
                                            <option id="1992" name="1992">1992</option>
                                             <option id="1993" name="1993">1993</option>
                                            <option id="1994" name="1994">1994</option>
                                            <option id="1995" name="1995">1995</option>
                                            <option id="1996" name="1996">1996</option>
                                             <option id="1997" name="1997">1997</option>
                                            <option id="1998" name="1998">1998</option>
                                            <option id="1999" name="1999">1999</option>
                                            <option id="2000" name="2000">2000</option>
                                            <option id="2001" name="2001">2001</option>
                                            <option id="2002" name="2001">2002</option>
                                            <option id="2003" name="2003">2003</option>
                                            <option id="2004" name="2004">2004</option>
                                            <option id="2005" name="2005">2005</option>
                                            <option id="2006" name="2006">2006</option>
                                            <option id="2007" name="2007">2007</option>
                                            <option id="2008" name="2008">2008</option>
                                            <option id="2009" name="2009">2009</option>
                                            <option id="2010" name="2010">2010</option>
                                         </select>
                                          {business rule.yearError? <div className = "erTxt">Please enter year</div> : null }
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div className="col-6 pad-10">
                                <div className="form-group">
                                   <label htmlFor="gender">Gender</label>
                                   <select className="form-control business ruleform-control" onChange = {this.onChangeGender.bind(this)} value={business rule.gender} id="gender" name="gender">
                                      <option id="selectgender" name="selectgender">Select</option>
                                      <option id="femalee" name="femalee">Female</option>
                                      <option id="malee" name="malee">Male</option>
                                   </select>
                                 {business rule.emptygenderError? <div className="erTxt">Please select gender</div> : null}
                                  </div>
                             </div>
                             <div className="col-6 pad-10">
                                <label htmlFor="marital"> Marital Status</label>
                                <select className="form-control business ruleform-control" onChange = {this.onChangeMarital.bind(this)} value={business rule.marital} id="marital" name="marital">
                                   <option id="selectmarital" name="selectmarital">Select</option>
                                   <option id="singlee" name="singlee">Single</option>
                                   <option id="marriede" name="marriede">Married</option>
                                </select>
                                 {business rule.maritalError? <div className="erTxt">Please select marital status</div> : null}
                             </div>
                             <div className="col-12 pad-10">
                                   <div className="col-4"><label htmlFor="labelmainPhone">Main Phone</label>
                          <input type="number" pattern="[0-9]*" inputmode="numeric" placeholder="+1 (212) 456 7890"  className="form-control" onChange = {this.onChangePhone.bind(this)} value = {business rule.phone} id="newpros-mainphone" name="newpros-mainphone" />
                          {business rule.phoneError? <div className="erTxt">Please enter phone</div> : null}
                          </div>
                             <div className="col-4 pad-lft-10"><label htmlFor="labelsecondphone">Secondary Phone (Optional)</label>
                                <input type="text" placeholder="eg.+1 (212) 555-1212" className="form-control" id="newpros-secondphone" name="newpros-secondphone" /></div>
                                
                                <div className="col-4 pad-lft-10"><label htmlFor="labelEmail">Email </label>
                                <input type="text" placeholder="jane.wells@google.com" className="form-control" name="email" id="email" onChange = {this.onChangeEmail.bind(this)} value = {business rule.email}/>
                                       {business rule.emptyEmailError? <div className = "erTxt">Please enter email</div> : null}
                               {business rule.emailError? <div className = "erTxt">Please enter correct email</div> : null}</div>
                           
                             </div>
                                <div className="col-12 marTop-10">
        <button type="button" className="btn btn-save pull-right" onClick={this.save.bind(this, business rule)} id="new-save" name="new-save">Save</button>
                                    </div>
                          </div>  
                       </form>
                       <div>{business rule.userData}</div>
                    </div>
                         </div>
                           <div className={this.state.showPopup ? "popupBoxactive" : "popupBoxactive popupBoxhide"}>
                             <div className="Middle">
                             <div className="Aligner">
                             <div className="border-box filter-list">
                                 <div className="success-cont"> 
                                  <p className="succesmsg">"Your data has been saved successfully"</p>
                                 </div>
                                 <button className="col-12 filte-button" id="newpros-ok" name="newpros-ok" onClick={this.popUpOnclick.bind(this)}>Ok</button>
                                 </div>    
                            </div>    
                            </div>             
                            </div>               
                          <div className={business rule.dashRight ? 'right-slide2 Xactive' : 'right-slide2'} >
                <div className="left-arrow" id="leftPanel-button" name="leftPanel-button" onClick = {business ruleActions.DashRightToggle} >
                   <div className="close_2" > 
                      <span className="left-a"> </span> 
                      <span className="right-a"> </span>  
                   </div>
                </div>
                <div className="scroll">
                   <HeaderRight/>
                </div>
                </div>
            </div>);
    }
}

export default NewBusiness Rule;