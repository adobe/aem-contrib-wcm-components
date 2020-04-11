import {BreadCrumbV2, BreadCrumbV2IsEmptyFn, TextV2, ButtonV1,ButtonV1IsEmptyFn,TextV2IsEmptyFn} from "@adobe/core-contrib-core";
import {MapTo} from '@adobe/cq-react-editable-components';
import Page from './components/Page';


MapTo('core/wcm/components/text/v2/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
MapTo('contrib/wcm/components/breadcrumb')(BreadCrumbV2, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('contrib/wcm/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('contrib/wcm/components/page/react-spacomponents-page')(Page, {});
