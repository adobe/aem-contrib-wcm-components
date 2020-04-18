import React from "react";
import {AbstractCoreComponent, CoreComponentModel, CoreComponentState} from "../../../AbstractCoreComponent";


export function SeparatorV1IsEmptyFn(props:CoreComponentModel): boolean{
    return false
}

export class SeparatorV1<Model extends CoreComponentModel, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };


    constructor(props: Model) {
        super(props, 'cmp-separator');
    }

    isEmpty(): boolean{
        return SeparatorV1IsEmptyFn(this.props);
    }

    getEmptyPlaceHolderText(): string {
        return 'Contrib Separator V2';
    }

    renderComponent(): JSX.Element {
        return (
            <div className={this.baseCssCls}>
                <hr className={this.baseCssCls + '__horizontal-rule'}/>
            </div>
        )
    }


}