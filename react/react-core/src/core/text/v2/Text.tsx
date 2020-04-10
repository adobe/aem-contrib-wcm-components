import React from 'react';
import { TextV2Model } from '../../../types';
import {AbstractCoreComponent} from "../../AbstractCoreComponent";

export function isEmpty(props:TextV2Model): boolean{
    return props.text == null || props.text.length === 0;
}

export class Text<Model extends TextV2Model> extends AbstractCoreComponent<TextV2Model> {

    isEmpty(): boolean{
        return isEmpty(this.props);
    }

    render(){

        const isEmpty:boolean = this.isEmpty();

        return (
            <>
                { !isEmpty &&
                    <div dangerouslySetInnerHTML={{__html: this.props.text}}></div>         
                }
                {
                    this.__renderPlaceHolder('Contrib Text V2')
                }
            </>
        )
    }
}