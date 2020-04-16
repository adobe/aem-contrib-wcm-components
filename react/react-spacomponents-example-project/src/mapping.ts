import {BreadCrumbV2IsEmptyFn, TextV2 ,ButtonV1IsEmptyFn,TextV2IsEmptyFn} from "aem-core-components-contributions-react-core";
import {
    TabsV2,TabsV2IsEmptyFn,
    AccordionV1, AccordionV1IsEmptyFn,
    CarouselV1,CarouselV1IsEmptyFn,
    ContainerV1, ContainerV1IsEmptyFn,
    SpaBreadCrumbV2,
    SpaButtonV1
} from "aem-core-components-contributions-react-spa";


import {MapTo} from '@adobe/cq-react-editable-components';
import {withComponentMappingContext } from "@adobe/cq-react-editable-components";
import withRoute from './utils/RouteHelper';
import ContribPage from './components/Page';


MapTo('core/wcm/components/text/v2/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
MapTo('contrib/wcm/components/breadcrumb')(withComponentMappingContext(SpaBreadCrumbV2), {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('contrib/wcm/components/button')(SpaButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('contrib/wcm/components/page/react-spacomponents-page')(withComponentMappingContext(withRoute(ContribPage)), {});
MapTo('contrib/wcm/components/tabs')(withComponentMappingContext(TabsV2), {isEmpty: TabsV2IsEmptyFn});
MapTo('contrib/wcm/components/accordion')(withComponentMappingContext(AccordionV1), {isEmpty: AccordionV1IsEmptyFn});
MapTo('contrib/wcm/components/carousel')(withComponentMappingContext(CarouselV1), {isEmpty: CarouselV1IsEmptyFn});
MapTo('contrib/wcm/components/container')(withComponentMappingContext(ContainerV1), {isEmpty: ContainerV1IsEmptyFn});