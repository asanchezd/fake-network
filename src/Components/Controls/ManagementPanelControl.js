import React, {Component} from 'react';
import ManagementPanelItemControl from './ManagementPanelItemControl';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {AvailableGenerators : state.AvailableGenerators};
}

class ConnectedManagementPanelControl extends Component{
    render(){
        return(
            <ul>{
                this.props.AvailableGenerators.map((item)=><ManagementPanelItemControl key={item.id} item={item}/>)
            }</ul>	
        );
    }
}

const ManagementPanelControl = connect(mapStateToProps)(ConnectedManagementPanelControl);

export default ManagementPanelControl;