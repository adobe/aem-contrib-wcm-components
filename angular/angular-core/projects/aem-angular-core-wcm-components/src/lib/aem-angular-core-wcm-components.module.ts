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
import {NgModule, Type} from '@angular/core';
import {ButtonV1Component} from "./authoring/button/v1/button.v1.component";
import {EditPlaceholderComponent} from "./editplaceholder/editplaceholder.component";
import {DefaultV1Component} from "./authoring/default/v1/default.v1.component";
import {SafeHtmlPipe} from "./pipes/safeHtml.pipe";
import {DownloadV1Component} from "./authoring/download/v1/download.v1.component";
import {ImageV2Component} from "./authoring/image/v2/image.v2.component";
import {SeparatorV1} from "./authoring/separator/v1/separator.v1.component";
import {TitleV2} from "./authoring/title/v2/title.v2.component";
import {TextV2} from "./authoring/text/v2/text.v2.component";
import {ListV2Component} from "./authoring/list/v2/list.v2.component";
import {TeaserV1Component} from "./authoring/teaser/v1/teaser.v1.component";
import {BreadCrumbV2Component} from "./layout/breadcrumb/v2/breadcrumb.v2.component";
import {NavigationV1Component} from "./layout/navigation/navigation.v1.component";
import {LanguageNavigationV1Component} from "./layout/language-navigation/v1/language-navigation.v1.component";
import {DefaultNavigationUtilityServiceImpl, NAVIGATION_UTIL_SERVICE, NavigationUtilityService} from "./services/NavigationUtilityService";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

export interface NavigationUtilityConfig {
    navigatonUtilityServiceImpl: Type<NavigationUtilityService>;
}

@NgModule({
    imports: [CommonModule, RouterModule],
    providers: [
        {provide: NAVIGATION_UTIL_SERVICE, useClass: DefaultNavigationUtilityServiceImpl}
    ],
    declarations: [
        EditPlaceholderComponent,
        DownloadV1Component,
        ImageV2Component,
        SeparatorV1,
        BreadCrumbV2Component,
        TitleV2,
        TextV2,
        ListV2Component,
        NavigationV1Component,
        LanguageNavigationV1Component,
        TeaserV1Component,
        ButtonV1Component,
        DefaultV1Component,
        SafeHtmlPipe,
    ],
    exports: [
        EditPlaceholderComponent,
        DefaultV1Component,
        ButtonV1Component,
        DownloadV1Component,
        ImageV2Component,
        SeparatorV1,
        TitleV2,
        TextV2,
        ListV2Component,
        TeaserV1Component,
        BreadCrumbV2Component,
        NavigationV1Component,
        LanguageNavigationV1Component
    ],
    entryComponents: [
        EditPlaceholderComponent,
        DefaultV1Component,
        ButtonV1Component,
        DownloadV1Component,
        ImageV2Component,
        SeparatorV1,
        TitleV2,
        TextV2,
        ListV2Component,
        TeaserV1Component,
        BreadCrumbV2Component,
        NavigationV1Component,
        LanguageNavigationV1Component
    ],
})
export class AemAngularCoreWcmComponentsModule {
}
