/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2020 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

import {ComponentMapping, AEMAllowedComponentsContainerComponent, Utils} from "@adobe/cq-angular-editable-components";
import {Component, HostBinding, Injectable, Input} from "@angular/core";
import {ContainerModel, ContainerProperties, Model} from "../common";

export function ContainerIsEmptyFn(props:ContainerModel){
    return props[":itemsOrder"] == null || props[":itemsOrder"].length === 0;
}

@Component({
    selector: 'aem-core-abstract-container',
    template: ''
})
export class AbstractContainerComponent extends AEMAllowedComponentsContainerComponent implements ContainerProperties{
    @Input() componentMapping: typeof ComponentMapping = ComponentMapping;
    @Input() cqForceReload: boolean = false;
    @Input() cqItems: {[key: string]: Model} = {};
    @Input() cqItemsOrder: string[] = [];
    @Input() cqPath;

    @HostBinding('class') class;

    public get isInEditor(){
        return Utils.isInEditor();
    }
}
