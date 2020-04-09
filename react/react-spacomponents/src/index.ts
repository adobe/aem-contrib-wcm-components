import React from "react";
import {Button, ButtonV1Model} from "@adobe/core-contrib-core";

import {MapTo} from '@adobe/cq-react-editable-components';

MapTo('contrib/wcm/components/button')(Button, {isEmpty: (props?:ButtonV1Model) => {return !props || !props.text || !(props.text.length > 0)}});