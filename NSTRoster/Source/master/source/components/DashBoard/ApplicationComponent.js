import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

class Schedule extends React.Component{
  render(){
        return (
<div className="col-6 txt-center dash-blk pull-right">
                    <div className="border-box dash-blk-top">            
                        <div className="col-12 txt-center">
                            <span id="Schedule" className="dashhdg">ScheduleS</span>             
                        </div>
                        <div className="dashcount-blk">
                                <div className="col-6 dashcount-lft">
                                        <span className="dash-no-l">7</span>
                                        <span className="dash-no-b">TOTAL</span>
                                </div>
                                <div className="col-6 dashcount-lft">
                                        <span className="dash-no-l">3</span>
                                        <span className="dash-no-b">INCOMPLETE</span>
                                </div>
                        </div>
                     </div>                 
                        <span className="dash-blk-btm txt-shadow border-box bg-green"> START AN Schedule</span>    
            </div>
          )};
}
export default Schedule;
