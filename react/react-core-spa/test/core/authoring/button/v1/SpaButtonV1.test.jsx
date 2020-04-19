import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Utils,withEditable} from '@adobe/cq-react-editable-components';
import {SpaButtonV1} from "../../../../../src/core/authoring/button/v1/SpaButtonV1";
import {BrowserRouter} from "react-router-dom";

describe('SpaButton ->', () => {

    const ROOT_CLASS_NAME = 'root-class';
    const COMPONENT_RESOURCE_TYPE = '/component/resource/type';
    const COMPONENT_PATH = '/path/to/component';
    const EMPTY_LABEL = 'Empty Label';

    const CQ_PROPS = {
        "cqType": COMPONENT_RESOURCE_TYPE,
        "cqPath": COMPONENT_PATH
    };

    let rootNode;

    let sandbox = sinon.createSandbox();



    beforeEach(() => {
        rootNode = document.createElement('div');
        rootNode.className = ROOT_CLASS_NAME;
        document.body.appendChild(rootNode);

        sandbox.stub(Utils, 'isInEditor');
    });

    afterEach(() => {
        sandbox.restore();

        if (rootNode) {
            document.body.appendChild(rootNode);
            rootNode = undefined;
        }
    });

    describe('Component emptiness ->', () => {

        it('should declare the component to be empty', () => {

            ReactDOM.render(<SpaButtonV1 isInEditor={true} {...CQ_PROPS}/>, rootNode);

            let node = rootNode.querySelector('div.cq-placeholder');
            expect(node).to.exist;
            expect(node.innerHTML).to.equal("ButtonV1 - Please configure the component");
        });


        it('should properly render', () => {

            let captured = false;

            const properties = {
                isInEditor: false,
                ariaLabel: "ThisIsAButton",
                hidePlaceHolder: false,
                icon: "iconCSSCls",
                link: "/content/some/link.html",
                text: "SomeText",
                handleOnClick(event){
                    captured = true;
                }
            }

            ReactDOM.render(
                <BrowserRouter>
                    <SpaButtonV1 {...properties}/>
                </BrowserRouter>
               , rootNode);

            let node = rootNode.querySelector('.cmp-button');
            expect(node).to.exist;
            expect(node.innerHTML).to.equal("<span class=\"cmp-button__icon cmp-button__icon--iconCSSCls\"></span><span class=\"cmp-button__text\">SomeText</span>");
        });

    });
});
