import React from 'react';
import {CoreComponentModel, CoreComponentState} from "../../../types";
import AbstractCoreComponent from "../../AbstractCoreComponent";
import * as moment from 'moment';

export interface ListV2Item {
    url?:string
    lastModified?:number
    description?:string
    path:string
    title:string
}


export interface ListV2Model extends CoreComponentModel{
    items:ListV2Item[]
    dateFormatString: string
    showDescription: boolean
    showModificationDate: boolean
    linkItems: boolean
}

export function ListV2IsEmptyFn(props:ListV2Model): boolean{
    return props.items == null || props.items.length === 0;
}

export class ListV2<Model extends ListV2Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false
    };

    getEmptyPlaceHolderText(): string {
        return 'Contrib List V2';
    }


    isEmpty(): boolean{
        return ListV2IsEmptyFn(this.props);
    }

    renderListItemContent(item:ListV2Item, index:number){

        return (
            <>
                <span className="cmp-list__item-title">{item.title}</span>
                {this.props.showModificationDate && this.renderItemModificationDate(item,index)}
            </>
        )
    }

    renderItemModificationDate(item:ListV2Item, index:number){

        const date:moment.Moment = moment.utc(item.lastModified);
        const lastModifiedString = date.format(this.props.dateFormatString.toUpperCase());

        return (
            <span className="cmp-list__item-date">{lastModifiedString}</span>
        )
    }

    renderListAnchor(item:ListV2Item, index:number){

        return (
            <a className="cmp-list__item-link" href={item.url}>
                {this.renderListItemContent(item,index)}
            </a>
        )
    }

    renderListItemDescription(item: ListV2Item, index: number) {
        return (
            <span className="cmp-list__item-description">${item.description}</span>
        )
    }

    renderListItem(item:ListV2Item, index:number){
        return (
            <li className="cmp-list__item" key={"cmp-list-" + index}>
                <article>
                    {this.props.linkItems && this.renderListAnchor(item,index)}
                    {!this.props.linkItems && this.renderListItemContent(item,index)}
                    {this.props.showDescription && this.renderListItemDescription(item,index)}
                </article>
            </li>
        )
    }

    renderComponent(){

        return (
            <ul className="cmp-list">
                {this.props.items.map((item, index) => this.renderListItem(item, index))}
            </ul>
        )
    }


}