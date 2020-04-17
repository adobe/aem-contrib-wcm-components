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

import React from 'react';
import {CoreComponentModel, CoreComponentState} from "../../../types";
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface BreadCrumbV2ItemModel {
    active: boolean
    url: string
    title: string
}

export interface BreadCrumbV2Model extends CoreComponentModel {
    items: BreadCrumbV2ItemModel[]
    ariaLabelI18n: string
}


export function BreadCrumbV2IsEmptyFn(props:BreadCrumbV2Model): boolean{
    return props.items == null || props.items.length === 0;
}

export class BreadCrumbV2<Model extends BreadCrumbV2Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        isInEditor: false,
        ariaLabelI18n: "BreadCrumbV2",
        hidePlaceHolder: false
    };

    isEmpty(): boolean {
        return BreadCrumbV2IsEmptyFn(this.props)
    }

    getEmptyPlaceHolderText(): string {
        return 'BreadCrumbV2';
    }

    renderBreadCrumbListItem(crumbItem:BreadCrumbV2ItemModel,index:number): JSX.Element{

        const className = 'cmp-breadcrumb__item' + (crumbItem.active ? ' cmp-breadcrumb__item--active' : '');
        const contentIndex:string = index.toString(2);

        return (
            <li className={className}
                key={'crumbitem-' + index}
                itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                {
                    !crumbItem.active && this.renderBreadCrumbLink(crumbItem,index)
                }
                {
                    crumbItem.active && this.renderBreadCrumbSpan(crumbItem,index)
                }
                <meta itemProp="position" content={contentIndex}/>
            </li>
        );
    }

    renderBreadCrumbLink(crumbItem:BreadCrumbV2ItemModel,index:number){
        return (
            <a href={crumbItem.url}
                      className="cmp-breadcrumb__item-link"
                      itemProp="item">
                {this.renderBreadCrumbSpan(crumbItem, index)}
            </a>
        )
    }

    renderBreadCrumbSpan(crumbItem:BreadCrumbV2ItemModel,index:number){
        return <span itemProp="name">{crumbItem.title}</span>
    }

    renderComponent(){
        return (
            <nav className="cmp-breadcrumb"
                 aria-label={this.props.ariaLabelI18n}>
                <ol className="cmp-breadcrumb__list"
                    itemScope itemType="http://schema.org/BreadcrumbList">
                    {this.props.items.map((item, index) => {
                        return this.renderBreadCrumbListItem(item, index)
                    })}
                </ol>
            </nav>
        )
    }

}