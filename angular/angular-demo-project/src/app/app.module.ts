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
import './components/mapping';
import {AemAngularCoreSpaWcmComponentsModule} from "aem-angular-core-spa-wcm-components";
import {AemAngularCoreWcmComponentsModule} from "aem-angular-core-wcm-components";
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {AppComponent} from './app.component';
import {SpaAngularEditableComponentsModule} from '@adobe/cq-angular-editable-components';
import {ModelManagerService} from './components/model-manager.service';
import {TextComponent} from './components/text/text.component';
import {ImageComponent} from './components/image/image.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MenuComponent} from './components/navigation/menu/menu.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [BrowserModule.withServerTransition({appId: 'we-retail-sample-angular'}),
        SpaAngularEditableComponentsModule,
        AemAngularCoreSpaWcmComponentsModule,
        AemAngularCoreWcmComponentsModule,
        AppRoutingModule,
        BrowserTransferStateModule],
    providers: [
        ModelManagerService, {provide: APP_BASE_HREF, useValue: '/'},
    ],
    declarations: [
        AppComponent,
        TextComponent,
        ImageComponent,
        NavigationComponent,
        MenuComponent,
        MainContentComponent
    ],
    entryComponents: [
        TextComponent, ImageComponent, NavigationComponent,
        MainContentComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}

