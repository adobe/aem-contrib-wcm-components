import React from "react";

import ReactDOM from "react-dom";

import ScrollToTop from './utils/RouteHelper';
import {BrowserRouter} from 'react-router-dom';
import { Redirect, Route } from 'react-router';
//@ts-ignore
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';

import App from './components/App';

const render = (model:any) => {
    ReactDOM.render((
            <BrowserRouter>     
                     //@ts-ignore
                    <App cqChildren={ model[Constants.CHILDREN_PROP] } cqItems={ model[Constants.ITEMS_PROP] } cqItemsOrder={ model[Constants.ITEMS_ORDER_PROP] }
                         cqPath={ ModelManager.rootPath } locationPathname={ window.location.pathname }/>               
            </BrowserRouter>),
        document.getElementById('root'));
};

export default render;