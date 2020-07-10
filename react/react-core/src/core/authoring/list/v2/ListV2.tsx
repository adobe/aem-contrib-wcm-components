import React from 'react';
import {AbstractCoreComponent, CoreComponentModel, CoreComponentState} from "../../../AbstractCoreComponent";

export interface ListV2Item {
    url?:string
    lastModified?:number
    lastModifiedFormatted?:string
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

    constructor(props: Model) {
        super(props, 'cmp-list', 'ListV2');
    }

    isEmpty(): boolean{
        return ListV2IsEmptyFn(this.props);
    }

    renderListItemContent(item:ListV2Item, index:number){

        return (
            <>
                <span className={this.baseCssCls + '__item-title'}>{item.title}</span>
                {this.props.showModificationDate && this.renderItemModificationDate(item,index)}
            </>
        )
    }

    renderItemModificationDate(item:ListV2Item, index:number){

        const dateStringToDisplay = item.lastModifiedFormatted ? item.lastModifiedFormatted : "";
        return (
            <span className={this.baseCssCls + '__item-date'}>{dateStringToDisplay}</span>
        )
    }

    renderListAnchor(item:ListV2Item, index:number){

        return (
            <a className={this.baseCssCls + '__item-link'} href={item.url}>
                {this.renderListItemContent(item,index)}
            </a>
        )
    }

    renderListItemDescription(item: ListV2Item, index: number) {
        return (
            <span className={this.baseCssCls + '__item-description'}>${item.description}</span>
        )
    }

    renderListItem(item:ListV2Item, index:number){
        return (
            <li className={this.baseCssCls + '__item'} key={"cmp-list-" + index}>
                <article>
                    {this.props.linkItems && !!item.url && this.renderListAnchor(item,index)}
                    {!this.props.linkItems && this.renderListItemContent(item,index)}
                    {this.props.showDescription && this.renderListItemDescription(item,index)}
                </article>
            </li>
        )
    }

    renderComponent(){

        return (
            <ul className={this.baseCssCls}>
                {this.props.items.map((item, index) => this.renderListItem(item, index))}
            </ul>
        )
    }


}