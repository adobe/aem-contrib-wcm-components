import {
    ImageV2, ImageV2IsEmptyFn,
    TitleV2, TitleV2IsEmptyFn,
    BreadCrumbV2IsEmptyFn,
    TextV2 ,
    ButtonV1IsEmptyFn,TextV2IsEmptyFn,
    TeaserV1,
    DownloadV1, DownloadV1IsEmptyFn,
    SeparatorV1, SeparatorV1IsEmptyFn,
    ListV2IsEmptyFn,
    TeaserV1IsEmptyFn
} from "aem-core-components-contributions-react-core";
import {
    TabsV2, TabsV2IsEmptyFn,
    AccordionV1, AccordionV1IsEmptyFn,
    CarouselV1,CarouselV1IsEmptyFn,
    ContainerV1, ContainerV1IsEmptyFn,
    SpaBreadCrumbV2,
    SpaButtonV1,
    SpaNavigationV1,
    SpaListV2,
    SpaLanguageNavigationV1
} from "aem-core-components-contributions-react-core-spa";


import { MapTo, Container} from '@adobe/cq-react-editable-components';

import withRoute from './utils/RouteHelper';
import ContribPage from './components/Page';
import Demo from './components/Demo';

MapTo('contrib/wcm/components/languagenavigation')(SpaLanguageNavigationV1);
MapTo('contrib/wcm/components/navigation')(SpaNavigationV1);

MapTo('contrib/wcm/components/list')(SpaListV2, {isEmpty: ListV2IsEmptyFn});
MapTo('contrib/wcm/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});

MapTo('contrib/wcm/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo('contrib/wcm/components/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
MapTo('contrib/wcm/components/breadcrumb')(SpaBreadCrumbV2, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('contrib/wcm/components/button')(SpaButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('contrib/wcm/components/page/react-spacomponents-page')(withRoute(ContribPage), {});
MapTo('contrib/wcm/components/tabs')(TabsV2, {isEmpty: TabsV2IsEmptyFn});
MapTo('contrib/wcm/components/teaser')(TeaserV1, {isEmpty: TeaserV1IsEmptyFn});
MapTo('contrib/wcm/components/image')(ImageV2, {isEmpty: ImageV2IsEmptyFn});
MapTo('contrib/wcm/components/title')(TitleV2, {isEmpty: TitleV2IsEmptyFn});
MapTo('contrib/wcm/components/accordion')(AccordionV1, {isEmpty: AccordionV1IsEmptyFn});
MapTo('contrib/wcm/components/carousel')(CarouselV1, {isEmpty: CarouselV1IsEmptyFn});
MapTo('contrib/wcm/components/container')(ContainerV1, {isEmpty: ContainerV1IsEmptyFn});
MapTo('core-components-examples/components/demo')(Demo);
MapTo('core-components-examples/components/demo/component')(Container);

