import React, {Component} from "react";
import AnimatedValueControl from "./AnimatedValueControl";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {TotalFakeNews : state.TotalFakeNews , CurrentMoney: state.CurrentMoney};
}

class ConnectedMainStatsControl extends Component{
    render(){
        return(
            <div className="app-main-stats">

                <div className="main-stats-label">Fake new generated</div>
                <div className="app-main-stat-holder"><AnimatedValueControl effect="flip-h" value={this.props.TotalFakeNews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}/></div>
                <div className="main-stats-label">Current money</div>
                <div className="app-main-stat-holder">$ <AnimatedValueControl effect="flip-h" value={this.props.CurrentMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}/></div>

            </div>
        );
    }
}

const MainStatsControl = connect(mapStateToProps)(ConnectedMainStatsControl);

export default MainStatsControl;
