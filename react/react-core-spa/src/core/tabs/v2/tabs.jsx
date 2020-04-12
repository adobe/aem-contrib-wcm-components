import React from "react";
import {Container,ComponentMapping} from '@adobe/cq-react-editable-components';

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
    get tabbedChildComponents() {
        return this.childComponents[this.state.activeIndex];
    }

    handleTabNavClick(index){
        if(this.state.activeIndex != index){
            this.state.activeIndex = index;
        }
    }

    get tabNavigation(){

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
                                    onClick={this.handleTabNavClick(index)}
                                    className={'cmp-tabs__tab' + isActive ? ' cmp-tabs__tab--active' : ''}
                                    tabIndex={isActive ? '0' : '-1'}
                                    data-cmp-hook-tabs="tab">
                                    `${tab['cq:panelTitle']}
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
            <div {...this.tabContainerProps}>
                { !isEmpty && this.tabNavigation }
                { !isEmpty && this.tabbedChildComponents }
                { this.placeholderComponent }
            </div>
        )
    }

}