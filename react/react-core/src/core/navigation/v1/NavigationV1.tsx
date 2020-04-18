import React from 'react';
import {CoreComponentModel, CoreComponentState} from "../../../types";
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface HasNavigationItems {
    children:NavigationV1Item[]
}

export interface NavigationV1ItemModel {
    level: number,
    active: boolean,
    title: string,
    url: string,
    lastModified: number,
    description?: string,
    path: string,
}
export interface NavigationV1Item extends NavigationV1ItemModel, HasNavigationItems{

}


export interface NavigationV1Model extends CoreComponentModel, HasNavigationItems{
    accessibilityLabel?: string
}

export function NavigationV1IsEmptyFn(props:NavigationV1Model): boolean{
    return props.children == null || props.children.length === 0;
}

export class NavigationV1<Model extends NavigationV1Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    navChildren: NavigationV1Item[];
    baseCss: string;

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false,
        children: []
    };

    constructor(props:Model) {
        super(props);
        this.baseCss = this.getBaseCssClss();
        this.navChildren = props.children;
    }

    getEmptyPlaceHolderText(): string {
        return 'Contrib Navigation V1';
    }


    isEmpty(): boolean{
        return NavigationV1IsEmptyFn(this.props);
    }

    determineIsActive(item:NavigationV1Item){
        return item.active;
    }

    renderComponent(){

        const item:HasNavigationItems = {
            children: this.navChildren
        };

        return (
            <nav className={this.baseCss}
                 role="navigation"
                 itemScope itemType="http://schema.org/SiteNavigationElement"
                 aria-label={this.props.accessibilityLabel}>
                {this.renderGroup(item)}
            </nav>
        )
    }

    renderGroup(item:HasNavigationItems){
        return (
            <>
                {!!item.children && item.children.length > 0 &&  (
                    <ul className={this.baseCss + '__group'}>
                        {item.children.map(
                            (item,index) => { return this.renderNavItem(item,index)}
                        )}
                    </ul>
                )}
           </>
        )
    }

    renderLink(item:NavigationV1Item, isActive:boolean){
        return (
            <a href={item.url} title={item.title} aria-current={isActive && 'page'}
               className={this.baseCss + '__item-link'}>{item.title}</a>
        )
    }
    renderNavItem(item: NavigationV1Item, index: number) {
        const isActive = this.determineIsActive(item);
        const cssClass = this.baseCss + '__item ' +
                         this.baseCss + '__item--level-' + item.level + ' '
                         + ' ' + this.getExtraNavItemCssClss(item, index)
                         + (isActive ? ' ' + this.baseCss + '__item--active' : '');
        return (
            <li key={this.baseCss + '__item-' + index} className={cssClass}>
                    { this.renderLink(item, isActive) }
                    {
                        !!item.children && item.children.length > 0 && this.renderGroup(item)
                    }
            </li>
        )
    }

    getBaseCssClss() {
        return "cmp-navigation";
    }

    getExtraNavItemCssClss(item: NavigationV1Item, index: number) {
        return "";
    }
}