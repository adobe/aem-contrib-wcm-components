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
import {AbstractRoutedCoreComponent} from "../../../AbstractRoutedCoreComponent";
import {NAVIGATION_UTIL_SERVICE, NavigationUtilityService} from "../../../services/NavigationUtilityService";
import {NavigationItemModel} from "../../../model/NavigationItemModel";
import {RoutedCoreComponentModel} from "../../../model/RoutedCoreComponentModel";

export interface BreadCrumbV2ItemModel extends NavigationItemModel{
    active: boolean
    url: string
    title: string
}

export interface BreadCrumbV2Model extends RoutedCoreComponentModel{
    items: BreadCrumbV2ItemModel[]
    ariaLabelI18n: string
}

export function BreadCrumbV2IsEmptyFn(props: BreadCrumbV2Model): boolean {
    return props.items == null || props.items.length === 0;
}

@Component({
    selector: 'core-breadcrumb-v2',
    templateUrl: './breadcrumb.v2.component.html'
})
export class BreadCrumbV2Component extends AbstractRoutedCoreComponent implements BreadCrumbV2Model {

    @HostBinding('class') class = 'cmp-breadcrumb';
    navigationUtilService: NavigationUtilityService;

    @Input() items;
    @Input() ariaLabelI18n;

    constructor(@Inject(NAVIGATION_UTIL_SERVICE) navigationUtilService: NavigationUtilityService) {
        super();
        this.navigationUtilService = navigationUtilService;
    }

    get isEmpty(): boolean {
        return BreadCrumbV2IsEmptyFn(this);
    }

    getItemCssClass(item: BreadCrumbV2ItemModel): string {
        return this.navigationUtilService.isItemActive(item) ? this.class + '__item ' + this.class + '__item--active' : this.class + '__item';
    }


}