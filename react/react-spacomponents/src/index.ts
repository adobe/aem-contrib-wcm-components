

import React from 'react';

// @ts-ignore
import { ModelManager, PathUtils, Constants, ModelClient } from '@adobe/cq-spa-page-model-manager';

import './mapping';

import render from "./renderRoot";

const modelClient: any = new ModelClient();

const DOMReady = (f:any) => {/in/.test(document.readyState)?setTimeout( () => DOMReady(f),9):f()};

//PathUtils.getMetaPropertyValue('cq:proxy_aem');

DOMReady( ()=> {
    ModelManager.initialize({modelClient: modelClient}).then(render);
});