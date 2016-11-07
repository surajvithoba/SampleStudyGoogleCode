import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Dashleft from '../components/DashBoard/DashLeftComponent.js';
import Header from '../components/Header/HeaderComponent.js';
import HeaderRight from '../components/Header/HeaderRightComponent.js';
import NewBusiness Rule from '../components/DashBoard/NewBusiness RuleComponent.js';
import Project from '../components/DashBoard/ProjectComponent.js';
import ShiftNeedAnalysis from '../components/DashBoard/FNAComponent.js';
import Schedule from '../components/DashBoard/ScheduleComponent.js';

class Dashcenter extends React.Component{
  constructor(props) {
    localStorage.setItem("islogin", "1");
    super(props)
    this.state = {
      business rules: 37,
      project: 50,
      finance: 12,
      Schedule: 3,
      auth: localStorage.getItem('islogin'),
    }
    this.props.actions.setDefaultValue();
  }

    render(){
        var Dashboard = this.props.DashBoard;
        var DashboardActions = this.props.actions;
        return ( <div>
            <Header auth = {this.state.auth}/>
            <Dashleft />
            <div>
             <div className="top-blk">
                <h1 className="txt-center white-txt pad-t-50 dashtitle" >Dashboard</h1>
                <div className="dashcenter">
                <div className="dash-search inner-addon right-addon">
                    <form>
         <img src={require("../img/search-grey-icon.svg")} className="search-dash-icon" id="dashsearch" name="dashsearch" />
         <input type="text" required name="dash-search" id="dash-search" className="dash-search-box" placeholder="Search business rules, networkEngineers, Schedules, projects needs analysis and Documents"/>
         <button className="close-icon1" type="reset" ><i className="questglyphicon close-icon" id="dashclose" name="dashclose"></i></button>          
      </form>
          </div>
             </div>
                </div>
    <div className="dashcenter">    
        <div className="col-12 adj-margin">
                 <NewBusiness Rule />
                 <Project />  
                 <ShiftNeedAnalysis />    
                 <Schedule />
          </div>
        </div>
            </div>
             <div className={Dashboard.dashRight ? 'right-slide2 Xactive' : 'right-slide2'} >
                 <div className="left-arrow" id="leftPanel-button" name="leftPanel-button"  onClick ={DashboardActions.DashRightToggle} >
                <div className="close_2" > 
                <span className="left-a"> </span> 
                <span className="right-a"> </span>  
                  </div>
                    </div>
             <div className="scroll">
            <HeaderRight/>
            </div>
            </div>
            </div>
        );
    }
}

export default Dashcenter;