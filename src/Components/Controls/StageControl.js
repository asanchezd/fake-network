import React, {Component} from "react";
import CreateFakeNewsControl from "./CreateFakeNewsControl";
import ManagementPanelControl from "./ManagementPanelControl";
import IntroInstructionsControl from "./IntroInstructionsControl";
import ProgressControl from "./ProgressControl";

class StageControl extends Component{
    render(){
        return(
            <table className="stage-table">
                <tbody>
                    <tr>
                        <td>
                            <CreateFakeNewsControl/>
                            <IntroInstructionsControl/>
                            <ProgressControl/>
                        </td>
                        <td>
                            <ManagementPanelControl/>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default StageControl;