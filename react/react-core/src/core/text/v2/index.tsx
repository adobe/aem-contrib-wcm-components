import React from 'react';
import {CoreComponent} from '../../../types';
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface TextV2Model extends CoreComponent{
    text: string;
    type?: string;
    linkDisabled: boolean
}

export function TextV2IsEmptyFn(props:TextV2Model): boolean{
    return props.text == null || props.text.length === 0;
}

export class TextV2<Model extends TextV2Model> extends AbstractCoreComponent<Model> {

    isEmpty(): boolean{
        return TextV2IsEmptyFn(this.props);
    }

    getEmptyPlaceHolderText(): string {
        return 'Contrib Text V2';
    }

    renderComponent(): JSX.Element {
        return <div dangerouslySetInnerHTML={{__html: this.props.text}}></div>;
    }


}