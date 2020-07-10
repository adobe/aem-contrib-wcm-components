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

import {AfterViewInit, ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {AEMAllowedComponentsContainerComponent} from "@adobe/cq-angular-editable-components";

const CONTAINER_CLASS_NAMES = 'aem-tabs';

@Component({
    selector: 'core-tabs-v2',
    host: {
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath'
    },
    templateUrl: './tabs.v2.component.html'
})
/**
 * The current component provides the base presentational logic common to containers such as a grid or a page.
 * Container have in common the notion of item holders. Items are represented in the model by the fields _:items_ and _:itemsOrder_
 */
export class TabsV2Component extends AEMAllowedComponentsContainerComponent implements OnInit,AfterViewInit{

    @HostBinding('class') class = 'cmp-tabs';

    activeItemName?:string;
    @Input() activeItem?: string;
    @Input() accessibilityLabel?: string;


    constructor(private changeDetectorRef:ChangeDetectorRef) {
        super();
    }

    isActive(itemKey:string){
        return (this.activeItemName === itemKey);
    }

    getTabClass(itemKey:string){
        return `${this.class}__tab` + ((this.isActive(itemKey) ? ` ${this.class}__tab--active` : ''));
    }

    getTabTitle(itemKey:string){
        return this.getItem(itemKey)['cq:panelTitle'];
    }
    getItemStyle(itemKey:string){
        const display = this.isActive(itemKey) ? 'block': 'none';
        return { 'display' : display};
    }

    onClick(itemKey:string){
        this.activeItemName = itemKey;
    }

    ngOnInit(): void {

        if(this.activeItem && this.activeItem.trim().length > 0 ){
            this.activeItemName = this.activeItem;
        }else{
            this.activeItemName = this.cqItemsOrder && this.cqItemsOrder.length > 0 ? this.cqItemsOrder[0] : '';
        }
        this.changeDetectorRef.detectChanges();

    }

    ngAfterViewInit(): void {

    }

    /**
     * Returns the class names of the container based on the data from the cqModel
     */
    getHostClassNames() {
        return CONTAINER_CLASS_NAMES;
    }

    get activeTabItem(){
        return this.getItem(this.activeItemName);
    }

    get activeTabItemDataPath(){
        return this.getDataPath(this.activeItemName);
    }

    get activeTabItemName(){
        console.log('activeItem', this.activeItemName);
        return this.activeItemName;
    }

    get hostClasses () {
        return this.getHostClassNames();
    }

    get isActiveItemNameSet(){
        return !!this.activeItemName && this.activeItemName.length > 0;
    }

}

