import React, { MouseEvent, Component } from 'react';
import {ButtonV1, WCMMode,EditorContext, setEditorContext} from "aem-core-components-contributions-react-core";
//@ts-ignore
import { createCustomElement, DOMModel, byChildContentVal, byAttrVal, registerEvent } from "@adobe/react-webcomponent";
import MetaUtils from '../../utils/MetaUtils';




class ButtonModel extends DOMModel {
    @byAttrVal text?: string;
    @byAttrVal link?: string;
    @byAttrVal icon?: string;
}

class ReactButton extends Component<ButtonModel> {

    handleOnClick(event:MouseEvent){
        console.log("event", event);
        alert("captured!");
    }

    render() {
        return (
            <ButtonV1
                handleOnClick={this.handleOnClick}
                text={this.props.text}
                icon={this.props.icon}
                link={this.props.link}
            />
        )
    }
}
const wcmmode:WCMMode = MetaUtils.getWcmMode();

const editContext: EditorContext = {wcmmode:wcmmode};
const ButtonCustomElement = createCustomElement(setEditorContext(ReactButton, editContext), ButtonModel, "element");
window.customElements.define("core-button", ButtonCustomElement);