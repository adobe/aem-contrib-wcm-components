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

import {Component, Input} from "@angular/core";
import {AbstractRoutedCoreComponent} from "../../../AbstractRoutedCoreComponent";
import {RoutedCoreComponentModel} from "../../../model/RoutedCoreComponentModel";

export interface ListV2Item extends RoutedCoreComponentModel{
    url?:string
    lastModified?:number
    lastModifiedFormatted?:string
    description?:string
    path:string
    title:string
}


export interface ListV2Model{
    items:ListV2Item[]
    dateFormatString: string
    showDescription: boolean
    showModificationDate: boolean
    linkItems: boolean
}

export function ListV2IsEmptyFn(props:ListV2Model): boolean{
    return props.items == null || props.items.length === 0;
}


@Component({
    selector: 'core-list-v2',
    templateUrl: './list.v2.component.html'
})
export class ListV2Component extends AbstractRoutedCoreComponent implements ListV2Model{

    class = 'cmp-list';

    @Input() items:ListV2Item[];
    @Input() dateFormatString;
    @Input() showDescription;
    @Input() showModificationDate;
    @Input() linkItems;

    get isEmpty(): boolean {
        return ListV2IsEmptyFn(this);
    }
}