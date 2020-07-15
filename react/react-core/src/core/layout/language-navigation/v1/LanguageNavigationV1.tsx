import React from 'react';
import {CoreComponentState} from "../../../AbstractCoreComponent";
import {NavigationV1, NavigationV1Item, NavigationV1Model} from "../../navigation/v1/NavigationV1";
import {RoutedLink} from "../../../routing/RoutedLink";
import {isItemRouted} from "../../../routing/RoutedCoreComponent";

export interface LanguageNavigationV1Item extends NavigationV1Item {
    level: number,
    active: boolean,
    title: string,
    url: string,
    lastModified: number,
    description?: string,
    path: string,
    locale: string,
    country: string,
    language: string,
    children?: LanguageNavigationV1Item[]
}

export interface LanguageNavigationV1Model extends NavigationV1Model{
    items:LanguageNavigationV1Item[]
    accessibilityLabel?: string
}

export function LanguageNavigationV1IsEmptyFn(props:LanguageNavigationV1Model): boolean{
    return props.items == null || props.items.length === 0;
}

export class LanguageNavigationV1<Model extends LanguageNavigationV1Model, State extends CoreComponentState> extends NavigationV1<Model, State> {

    navChildren: LanguageNavigationV1Item[];

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false,
        items: []
    };

    constructor(props:Model) {
        super(props);
        this.baseCssCls = 'cmp-languagenavigation';
        this.emptyPlaceHolderText = 'LanguageNavigationV1';
        this.navChildren = props.items;
    }

    renderLink(item:LanguageNavigationV1Item, isActive:boolean){

        if(item.level > 0){
            return (
                <RoutedLink
                    isRouted={isItemRouted(this.props, item)}
                    className={this.baseCssCls + '__item-link'}
                    to={item.url}
                    hrefLang={item.language}
                    lang={item.language}
                    rel="alternate"
                    title={item.title}>{item.title}</RoutedLink>
            )
        }else{
            return (
                <span className={ this.baseCssCls + '__item-title'} lang={item.language}>{item.title}</span>
            )
        }

    }

    getExtraNavItemCssClss(item: LanguageNavigationV1Item, index: number) {
        return `${this.baseCssCls}__item--countrycode-${item.country} ${this.baseCssCls}__item--langcode-${item.language}`;
    }

}