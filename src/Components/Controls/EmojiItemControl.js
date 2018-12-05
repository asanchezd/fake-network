import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EmojisItemControl extends Component{
    render(){
        return(
            <span className="emoji-holder">
                <FontAwesomeIcon icon={this.props.icon}/>
            </span>
        );
    }
}

export default EmojisItemControl;