import React, {MouseEvent} from 'react';

export interface PlaceHolderModel extends EditorContext {
    hidePlaceHolder: boolean
    isEmpty: boolean
    componentTitle?: string
    classAppend?: string
    emptyTextAppend?: string
}

export type WCMMode = 'edit' | 'disabled' | 'preview';

export interface EditorContext {
    wcmmode?: WCMMode
}

export interface CoreComponent {
    hidePlaceHolder: boolean
}

export interface ButtonV1Model extends CoreComponent{
    text?: string;
    link?: string;
    icon?: string;
    ariaLabel?: string;
    handleOnClick?(event: MouseEvent): void
}

export interface TextV2Model extends CoreComponent{
    text: string;
    type?: string;
    linkDisabled: boolean
}