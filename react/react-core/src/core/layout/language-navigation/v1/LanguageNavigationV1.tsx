import React from 'react';
import {CoreComponentModel, CoreComponentState} from "../../../AbstractCoreComponent";
import {NavigationV1, NavigationV1ItemModel} from "../../navigation/v1/NavigationV1";

export interface HasLanguageNavigationItems{
    children:LanguageNavigationV1Item[]
}

export interface LanguageNavigationV1Item extends HasLanguageNavigationItems,NavigationV1ItemModel{
    locale: string,
    country: string,
    language: string,
}


export interface LanguageNavigationV1Model extends HasLanguageNavigationItems,CoreComponentModel{
    accessibilityLabel?: string
}

export function LanguageNavigationV1IsEmptyFn(props:LanguageNavigationV1Model): boolean{
    return props.children == null || props.children.length === 0;
}

export class LanguageNavigationV1<Model extends LanguageNavigationV1Model, State extends CoreComponentState> extends NavigationV1<Model, State> {

    navChildren: LanguageNavigationV1Item[];

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false,
        children: []
    };

    constructor(props:Model) {
        super(props);
        this.baseCssCls = 'cmp-languagenavigation';
        this.emptyPlaceHolderText = 'LanguageNavigationV1';
        this.navChildren = props.children;
    }

    renderLink(item:LanguageNavigationV1Item, isActive:boolean){

        if(item.level > 0){
            return (
                <a className={this.baseCssCls + '__item-link'}
                   href={item.url}
                   hrefLang={item.language}
                   lang={item.language}
                   rel="alternate"
                   title={item.title}>{item.title}</a>
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