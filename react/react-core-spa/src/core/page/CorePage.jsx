import React from 'react';
//@ts-ignore
import {Page } from "@adobe/cq-react-editable-components";

// This component is a variant of a React Page component mapped to the "structure/page" resource type
// No functionality is changed other than to add an app specific CSS class
export class CorePage extends Page {

    get containerProps() {
        //@ts-ignore
        let attrs = super.containerProps;
        //@ts-ignore
        attrs.className = (attrs.className || '') + ' ContribPage ' + (this.props.cssClassNames || '');
        return attrs
    }
}