import React, { Component } from 'react';

import Button from "../../../core/button/v1/button";

//@ts-ignore
import { createCustomElement, DOMModel, byContentVal, byAttrVal, registerEvent } from "@adobe/react-webcomponent";

class ButtonModel extends DOMModel {
    @byContentVal text: string = "something";
    @byAttrVal link?: string;
    @byAttrVal icon?: string;
}

class ReactButton extends Component<ButtonModel> {
    constructor(props:ButtonModel) {
        super(props);
    }
    render() {
        return <Button
            text={this.props.text}
            icon={this.props.icon}
            link={this.props.link}/>
    }
}

const ButtonCustomElement = createCustomElement(ReactButton, ButtonModel, "container");
window.customElements.define("core-button", ButtonCustomElement);