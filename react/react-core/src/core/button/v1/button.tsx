import React, {MouseEvent} from 'react';
import {ButtonV1Model} from "../../../types";
import {AbstractCoreComponent} from "../../AbstractCoreComponent";

export function isEmpty(props:ButtonV1Model): boolean{
    return props.text == null || props.text.length === 0;
}

export class Button<Model extends ButtonV1Model> extends AbstractCoreComponent<ButtonV1Model> {

    constructor(props:Model) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
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
        return isEmpty(this.props);
    }

    render(){

        const isEmpty:boolean = this.isEmpty();

        return (
            <>
                { !isEmpty &&
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
                }
                {
                    this.__renderPlaceHolder('Contrib Button V1')
                }
            </>

        )
    }
};