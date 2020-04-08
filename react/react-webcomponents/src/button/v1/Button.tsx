import React, { Component } from 'react';

import {Button} from "@adobe/core-contrib-core/dist/index";

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

const ButtonCustomElement = createCustomElement(ReactButton, ButtonModel, "element");
window.customElements.define("core-button", ButtonCustomElement);