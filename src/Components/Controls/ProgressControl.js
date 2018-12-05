import React, {Component} from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {TotalFakeNews : state.TotalFakeNews , WorldTotalUsers: state.WorldTotalUsers};
}

class ConnectedProgressControl extends Component{
    componentDidMount(){
	    setInterval(function() {
	    	this.setState({ updateData: true });
     	}.bind(this), 1000);
	}
    render(){
        return(
            <div className="progress-holder">
                <div className="progress">
                    <div className="progress-message">
                        The world has around 4 000 000 000 internet users. <br/>
                        Can you create a fake news for each of them? <br/>
                        (It's easy, a few clicks away)
                    </div>
                    <div className="progress-bar-holder">
                        <div className="progress-bar" style={{width:(Math.min(100,this.props.TotalFakeNews*100/this.props.WorldTotalUsers))+"%"}}>
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ProgressControl = connect(mapStateToProps)(ConnectedProgressControl);

export default ProgressControl;