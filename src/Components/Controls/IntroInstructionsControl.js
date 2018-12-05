import React,{Component} from 'react'
import GameCore from '../GameCore';

class IntroInstructionsControl extends Component{
    componentDidMount(){
	    var x = setInterval(function() {
	    	if(GameCore.TotalFakeNews>6){
	    		this.setState({ updateData: true });
	    		clearInterval(x);
	    	}
     	}.bind(this), 1500);
	}
	render() {
		return (
			<div className={GameCore.TotalFakeNews === 0 ? 'intro-instructions' : 'intro-instructions completed'}>
				<div>
                    Click on the "Share fake news" button to share a fake news (Astonishing)
                </div>
                <div>
                    Every certain amount of fake news will receive money to invest in other news sources.<br/>
					You can see the amount of fake news shared and the current money in the upper right corner.
                </div>
			</div>
	    )
	}
}

export default IntroInstructionsControl;