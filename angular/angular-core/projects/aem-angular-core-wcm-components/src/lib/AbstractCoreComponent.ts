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


import {Input} from "@angular/core";
import {CoreComponentModel} from "./model/CoreComponentModel";
import {Utils} from "@adobe/cq-angular-editable-components";

/**
 * AbstractCoreComponent
 * provides shared functionality / properties across all core component controllers
 */
export abstract class AbstractCoreComponent implements CoreComponentModel{

    /** Force disable the placeholder at all times. This is useful for nested components. **/
    @Input() hidePlaceHolder: boolean = false;

    @Input() cqForceReload = false;
    @Input() cqPath;

    class: string;

    /**
     * Method that needs to be overloaded, to determine whether the component should be treated as 'empty'
     */
    public abstract get isEmpty():boolean;

    /**
     * Returns whether to show the placeholder for the editors, if we cannot display the component.
     */
    public get shouldShowPlaceHolder():boolean {
        return (this.isEmpty && this.isInEditor === true && this.hidePlaceHolder !== true);
    }

    public get isInEditor(){
        return Utils.isInEditor();
    }

}