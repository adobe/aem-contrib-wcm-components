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

import {Component, HostBinding, Input} from "@angular/core";
import {AbstractRoutedCoreComponent} from "../../../AbstractRoutedCoreComponent";

export interface TitleV2Model{
    text?: string;
    linkURL?: string;
    linkDisabled: boolean;
    type: string;
}

export function TitleV2IsEmptyFn(props:TitleV2Model): boolean{
    return props.text == null || props.text.trim().length === 0;
}

@Component({
    selector: 'core-title-v2',
    templateUrl: './title.v2.component.html',
})
export class TitleV2 extends AbstractRoutedCoreComponent implements TitleV2Model{

    @HostBinding('class') @Input()  class = 'cmp-title';

    @Input() text?;
    @Input() linkURL?;
    @Input() linkDisabled = false;
    @Input() type = 'h3';

    get isEmpty(): boolean {
        return TitleV2IsEmptyFn(this);
    }

    get hasLink(): boolean{
        return !!this.linkURL && this.linkURL.trim().length > 0;
    }
}