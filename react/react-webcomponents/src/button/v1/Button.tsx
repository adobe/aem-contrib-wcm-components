import React, { MouseEvent, Component } from 'react';

import {Button, ButtonV1Model} from "@adobe/core-contrib-core";

//@ts-ignore
import { createCustomElement, DOMModel, byContentVal, byAttrVal, registerEvent } from "@adobe/react-webcomponent";

interface SubModel extends ButtonV1Model{
    testProp?: string;
}

class ButtonSub extends Button<SubModel>{
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

const ButtonCustomElement = createCustomElement(ReactButton, ButtonModel, "element");
window.customElements.define("core-button", ButtonCustomElement);