import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

class Dashleft extends React.Component{
    render(){
        return (
             <div className="left-slide2">
                <ul>
                    <li className="active-dashboard"><Link to="dashboard" id="dash-center" name="dash-center"><span id="dashboard" className="s-icon dashboard"></span></Link></li>
                    <li><span id="client" className="s-icon client "></span></li>
                   <li><span id="networkEngineers" className="s-icon networkEngineer"></span></li>
                    <li><span id="documents" className="s-icon document"></span></li>
                    <li><span id="providers" className="s-icon provider"></span></li>
                   <li><Link to="/" id="dashleft-logout" name="dashleft-logout"><span id="logouts" className="s-icon logout"></span></Link></li>
                </ul>
            </div> 
        );
    }
}
export default Dashleft;
