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

import { MapTo, AEMContainerComponent, AEMResponsiveGridComponent } from "@adobe/cq-angular-editable-components";



// import {TabsV2Component} from "aem-angular-core-spa-wcm-components";
// import {AccordionV1Component} from "aem-angular-core-spa-wcm-components";
// import {ContainerIsEmptyFn} from "aem-angular-core-spa-wcm-components";
// import {CarouselV1Component} from "aem-angular-core-spa-wcm-components";
// import {ContainerV1Component} from "aem-angular-core-spa-wcm-components";
// import {ButtonV1Component, ButtonV1IsEmptyFn} from "aem-angular-core-wcm-components";
// import {DefaultV1Component, DefaultV1IsEmptyFn} from "aem-angular-core-wcm-components";
// import {DownloadV1Component, DownloadV1IsEmptyFn} from "aem-angular-core-wcm-components";
// import {ImageV2Component, ImageV2IsEmptyFn} from "aem-angular-core-wcm-components";
// import {SeparatorV1} from "aem-angular-core-wcm-components";
// import {TitleV2} from "aem-angular-core-wcm-components";
// import {TextV2, TextV2IsEmptyFn} from "aem-angular-core-wcm-components";
// import {ListV2Component, ListV2IsEmptyFn} from "aem-angular-core-wcm-components";
// import {TeaserV1Component, TeaserV1IsEmptyFn} from "aem-angular-core-wcm-components";
// import {BreadCrumbV2Component, BreadCrumbV2IsEmptyFn} from "aem-angular-core-wcm-components";
// import {NavigationV1Component, NavigationV1IsEmptyFn} from "aem-angular-core-wcm-components";
// import {LanguageNavigationV1Component} from "aem-angular-core-wcm-components";



import { TextComponent } from "./text/text.component";
import { ImageComponent } from "./image/image.component";
import { NavigationComponent } from "./navigation/navigation.component";

/**
 * Default Edit configuration for the Image component that interact with the Core Image component and sub-types
 *
 * @type EditConfig
 */
const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(cqModel) {
        return !cqModel || !cqModel.src || cqModel.src.trim().length < 1;
    }
};

/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const TextEditConfig = {

    emptyLabel: 'Text',

    isEmpty: function(cqModel) {
        return !cqModel || !cqModel.text || cqModel.text.trim().length < 1;
    }
};

// MapTo('core-components-examples/components/languagenavigation')(LanguageNavigationV1Component,{emptyLabel:'LanguageNavigationV1', isEmpty:NavigationV1IsEmptyFn});
// MapTo('core-components-examples/components/navigation')(NavigationV1Component,{emptyLabel:'NavigationV1', isEmpty:NavigationV1IsEmptyFn});
// MapTo('core-components-examples/components/breadcrumb')(BreadCrumbV2Component,{emptyLabel:'BreadCrumbV2', isEmpty:BreadCrumbV2IsEmptyFn});
// MapTo('core-components-examples/components/list')(ListV2Component,{emptyLabel:'ListV2', isEmpty:ListV2IsEmptyFn});
// MapTo('core-components-examples/components/text')(TextV2,{emptyLabel:'TextV2', isEmpty:TextV2IsEmptyFn});
// MapTo('core-components-examples/components/title')(TitleV2);
// MapTo('core-components-examples/components/teaser')(TeaserV1Component, {emptyLabel:'TeaserV1', isEmpty:TeaserV1IsEmptyFn});
// MapTo('core-components-examples/components/separator')(SeparatorV1);
// MapTo('core-components-examples/components/image')(ImageV2Component,{emptyLabel:'ImageV2', isEmpty:ImageV2IsEmptyFn});
// MapTo('core-components-examples/components/download')(DownloadV1Component,{emptyLabel:'DownloadV1', isEmpty:DownloadV1IsEmptyFn});
// MapTo('contrib/wcm/components/container')(ContainerV1Component,{emptyLabel:'ContainerV1', isEmpty:ContainerIsEmptyFn});
// MapTo('contrib/wcm/components/carousel')(CarouselV1Component,{emptyLabel:'CarouselV1', isEmpty:ContainerIsEmptyFn});
// MapTo('contrib/wcm/components/accordion')(AccordionV1Component, {emptyLabel:'AccordionV1', isEmpty:ContainerIsEmptyFn});
// MapTo('contrib/wcm/components/tabs')(TabsV2Component,{emptyLabel:'AccordionV1', isEmpty:ContainerIsEmptyFn});
// MapTo('we-retail-journal/components/button')(ButtonV1Component, {emptyLabel: 'ButtonV1', isEmpty:ButtonV1IsEmptyFn});
// MapTo('core/wcm/components/default/v1/default')(DefaultV1Component,{emptyLabel:'Default Component', isEmpty:DefaultV1IsEmptyFn});


MapTo('we-retail-journal/components/text')(TextComponent, TextEditConfig);
MapTo('we-retail-journal/components/image')(ImageComponent, ImageEditConfig);
MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
MapTo('we-retail-journal/components/navigation')(NavigationComponent);
MapTo('we-retail-journal/angular/components/structure/app')(AEMContainerComponent);
