import React from 'react';
import { TextV2Model } from '../../../types';
import PlaceHolder from "../../common/placeholder";

export function isEmpty(props:TextV2Model): boolean{
    return props.text == null || props.text.length === 0;
}

export class Text<Model extends TextV2Model> extends React.Component<TextV2Model> {

    __isEmpty(): boolean{
        return isEmpty(this.props);
    }

    render(){

        const isEmpty:boolean = this.__isEmpty();

        return (
            <>
                { !isEmpty &&
                    <div dangerouslySetInnerHTML={{__html: this.props.text}}></div>         
                }
            
                <PlaceHolder 
                    isEmpty={isEmpty}  
                    componentTitle={'Contrib Text V2'}
                />
            </>
        )
    }
}