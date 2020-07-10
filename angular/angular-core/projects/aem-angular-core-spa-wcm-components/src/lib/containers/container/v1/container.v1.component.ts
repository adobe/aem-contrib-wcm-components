import {Component, HostBinding, Input} from "@angular/core";
import {AEMResponsiveGridComponent} from "@adobe/cq-angular-editable-components";

enum ContainerLayout {
    SIMPLE = "simple",
    RESPONSIVEGRID = "responsiveGrid"
}

interface ContainerV1Properties{
    layout: ContainerLayout;
    id: string;
    backgroundStyle: string;
}
@Component({
    selector: 'core-container-v1',
    host: {
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath'
    },
    templateUrl: './container.v1.component.html'
})
export class ContainerV1Component extends AEMResponsiveGridComponent implements ContainerV1Properties{

    @Input() layout: ContainerLayout;
    @Input() id: string;
    @Input() backgroundStyle: string;

    @HostBinding('class') class = 'cmp-container';

    showResponsiveGrid():boolean{
        return this.layout === ContainerLayout.RESPONSIVEGRID;
    }

    get cssStyles(){
        return {
            background: this.backgroundStyle
        }
    }
}