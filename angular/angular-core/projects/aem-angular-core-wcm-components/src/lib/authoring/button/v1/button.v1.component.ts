/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import {Component, EventEmitter, HostBinding, Input} from '@angular/core';
import {AbstractRoutedCoreComponent} from "../../../AbstractRoutedCoreComponent";
import {RoutedCoreComponentModel} from "../../../model/RoutedCoreComponentModel";

export interface ButtonV1Model extends RoutedCoreComponentModel{
    text?: string;
    link?: string;
    icon?: string;
    ariaLabel?: string;
}

@Component({
    selector: 'core-button-v1',
    templateUrl: './button.v1.component.html',
})
export class ButtonV1Component extends AbstractRoutedCoreComponent implements ButtonV1Model{

    @HostBinding('class') class = 'cmp-button';
    @Input() text?;
    @Input() link?;
    @Input() icon?;
    @Input() ariaLabel?;

    clickRequest = new EventEmitter();

    get iconClass():string{
        return `${this.class}__icon __icon--${this.icon}`;
    }

    onClick() {
        this.clickRequest.emit();
    }

    get isEmpty(): boolean {
        return ButtonV1IsEmptyFn(this);
    }
}

export function ButtonV1IsEmptyFn(props:ButtonV1Model): boolean{
    return props.text == null || props.text.trim().length === 0;
}