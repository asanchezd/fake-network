import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedValueControl from "./AnimatedValueControl";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {TotalFakeNews : state.TotalFakeNews , CurrentMoney: state.CurrentMoney};
}

class ConnectedStatsControl extends Component{
    render(){
        return(
            <div className="app-stats">

                <FontAwesomeIcon icon="comments" />
                <span className="app-stat-holder"><AnimatedValueControl effect="flip-h" value={this.props.TotalFakeNews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}/></span>
                
                <FontAwesomeIcon icon="dollar-sign" />
                <span className="app-stat-holder"><AnimatedValueControl effect="flip-h" value={this.props.CurrentMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}/></span>

            </div>
        );
    }
}

const StatsControl = connect(mapStateToProps)(ConnectedStatsControl);

export default StatsControl;