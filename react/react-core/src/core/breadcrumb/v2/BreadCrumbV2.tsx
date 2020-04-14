import React from 'react';
import {CoreComponent} from "../../../types";
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface BreadCrumbV2ItemModel {
    active: boolean
    url: string
    title: string
}

export interface BreadCrumbV2Model extends CoreComponent {
    items: BreadCrumbV2ItemModel[]
    ariaLabelI18n: string
}


export function BreadCrumbV2IsEmptyFn(props:BreadCrumbV2Model): boolean{
    return props.items == null || props.items.length === 0;
}

export class BreadCrumbV2<Model extends BreadCrumbV2Model> extends AbstractCoreComponent<Model, any> {

    public static defaultProps = {
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