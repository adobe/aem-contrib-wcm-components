import React, { MouseEvent, Component } from 'react';
import {ButtonV1, ButtonV1Model, WCMMode,EditorContext, setEditorContext} from "aem-core-components-contributions-react-core";
//@ts-ignore
import { createCustomElement, DOMModel, byChildContentVal, byAttrVal, registerEvent } from "@adobe/react-webcomponent";
import MetaUtils from '../../utils/MetaUtils';




class ButtonModel extends DOMModel implements ButtonV1Model{
    @byAttrVal text?: string;
    @byAttrVal link?: string;
    @byAttrVal icon?: string;
    isInEditor = false;
    hidePlaceHolder = false;
}

class ReactButton extends Component<ButtonModel> {

    handleOnClick(event:MouseEvent){
        console.log("event", event);
    }

    render() {
        return (
            <ButtonV1 {...this.props}
                handleOnClick={this.handleOnClick}
            />
        )
    }
}
const wcmmode:WCMMode = MetaUtils.getWcmMode();

const editContext: EditorContext = {wcmmode:wcmmode};
const ButtonCustomElement = createCustomElement(setEditorContext(ReactButton, editContext), ButtonModel, "element");
window.customElements.define("core-button", ButtonCustomElement);