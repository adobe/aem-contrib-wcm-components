/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React, {MouseEvent} from 'react';
import {CoreComponentModel, CoreComponentState} from "../../../types";
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface ButtonV1Model extends CoreComponentModel{
    text?: string;
    link?: string;
    icon?: string;
    ariaLabel?: string;
    handleOnClick?(event: MouseEvent): void
}

export function ButtonV1IsEmptyFn(props:ButtonV1Model): boolean{
    return props.text == null || props.text.length === 0;
}

export class ButtonV1<Model extends ButtonV1Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false
    };

    constructor(props:Model) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    getEmptyPlaceHolderText(): string {
        return 'Contrib Button V1';
    }

    handleOnClick(event:MouseEvent){
        if(this.props.handleOnClick){
            this.props.handleOnClick(event);
        }
    }
    getContent(){
        return (
            <>
                { this.props.icon && <span className={'cmp-button__icon cmp-button__icon--' + this.props.icon}></span>  }
                <span className="cmp-button__text">{this.props.text}</span>
            </>
        );
    }

    isEmpty(): boolean{
        return ButtonV1IsEmptyFn(this.props);
    }

    renderComponent(){
        return (
            <div className="button" onClick={this.handleOnClick}>
                {
                    this.props.link &&
                    <a aria-label={this.props.ariaLabel} className="cmp-button" href={this.props.link}>
                        {this.getContent()}
                    </a>
                }
                {   !this.props.link &&
                <button className="cmp-button">
                    {this.getContent()}
                </button>
                }
            </div>
        )
    }
};