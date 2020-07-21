import {AbstractCoreComponent, CoreComponentModel, CoreComponentState} from "../../AbstractCoreComponent";
import React from "react";

export interface DefaultV1Model extends CoreComponentModel{
    html: string
}

export function ButtonV1IsEmptyFn(props:DefaultV1Model): boolean{
    return props.html == null || props.html.trim().length === 0;
}

export class DefaultV1Component<Model extends DefaultV1Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false
    };

    constructor(props:Model) {
        super(props, "cmp-default", "Default SPA Component");
    }


    renderComponent(){
          return <div className={"cmp-default-wrapper"} dangerouslySetInnerHTML={{__html: this.props.html}}></div>
    }

    isEmpty(): boolean {
        return ButtonV1IsEmptyFn(this.props);
    }

};