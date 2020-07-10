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

import {AbstractCoreComponent} from "./AbstractCoreComponent";
import {Input} from "@angular/core";
import {RoutedCoreComponentModel} from "./model/RoutedCoreComponentModel";


/**
 * AbstractRoutedCoreComponent
 * This core component contains 1 or more links.
 * We want to be able to control SPA routing with a property coming from the model.
 */
export abstract class AbstractRoutedCoreComponent extends AbstractCoreComponent implements RoutedCoreComponentModel{

    /**
     * Flag the entire core component to have routed links
     */
    @Input() routed = false;

    /**
     * Determine if an individual item (such as navigation entry or list link) should be routed or not.
     * To be routed the following conditions must be met:
     * Condition 1: The item should NOT explicitly have routed with a flag false present
     * Condition 2: The item explicitly has the flag present and set to true OR
     * Condition 3: The entire component has the routed flag set to true
     * @param item
     */
    isItemRouted(item:RoutedCoreComponentModel): boolean{

        return (item.routed !== false) && (item.routed === true || this.routed === true);
    }

}