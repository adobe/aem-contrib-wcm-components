import React, {MouseEvent} from 'react';

export interface PlaceHolderModel extends EditorContext {
    isEmpty: boolean
    componentTitle?: string
    classAppend?: string;
    emptyTextAppend?: string;
}

export type WCMMode = 'edit' | 'disabled' | 'preview';

export interface EditorContext {
    wcmmode?: WCMMode
}

export interface ButtonV1Model {
    text?: string;
    link?: string;
    icon?: string;
    ariaLabel?: string;
    handleOnClick?(event: MouseEvent): void
}

export interface TextV2Model {
    text: string;
    type?: string;
    linkDisabled: boolean
}