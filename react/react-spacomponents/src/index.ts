import React from 'react';

import { ModelManager, ModelClient } from '@adobe/cq-spa-page-model-manager';

import './mapping';

import render from "./renderRoot";

const modelClient:ModelClient = new ModelClient();

const DOMReady = (f:any) => {/in/.test(document.readyState)?setTimeout( () => DOMReady(f),9):f()};

DOMReady( ()=> {
    ModelManager.initialize({modelClient: modelClient}).then(render);
});