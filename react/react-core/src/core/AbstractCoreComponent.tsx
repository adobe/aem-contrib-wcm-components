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

import React from "react";
import PlaceHolder from "./common/placeholder";

export interface CoreComponentModel {
    hidePlaceHolder: boolean
    isInEditor:boolean
}

export interface CoreComponentState {

}


/**
 * AbstractCoreComponent - provides abstraction and helper methods to show a placeholder if the component is empty and author mode is on.
 */
abstract class AbstractCoreComponent<Model extends CoreComponentModel, State extends CoreComponentState> extends React.Component<Model,State> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };

    abstract isEmpty():boolean;

    abstract renderComponent():JSX.Element;

    getEmptyPlaceHolderText():string{
        return '';
    }

    __hidePlaceHolder():boolean{
        return this.props.hidePlaceHolder;
    }

    __renderPlaceHolder(title?:string, emptyText?:string):JSX.Element{
        return(
            <PlaceHolder
                emptyTextAppend={emptyText}
                hidePlaceHolder={this.__hidePlaceHolder()}
                isEmpty={this.isEmpty()}
                componentTitle={title}
            />
        )
    }

    render(){
        const isEmpty:boolean = this.isEmpty();

        return (
            <>
                { !isEmpty &&
                    this.renderComponent()
                }
                {
                    this.props.isInEditor && this.__renderPlaceHolder(this.getEmptyPlaceHolderText())
                }
            </>
        )
    }

}

export default AbstractCoreComponent;