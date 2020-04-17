import React from "react";
import {Container} from '@adobe/cq-react-editable-components';

export class AbstractCoreContainerComponent extends Container {

    get placeholderComponent() {

        if(!this.props.cqItemsOrder || this.props.cqItemsOrder.length === 0){
            return super.placeholderComponent;
        }else{
            return null;
        }
    }
}