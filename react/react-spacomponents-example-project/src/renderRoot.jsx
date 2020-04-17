import React from "react";

import ReactDOM from "react-dom";
import {EditorContextProvider,EditorContextUtils} from "aem-core-components-contributions-react-core";

import {PathUtils} from '@adobe/cq-spa-page-model-manager';
import {BrowserRouter} from 'react-router-dom';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';

import App from './components/App';

const wcmmodeString = PathUtils.getMetaPropertyValue('cq:wcmmode');

const wcmmode = (wcmmodeString != null) ? EditorContextUtils.parseWCMModeFromString(wcmmodeString) : 'disabled';

const render = (model) => {
    ReactDOM.render((
            <BrowserRouter>
                <EditorContextProvider value={{wcmmode:wcmmode}}>

                    {
                        //@ts-ignore
                        (<App cqChildren={ model[Constants.CHILDREN_PROP] } cqItems={ model[Constants.ITEMS_PROP] } cqItemsOrder={ model[Constants.ITEMS_ORDER_PROP] }
                              cqPath={ ModelManager.rootPath } locationPathname={ window.location.pathname }/>
                        )
                    }

                </EditorContextProvider>
            </BrowserRouter>),
        document.getElementById('root'));
};

export default render;