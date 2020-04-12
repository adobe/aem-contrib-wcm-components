import React, {MouseEvent} from 'react';
import {CoreComponent} from "../../../types";
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface ButtonV1Model extends CoreComponent{
    text?: string;
    link?: string;
    icon?: string;
    ariaLabel?: string;
    handleOnClick?(event: MouseEvent): void
}

export function ButtonV1IsEmptyFn(props:ButtonV1Model): boolean{
    return props.text == null || props.text.length === 0;
}

export class ButtonV1<Model extends ButtonV1Model> extends AbstractCoreComponent<Model> {

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