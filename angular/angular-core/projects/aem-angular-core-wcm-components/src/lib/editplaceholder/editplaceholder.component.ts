import {Component, Input} from "@angular/core";

export interface PlaceHolderModel {
    componentTitle?: string
    classAppend?: string
    emptyTextAppend?: string
    emptyText:string
    placeHolderCssClass:string
}
@Component({
    selector: 'core-placeholder',
    templateUrl: './editplaceholder.component.html',
})
export class EditPlaceholderComponent implements PlaceHolderModel{

    static DEFAULT_EMPTY_TEXT_LABEL: string = 'Please configure the component';
    @Input() classAppend?: string;
    @Input() componentTitle?: string;
    @Input() emptyTextAppend?: string;

    get emptyText() {
        const part1: string = (this.componentTitle != null && this.componentTitle.length > 0) ?  this.componentTitle +  ' - ' : '';
        const part2: string = (this.emptyTextAppend != null) ?  this.emptyTextAppend : EditPlaceholderComponent.DEFAULT_EMPTY_TEXT_LABEL;
        return  part1 + part2;
    }

    get placeHolderCssClass():string{
        return 'cq-placeholder ' + this.classAppend;
    }

}