import React from 'react';
import AbstractCoreComponent, {CoreComponentModel, CoreComponentState} from "../../AbstractCoreComponent";

export interface TempImageComponentModel extends CoreComponentModel{
    src: string
    alt: string
    displayPopupTitle?: boolean
    title?: string
}

export function ImageV2IsEmptyFn(props:TempImageComponentModel) {
    return (!props.src) || props.src.length === 0;
}

export class ImageV2 extends AbstractCoreComponent<TempImageComponentModel,CoreComponentState> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };

    isEmpty(): boolean {
        return ImageV2IsEmptyFn(this.props);
    }

    renderComponent(): JSX.Element {
        const cssClassName = (this.props.isInEditor) ? 'cmp-image  cq-dd-image' : 'cmp-image';

        return (
            <div className={cssClassName}>
                <img src={this.props.src}
                     className="cmp-image__image"
                     alt={this.props.alt}/>
                {
                    !!(this.props.title) && <span className="cmp-image__title" itemProp="caption">{this.props.title}</span>
                }
                {
                    this.props.displayPopupTitle && (!!this.props.title) && <meta itemProp="caption" content={this.props.title}/>
                }
            </div>
        )
    }

}
