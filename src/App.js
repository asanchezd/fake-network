import React, { Component } from "react";
import "./App.css";
import AppLayout from "./Components/Layout/AppLayout";
import GameCore from './Components/GameCore';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComments , faDollarSign, faPlus, faMinus, faShareAlt, faThumbsUp, faHeart, faBullhorn, faSmile, faEnvelope, faPaperPlane, faFrown, faMeh, faComment, faHashtag, faForward, faShare, faRss, faMicrophone} from '@fortawesome/free-solid-svg-icons'
import {Provider} from 'react-redux';
import store from './Store/store'

library.add(faComments);
library.add(faDollarSign);
library.add(faPlus);
library.add(faMinus);
library.add(faShareAlt);
library.add(faThumbsUp);
library.add(faHeart);
library.add(faBullhorn);
library.add(faSmile);
library.add(faEnvelope);
library.add(faFrown);
library.add(faMeh);
library.add(faComment);
library.add(faHashtag);
library.add(faShare);
library.add(faRss);
library.add(faMicrophone);

class App extends Component {
	constructor(props){
		super(props);
		GameCore.Init();
	}
	render() {
		return (
			<Provider store={store}>
				<AppLayout/>
			</Provider>
		);
	}
}

export default App;
