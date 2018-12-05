import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {generateFromPointer} from '../../Store/actions';
import {connect} from 'react-redux';
import MainStatsControl from './MainStatsControl';
import EmojisGeneratorControl from './EmojisGeneratorControl';

const mapDispatchToProps = dispatch => {
    return {
        generateFromPointer : () => dispatch(generateFromPointer())
    }
}

class ConnectedCreateFakeNewsButtonControl extends Component{
    constructor(props) {
		super(props);
		this.state = {
			animate: false,
		};
	}
	generateFakeNews() {
		this.setState({ animate: true });
	    setTimeout(function() {
	    	this.props.generateFromPointer();
			this.setState({ animate: false });	
     	}.bind(this), 100);
	}
	render() {
		return (
			<>
				<div className="fake-news-bt" style={{fontSize: '160px', display: 'inline-block', transition: '100ms all', transform: this.state.animate ? 'scale(1.1,1.1)' : 'scale(1,1)' } } onClick={()=>this.generateFakeNews()}>
					<MainStatsControl/>
					<EmojisGeneratorControl/>
					<FontAwesomeIcon icon="share-alt"/>
					<div className="fake-news-bt-text">
						Share fake news
					</div>
				</div>
			</>
			
	    )
	}
}

const CreateFakeNewsButtonControl = connect(null,mapDispatchToProps)(ConnectedCreateFakeNewsButtonControl);

export default CreateFakeNewsButtonControl;