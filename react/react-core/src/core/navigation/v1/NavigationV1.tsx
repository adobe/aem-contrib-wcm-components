import React from 'react';
import {CoreComponentModel, CoreComponentState} from "../../../types";
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface HasNavigationItems {
    children:NavigationV1Item[]
}

export interface NavigationV1Item extends HasNavigationItems{
    level: number,
    active: boolean,
    title: string,
    url: string,
    lastModified: number,
    description?: string,
    path: string,
}


export interface NavigationV1Model extends CoreComponentModel, HasNavigationItems{
    accessibilityLabel?: string
}

export function NavigationV1IsEmptyFn(props:NavigationV1Model): boolean{
    return props.children == null || props.children.length === 0;
}

export class NavigationV1<Model extends NavigationV1Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    navChildren: NavigationV1Item[];

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false,
        children: []
    };

    constructor(props:Model) {
        super(props);
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
            <nav className="cmp-navigation"
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
                    <ul className="cmp-navigation__group">
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
               className="cmp-navigation__item-link">{item.title}</a>
        )
    }
    renderNavItem(item: NavigationV1Item, index: number) {
        const isActive = this.determineIsActive(item);
        return (
            <li key={'cmp-navigation__item-' + index} className={'cmp-navigation__item cmp-navigation__item--level-' + item.level + (isActive ? ' cmp-navigation__item--active' : '')}>
                    { this.renderLink(item, isActive) }
                    {
                        !!item.children && item.children.length > 0 && this.renderGroup(item)
                    }
            </li>
        )
    }
}