import {TitleV2, TitleV2IsEmptyFn} from "aem-core-components-contributions-react-core/dist/TitleV2";
import {BreadCrumbV2, BreadCrumbV2IsEmptyFn} from "aem-core-components-contributions-react-core/dist/BreadCrumbV2";
import {TextV2, TextV2IsEmptyFn} from "aem-core-components-contributions-react-core/dist/TextV2";
import {NavigationV1} from "aem-core-components-contributions-react-core/dist/NavigationV1";
import {ButtonV1, ButtonV1IsEmptyFn} from "aem-core-components-contributions-react-core/dist/ButtonV1";
import {ImageV2, ImageV2IsEmptyFn} from "aem-core-components-contributions-react-core/dist/ImageV2";
import {LanguageNavigationV1} from "aem-core-components-contributions-react-core/dist/LanguageNavigationV1";
import {TeaserV1, TeaserV1IsEmptyFn} from "aem-core-components-contributions-react-core/dist/TeaserV1";
import {DownloadV1, DownloadV1IsEmptyFn} from "aem-core-components-contributions-react-core/dist/DownloadV1";
import {SeparatorV1, SeparatorV1IsEmptyFn} from "aem-core-components-contributions-react-core/dist/SeparatorV1";
import {ListV2, ListV2IsEmptyFn} from "aem-core-components-contributions-react-core/dist/ListV2";


import {ContainerV1, ContainerV1IsEmptyFn} from "aem-core-components-contributions-react-core-spa/dist/ContainerV1";
import {TabsV2, TabsV2IsEmptyFn} from "aem-core-components-contributions-react-core-spa/dist/AccordionV1";
import {CarouselV1, CarouselV1IsEmptyFn} from "aem-core-components-contributions-react-core-spa/dist/CarouselV1";
import {AccordionV1, AccordionV1IsEmptyFn} from "aem-core-components-contributions-react-core-spa/dist/AccordionV1";


import {MapTo, withComponentMappingContext, Container} from '@adobe/cq-react-editable-components';

import withRoute from './utils/RouteHelper';
import ContribPage from './components/Page';
import Demo from './components/Demo';

MapTo('contrib/wcm/components/navigation')(withComponentMappingContext(NavigationV1));
MapTo('contrib/wcm/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo('contrib/wcm/components/languagenavigation')(withComponentMappingContext(LanguageNavigationV1));
MapTo('contrib/wcm/components/list')(ListV2, {isEmpty: ListV2IsEmptyFn});
MapTo('contrib/wcm/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});
MapTo('contrib/wcm/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo('contrib/wcm/components/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
MapTo('contrib/wcm/components/breadcrumb')(withComponentMappingContext(BreadCrumbV2), {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('contrib/wcm/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('contrib/wcm/components/teaser')(withComponentMappingContext(TeaserV1), {isEmpty: TeaserV1IsEmptyFn});
MapTo('contrib/wcm/components/image')(withComponentMappingContext(ImageV2), {isEmpty: ImageV2IsEmptyFn});
MapTo('contrib/wcm/components/title')(withComponentMappingContext(TitleV2), {isEmpty: TitleV2IsEmptyFn});


MapTo('contrib/wcm/components/tabs')(withComponentMappingContext(TabsV2), {isEmpty: TabsV2IsEmptyFn});
MapTo('contrib/wcm/components/accordion')(withComponentMappingContext(AccordionV1), {isEmpty: AccordionV1IsEmptyFn});
MapTo('contrib/wcm/components/carousel')(withComponentMappingContext(CarouselV1), {isEmpty: CarouselV1IsEmptyFn});
MapTo('contrib/wcm/components/container')(withComponentMappingContext(ContainerV1), {isEmpty: ContainerV1IsEmptyFn});

MapTo('core-components-examples/components/demo')(withComponentMappingContext(Demo));
MapTo('core-components-examples/components/demo/component')(withComponentMappingContext(Container));
MapTo('contrib/wcm/components/page/react-spacomponents-page')(withComponentMappingContext(withRoute(ContribPage)), {});

