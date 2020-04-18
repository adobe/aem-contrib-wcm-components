import AbstractCoreComponent, {CoreComponentModel, CoreComponentState} from "../../AbstractCoreComponent";
import React from "react";


export function SeparatorV1IsEmptyFn(props:CoreComponentModel): boolean{
    return false
}

export class SeparatorV1<Model extends CoreComponentModel, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };

    isEmpty(): boolean{
        return SeparatorV1IsEmptyFn(this.props);
    }

    getEmptyPlaceHolderText(): string {
        return 'Contrib Separator V2';
    }

    renderComponent(): JSX.Element {
        return (
            <div className="cmp-separator">
                <hr className="cmp-separator__horizontal-rule"/>
            </div>
        )
    }


}