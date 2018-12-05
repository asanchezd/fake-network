import React, {Component} from "react";

class SingleAnimatedValueControl extends Component{
    constructor(props) {
		super(props);
		this.state = {
				effect: props.effect || 'flip-v',
				currentValue: props.value,
				animateValue: false,
				valueChangeSpeed: 110,
				className: props.className || ''
			};
	}
	componentDidUpdate(prevProps, prevState, snapshot){
		if(prevProps.value !== this.props.value)
		{
    		this.setState({ animateValue: true });
		    setTimeout(function() {
		    	this.setState({ currentValue: this.props.value });	
				this.setState({ animateValue: false });	
	     	}.bind(this), this.state.valueChangeSpeed);
		}	
	}
    render(){
        return(
            <span className={this.state.className} style={{display: 'inline-block' , whiteSpace : 'pre', position: 'relative', transition: this.state.valueChangeSpeed + 'ms all', transform: this.state.animateValue ? (this.state.effect === 'flip-v' ? 'scale(1,0.01)' : 'scale(0.01,1)') : 'scale(1,1)' }}>{this.state.currentValue}</span>
        );
    }
}

export default SingleAnimatedValueControl;