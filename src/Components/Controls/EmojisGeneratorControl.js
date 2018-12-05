import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmojisItemControl from './EmojiItemControl';

const mapStateToProps = state => {
    return {Emojis : state.Emojis};
}

class ConnectedEmojisGeneratorControl extends Component{
    render(){
        return(
            <div className="emojis-holder">{
                this.props.Emojis.map((item)=><EmojisItemControl key={item.id} icon={item.icon}/>)
            }</div>
        );
    }
}

const EmojisGeneratorControl = connect(mapStateToProps)(ConnectedEmojisGeneratorControl);

export default EmojisGeneratorControl;