import React, { MouseEvent, Component } from 'react';


import {ButtonV1, ButtonV1Model,EditorContext, setEditorContext} from "@adobe/core-contrib-core";
//@ts-ignore
import { createCustomElement, DOMModel, byContentVal, byAttrVal, registerEvent } from "@adobe/react-webcomponent";
import MetaUtils from '../../utils/MetaUtils';


interface SubModel extends ButtonV1Model{
    testProp?: string;
}

class ButtonSub extends ButtonV1<SubModel>{
    constructor(props:SubModel) {
        super(props);
    }
    getContent(){
        const el = super.getContent();
        return (<span>overridden! {el}</span>);
    }
}


class ButtonModel extends DOMModel {
    @byContentVal text: string = "something";
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
            <ButtonSub
                handleOnClick={this.handleOnClick}
                text={this.props.text}
                icon={this.props.icon}
                link={this.props.link}
            />
        )
    }
}
const wcmmode:string = MetaUtils.getWcmMode();

const editContext: EditorContext = {wcmmode:wcmmode};
const ButtonCustomElement = createCustomElement(setEditorContext(ReactButton, editContext), ButtonModel, "element");
window.customElements.define("core-button", ButtonCustomElement);