import React from "react";

import ReactDOM from "react-dom";
import {EditorContextProvider} from "@adobe/core-contrib-core";
//@ts-ignore
import {PathUtils} from '@adobe/cq-spa-page-model-manager';
import {BrowserRouter} from 'react-router-dom';
//@ts-ignore
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';


import App from './components/App';

const wcmmode:string = PathUtils.getMetaPropertyValue('cq:wcmmode');

const render = (model:any) => {
    ReactDOM.render((
            <BrowserRouter>
                <EditorContextProvider value={{wcmmode:wcmmode}}>
                    //@ts-ignore
                    <App cqChildren={ model[Constants.CHILDREN_PROP] } cqItems={ model[Constants.ITEMS_PROP] } cqItemsOrder={ model[Constants.ITEMS_ORDER_PROP] }
                         cqPath={ ModelManager.rootPath } locationPathname={ window.location.pathname }/>
                </EditorContextProvider>
            </BrowserRouter>),
        document.getElementById('root'));
};

export default render;