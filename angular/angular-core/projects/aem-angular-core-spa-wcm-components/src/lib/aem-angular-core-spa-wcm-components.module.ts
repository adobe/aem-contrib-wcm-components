import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";


import {SpaAngularEditableComponentsModule} from "@adobe/cq-angular-editable-components";
import {AccordionV1Component} from "./containers/accordion/v1/accordion.v1.component";
import {CarouselV1Component} from "./containers/carousel/v1/carousel.v1.component";
import {TabsV2Component} from "./containers/tabs/v2/tabs.v2.component";
import {ContainerV1Component} from "./containers/container/v1/container.v1.component";
import {AbstractContainerComponent} from "./containers/AbstractContainerComponent";

@NgModule({
    imports: [CommonModule,SpaAngularEditableComponentsModule],
    declarations: [
        AccordionV1Component,
        CarouselV1Component,
        TabsV2Component,
        ContainerV1Component,
        AbstractContainerComponent,
    ],
    exports: [
        AccordionV1Component,
        CarouselV1Component,
        TabsV2Component,
        ContainerV1Component,
        AbstractContainerComponent
    ]
})
export class AemAngularCoreSpaWcmComponentsModule {
}
