import React from 'react';
import {AbstractCoreComponent, CoreComponentModel, CoreComponentState} from "../../../AbstractCoreComponent";

export interface TempImageComponentModel extends CoreComponentModel{
    src: string
    alt: string
    displayPopupTitle?: boolean
    title?: string
}

export function ImageV2IsEmptyFn(props:TempImageComponentModel) {
    return (!props.src) || props.src.length === 0;
}

export class ImageV2<Model extends TempImageComponentModel,State extends CoreComponentState> extends AbstractCoreComponent<Model,State> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };


    constructor(props: Model) {
        super(props, 'cmp-image', 'ImageV2');
    }

    isEmpty(): boolean {
        return ImageV2IsEmptyFn(this.props);
    }

    renderComponent(): JSX.Element {
        const cssClassName = (this.props.isInEditor) ? this.baseCssCls + ' cq-dd-image' : this.baseCssCls;

        return (
            <div className={cssClassName}>
                <img src={this.props.src}
                     className={this.baseCssCls = '__image'}
                     alt={this.props.alt}/>
                {
                    !!(this.props.title) && <span className={this.baseCssCls + '__title'} itemProp="caption">{this.props.title}</span>
                }
                {
                    this.props.displayPopupTitle && (!!this.props.title) && <meta itemProp="caption" content={this.props.title}/>
                }
            </div>
        )
    }

}
