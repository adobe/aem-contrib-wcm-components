import {
    ImageV2, ImageV2IsEmptyFn,
    TitleV2, TitleV2IsEmptyFn,
    BreadCrumbV2IsEmptyFn,
    TextV2 ,
    ButtonV1IsEmptyFn,TextV2IsEmptyFn,
    TeaserV1,
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
    SpaLanguageNavigationV1
} from "aem-core-components-contributions-react-core-spa";


import { MapTo,withComponentMappingContext, Container} from '@adobe/cq-react-editable-components';

import withRoute from './utils/RouteHelper';
import ContribPage from './components/Page';
import Demo from './components/Demo';

MapTo('contrib/wcm/components/language-navigation')(withComponentMappingContext(SpaLanguageNavigationV1));
MapTo('contrib/wcm/components/navigation')(withComponentMappingContext(SpaNavigationV1));

MapTo('contrib/wcm/components/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
MapTo('contrib/wcm/components/breadcrumb')(withComponentMappingContext(SpaBreadCrumbV2), {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('contrib/wcm/components/button')(SpaButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('contrib/wcm/components/page/react-spacomponents-page')(withComponentMappingContext(withRoute(ContribPage)), {});
MapTo('contrib/wcm/components/tabs')(withComponentMappingContext(TabsV2), {isEmpty: TabsV2IsEmptyFn});
MapTo('contrib/wcm/components/teaser')(withComponentMappingContext(TeaserV1), {isEmpty: TeaserV1IsEmptyFn});
MapTo('contrib/wcm/components/image')(withComponentMappingContext(ImageV2), {isEmpty: ImageV2IsEmptyFn});
MapTo('contrib/wcm/components/title')(withComponentMappingContext(TitleV2), {isEmpty: TitleV2IsEmptyFn});
MapTo('contrib/wcm/components/accordion')(withComponentMappingContext(AccordionV1), {isEmpty: AccordionV1IsEmptyFn});
MapTo('contrib/wcm/components/carousel')(withComponentMappingContext(CarouselV1), {isEmpty: CarouselV1IsEmptyFn});
MapTo('contrib/wcm/components/container')(withComponentMappingContext(ContainerV1), {isEmpty: ContainerV1IsEmptyFn});
MapTo('core-components-examples/components/demo')(withComponentMappingContext(Demo));
MapTo('core-components-examples/components/demo/component')(withComponentMappingContext(Container));

