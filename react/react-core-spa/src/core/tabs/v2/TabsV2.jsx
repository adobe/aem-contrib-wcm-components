/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from "react";
import {Container,ComponentMapping,EditorContext} from '@adobe/cq-react-editable-components';

export function TabsV2IsEmptyFn(props){
    return props.cqItems == null || props.cqItems.length === 0;
}


export class TabsV2 extends Container {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            componentMapping: this.props.componentMapping || ComponentMapping
        };

        this.handleTabNavClick = this.handleTabNavClick.bind(this);
    }

      /**
     * Overload childComponents getter to only return the active tab's items.
     * @returns {Object[]} An array with the components instantiated to JSX
     */
    tabbedChildComponents(isInEditor) {

        if(isInEditor === true){
            //for editing capabilities to work properly, we always need to render each item.
            //we will hide the disabled items instead.
            return (
                <div>
                    {
                        this.childComponents.map((item, index) => {
                            const isVisible = (this.state.activeIndex === index);
                            const styles = { display: (!isVisible) ? 'none' : 'block'};
                            return (
                                <div style={styles} className={styles}>{this.childComponents[index]}</div>
                            )
                        })
                    }
                </div>
            )
        }else{
            //when the editor is disabled, we can just show the active item only.
            return this.childComponents[this.state.activeIndex];
        }
    }

    handleTabNavClick(index){
        if(this.state.activeIndex !== index){
            this.setState({
                activeIndex: index
            });
        }
    }

    tabNavigation(){

        let childComponents = [];

        if (!this.props.cqItems || !this.props.cqItemsOrder) {
            return childComponents;
        }

        return (
            <ol role="tablist"
                className="cmp-tabs__tablist"
                aria-label={this.props.accessibilityLabel}
                aria-multiselectable="false">
                    {
                        this.props.cqItemsOrder.map((item, index) => {
                            const tab = this.props.cqItems[item];
                            const isActive = (index === this.state.activeIndex);
                            return (
                                <li role="tab"
                                    onClick={() => this.handleTabNavClick(index)}
                                    className={'cmp-tabs__tab' + isActive ? ' cmp-tabs__tab--active' : ''}
                                    tabIndex={isActive ? '0' : '-1'}
                                    data-cmp-hook-tabs="tab">
                                    {tab['cq:panelTitle']}
                                </li>
                            )
                            
                        })
                    }
                
            </ol>
        )

    }

    get tabContainerProps(){
        let attrs = this.containerProps;
        attrs['className'] = attrs.className + ' cmp-tabs';
        attrs['data-cmp-is'] = 'tabs';
    }

    render() {

        const isEmpty = TabsV2IsEmptyFn(this.props);

        return (
            <EditorContext.Consumer>
                {isInEditor =>  (
                    <div {...this.tabContainerProps}>
                        { !isEmpty && this.tabNavigation() }
                        { !isEmpty && this.tabbedChildComponents(isInEditor) }
                        { this.placeholderComponent }
                    </div>
                )}
            </EditorContext.Consumer>
        )
    }

}