import {Component, HostBinding, Input} from "@angular/core";
import {ContainerProperties} from "../../../common";
import {AbstractContainerComponent} from "../../AbstractContainerComponent";

interface AccordionV1Properties extends ContainerProperties{
    expandedItems: string[]
    singleExpansion: boolean
}

@Component({
    selector: 'core-accordion-v1',
    host: {
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath',
    },
    templateUrl: './accordion.v1.component.html'
})
export class AccordionV1Component extends AbstractContainerComponent implements AccordionV1Properties {
    @Input() singleExpansion: boolean;
    @Input() expandedItems: string[] = [];

    @HostBinding('class') class = 'cmp-accordion';

    getHostClassNames(): string {
        return 'cmp-accordion';
    }

    get isActiveItemNameSet(){
        return !!this.expandedItems && this.expandedItems.length > 0;
    }

    onClick(itemKey){

        const isActive = this.expandedItems.indexOf(itemKey) > -1;
        const isSingleExpansion = this.singleExpansion;

        if(isSingleExpansion){
            this.expandedItems = (isActive) ? [] : [itemKey];
        }else{
            if(isActive){
                const index =  this.expandedItems.indexOf(itemKey);
                this.expandedItems.splice( index );
            }else{
                this.expandedItems.push(itemKey);
            }
        }
    }

    isItemExpanded(itemKey){
        return this.expandedItems.indexOf(itemKey) > -1;
    }

    getButtonClass(itemKey){
        return this.isItemExpanded(itemKey) ? `${this.class}__button ${this.class}__button--expanded` : `${this.class}__button`;
    }

    getItemStyle(itemKey:string){
        const display = this.isItemExpanded(itemKey) ? 'block': 'none';
        return { 'display' : display};
    }

    getItemClass(itemKey){
        return this.isItemExpanded(itemKey) ? `${this.class}__panel ${this.class}__panel--expanded`: `${this.class}__panel ${this.class}__panel--hidden`;
    }

    getButtonTitle(itemKey:string){
        return this.cqItems[itemKey]["cq:panelTitle"];
    }

}

