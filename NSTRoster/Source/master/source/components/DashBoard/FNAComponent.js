import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

class ShiftNeedAnalysis extends React.Component{
  render(){
        return (
    <div className="col-6 txt-center dash-blk">
                <div className="border-box dash-blk-top">            
                    <div className="col-12 txt-center">
                        <span id="fna" className="dashhdg">FINANCIAL NEEDS ANALYSIS</span>             
                    </div>
                     <div className="dashcount-blk">
                                <div className="col-6 dashcount-lft">
                                        <span className="dash-no-l">5</span>
                                        <span className="dash-no-b">TOTAL</span>
                                </div>
                                <div className="col-6 dashcount-lft">
                                        <span className="dash-no-l">2</span>
                                        <span className="dash-no-b">INCOMPLETE</span>
                                </div>
                    </div>
                 </div><div id="startFna" className="dash-blk-btm txt-shadow  bg-green border-box">START NEEDS ANALYSIS</div>                
            </div>
          )};
}
export default ShiftNeedAnalysis;
