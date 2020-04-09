import React, {MouseEvent} from 'react';
import {ButtonV1Model} from "../../../types";

export class Button<Model extends ButtonV1Model> extends React.Component<ButtonV1Model> {

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

    render(){
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