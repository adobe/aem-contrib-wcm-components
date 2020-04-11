import React, { MouseEvent, Component } from 'react';
import {WCMMode, BreadCrumbV2ItemModel} from "@adobe/core-contrib-core";

import {BreadCrumbV2,EditorContext, setEditorContext} from "@adobe/core-contrib-core";
//@ts-ignore
import { createCustomElement, DOMModel, byChildrenRefArray, byBooleanAttrVal, byAttrVal, registerEvent } from "@adobe/react-webcomponent";
import MetaUtils from '../../utils/MetaUtils';



class BreadCrumbItemModel extends DOMModel implements BreadCrumbV2ItemModel{
    @byBooleanAttrVal() active: boolean = false
    @byAttrVal() url: string = ""
    @byAttrVal() title: string = ""
}

class BreadCrumbModel extends DOMModel{
    @byChildrenRefArray("div.breadcrumb-item", BreadCrumbItemModel) items: BreadCrumbItemModel[] = [];
}

class ReactBreadCrumb extends Component<BreadCrumbModel> {
    render() {
        return (
            <BreadCrumbV2
                items={this.props.items}
                ariaLabelI18n={'BreadCrumb'}
            />
        )
    }
}
const wcmmode:WCMMode = MetaUtils.getWcmMode();

const editContext: EditorContext = {wcmmode:wcmmode};
const ButtonCustomElement = createCustomElement(setEditorContext(ReactBreadCrumb, editContext), BreadCrumbModel, "container");
window.customElements.define("core-breadcrumb", ButtonCustomElement);