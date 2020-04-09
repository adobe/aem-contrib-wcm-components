import {Button, ButtonV1Model} from "@adobe/core-contrib-core";

import {MapTo} from '@adobe/cq-react-editable-components';

import Page from './components/Page';
import Text from './components/Text';


MapTo('core/wcm/components/text/v2/text')(Text, {isEmpty: (props?:any) => {return !props || !props.text || !(props.text.length > 0)}});
MapTo('contrib/wcm/components/button')(Button, {isEmpty: (props?:ButtonV1Model) => {return !props || !props.text || !(props.text.length > 0)}});
MapTo('contrib/wcm/components/page/react-spacomponents-page')(Page, {});
