import React, {Component} from 'react';
import AnimatedValueControl from './AnimatedValueControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {tryBuyGenerator,trySellGenerator} from '../../Store/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {CurrentMoney : state.CurrentMoney};
}

const mapDispatchToProps = dispatch => {
    return {
        tryBuyGenerator : generatorID => dispatch(tryBuyGenerator(generatorID)),
        trySellGenerator : generatorID => dispatch(trySellGenerator(generatorID))
    }
}

class ConnectedManagementPanelItemControl extends Component{
	increase(id) {
		this.props.tryBuyGenerator(id);
	}
	decrease(id) {
		this.props.trySellGenerator(id);
	}
	render() {
		return (
			<table className={this.props.item.cost <= this.props.CurrentMoney ? 'management-panel-item active' : 'management-panel-item'}>
				<tbody>
					<tr>
						<td>
							<AnimatedValueControl value={this.props.item.amount} effect='flip-h'/>
						</td>
						<td>
							<div>
								{this.props.item.active? this.props.item.name: '----'}
							</div>
							<div className="text-muted small">
								Cost {this.props.item.active? ('$' + this.props.item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")): '----'} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Generation {this.props.item.active? this.props.item.productionPerSecond: '----'} FN/s
							</div>
						</td>	
						<td style={{width:'1%'}}>
							<div className="no-break">
								<span title={`Add new ${this.props.item.name}`} className={this.props.item.cost <= this.props.CurrentMoney ? 'btn active' : 'btn'} onClick={()=>this.increase(this.props.item.id)}><FontAwesomeIcon icon="plus" /></span>&nbsp;&nbsp;
								<span title={`Remove one ${this.props.item.name}`} className={this.props.item.amount > 0 ? 'btn active' : 'btn'} onClick={()=>this.decrease(this.props.item.id)}><FontAwesomeIcon icon="minus" /></span>
							</div>
						</td>		
					</tr>
				</tbody>
			</table>
		)
	}
}

const ManagementPanelItemControl = connect(mapStateToProps,mapDispatchToProps)(ConnectedManagementPanelItemControl);

export default ManagementPanelItemControl;