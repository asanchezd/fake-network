import {gameTick ,gameSave, gameLoad} from '../Store/actions';
import store from '../Store/store';

var GameCore = {

	Init: function(){

		store.dispatch(gameLoad());
		
		var currentTick = 0;

		setInterval(function(){
			currentTick ++;
			store.dispatch(gameTick());
			if(currentTick%30 === 0){
				store.dispatch(gameSave());
			}
		},1000);
		
	},

};

export default GameCore;