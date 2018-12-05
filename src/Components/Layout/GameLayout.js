import React, {Component} from "react";
import HeaderControl from "../Controls/HeaderControl";
import FooterControl from "../Controls/FooterControl";
import StageControl from "../Controls/StageControl";

class GameLayout extends Component{
    render(){
        return (
            <>
                <HeaderControl/>
                <StageControl/>
                <FooterControl/>
            </>
        );
    }
}

export default GameLayout;