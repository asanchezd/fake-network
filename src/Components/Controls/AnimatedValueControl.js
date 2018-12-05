import React, {Component} from "react";
import SingleAnimatedValueControl from "./SingleAnimatedValueControl";

class AnimatedValueControl extends Component{
    render(){
        return(
			<span className="no-break">
				{this.props.value.toString().split('').map((item,index)=><SingleAnimatedValueControl key={index} value={item} className={this.props.className} effect={this.props.effect} />)}
			</span>
        );
    }
}

export default AnimatedValueControl;