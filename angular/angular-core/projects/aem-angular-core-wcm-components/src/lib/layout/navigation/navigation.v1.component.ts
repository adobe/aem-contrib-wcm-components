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

import {Component, HostBinding, Inject, Input} from "@angular/core";
import {AbstractRoutedCoreComponent} from "../../AbstractRoutedCoreComponent";
import {BreadCrumbV2ItemModel} from "../breadcrumb/v2/breadcrumb.v2.component";
import {Route} from "@angular/router";
import {RoutedCoreComponentModel} from "../../model/RoutedCoreComponentModel";
import {NavigationItemModel} from "../../model/NavigationItemModel";
import {NAVIGATION_UTIL_SERVICE, NavigationUtilityService} from "../../services/NavigationUtilityService";

export interface NavigationV1Item extends NavigationItemModel{
    level: number,
    active: boolean,
    title: string,
    url: string,
    lastModified: number,
    description?: string,
    path: string,
    children?: NavigationV1Item[]
}

export interface NavigationV1Model extends RoutedCoreComponentModel{
    items:NavigationV1Item[]
    accessibilityLabel?: string
}

export function NavigationV1IsEmptyFn(props:NavigationV1Model): boolean{
    return props.items == null || props.items.length === 0;
}


@Component({
    selector: 'core-navigation-v1',
    templateUrl: './navigation.v1.component.html'
})
export class NavigationV1Component extends AbstractRoutedCoreComponent implements NavigationV1Model {

    @HostBinding('class') class = 'cmp-navigation';

    navigationUtilService: NavigationUtilityService;

    @Input() items: NavigationV1Item[];
    @Input() accessibilityLabel;

    constructor(@Inject(NAVIGATION_UTIL_SERVICE) navigationUtilService: NavigationUtilityService) {
        super();
        this.navigationUtilService = navigationUtilService;
    }

    get isEmpty(): boolean {
        return NavigationV1IsEmptyFn(this);
    }


    getItemCssClass(item:NavigationV1Item):string{
        const active:string = this.isItemActive(item) ? ` ${this.class}__item--active`: '';
        const level:string = ` ${this.class}__item--level-${item.level}`;
        return `${this.class}__item${active}${level}`;
    }

    /**
     * You may overrule this method to determine for example based on current URL / page context whether the item is active.
     * @param item
     */
    isItemActive(item:BreadCrumbV2ItemModel):boolean{
        return this.navigationUtilService.isItemActive(item);
    }
}