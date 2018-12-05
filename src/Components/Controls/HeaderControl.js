import React, {Component} from "react";
import StatsControl from "./StatsControl";
import logo from './../../logo.svg';

class HeaderControl extends Component{
    render(){
        return (
            <div className="app-header">
                <div className="app-title">
                    <img src={logo} alt="Fake Network"/>
                    Fake Network
                </div>
                <StatsControl/>
                <div className="clear"></div>
            </div>
        );
    }
}

export default HeaderControl;