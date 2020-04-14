import {BreadCrumbV2IsEmptyFn, TextV2, ButtonV1,ButtonV1IsEmptyFn,TextV2IsEmptyFn} from "@adobe/core-contrib-core";
import {TabsV2,TabsV2IsEmptyFn,AccordionV1, AccordionV1IsEmptyFn} from "@adobe/core-contrib-core-spa";

import {MapTo} from '@adobe/cq-react-editable-components';
import SpaBreadCrumb from './components/breadcrumb';
import {withComponentMappingContext } from "@adobe/cq-react-editable-components";
import withRoute from './utils/RouteHelper';
import ContribPage from './components/Page';

MapTo('core/wcm/components/text/v2/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
MapTo('contrib/wcm/components/breadcrumb')(SpaBreadCrumb, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('contrib/wcm/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('contrib/wcm/components/page/react-spacomponents-page')(withComponentMappingContext(withRoute(ContribPage)), {});
MapTo('contrib/wcm/components/tabs')(withComponentMappingContext(TabsV2), {isEmpty: TabsV2IsEmptyFn});
MapTo('contrib/wcm/components/accordion')(withComponentMappingContext(AccordionV1), {isEmpty: AccordionV1IsEmptyFn});