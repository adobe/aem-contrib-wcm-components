import React from 'react';
import {CoreComponent} from '../../../types';
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface TextV2Model extends CoreComponent{
    text?: string;
    isRichText?: boolean
}

export function TextV2IsEmptyFn(props:TextV2Model): boolean{
    return props.text == null || props.text.length === 0;
}

export class TextV2<Model extends TextV2Model> extends AbstractCoreComponent<Model, any> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isRichText: false
    };

    isEmpty(): boolean{
        return TextV2IsEmptyFn(this.props);
    }

    getEmptyPlaceHolderText(): string {
        return 'Contrib Text V2';
    }

    renderRichText(){
        const text:string = this.props.text as string;
        return (
            <div className="cmp-text" dangerouslySetInnerHTML={{__html: text}}></div>
        )
    }

    renderPlainText(){
        return (
            <div className="cmp-text">
                <p className="cmp-text__paragraph">{this.props.text}</p>
            </div>
        )
    }


    renderComponent(): JSX.Element {
        return (this.props.isRichText) ? this.renderRichText() : this.renderPlainText();
    }


}