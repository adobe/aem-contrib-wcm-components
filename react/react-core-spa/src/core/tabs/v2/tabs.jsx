import React from "react";
import {Container} from '@adobe/cq-react-editable-components';

export function TabsV2IsEmptyFn(props){
    return props.items == null || props.items.length === 0;
}


class Tabs extends Container {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
        this.handleTabNavClick = this.handleTabNavClick.bind(this);
    }

      /**
     * Overload childComponents getter to only return the active tab's items.
     * @returns {Object[]} An array with the components instantiated to JSX
     */
    get childComponents() {
        const childComponents = super.childComponents();
        return childComponents[this.state.activeIndex];
    }

    handleTabNavClick(index){
        if(this.state.activeIndex != index){
            this.state.activeIndex = index;
        }
    }

    get tabNavigation(){
        return (
            <ol role="tablist"
                className="cmp-tabs__tablist"
                aria-label={props.accessibilityLabel}
                aria-multiselectable="false">
                    {
                        this.items.map((tab, index) => {
                            const isActive = (index === this.state.activeIndex);
                            return (
                                <li role="tab"
                                    onClick={this.handleTabNavClick(index)}
                                    className={'cmp-tabs__tab' + isActive ? ' cmp-tabs__tab--active' : ''}
                                    tabIndex={isActive ? '0' : '-1'}
                                    data-cmp-hook-tabs="tab">
                                    `${tab.title}
                                </li>
                            )
                            
                        })
                    }
                
            </ol>
        )

    }

    get containerProps(){
        let attrs = super.containerProps();
        attrs['className'] = attrs.className + ' cmp-tabs';
        attrs['data-cmp-is'] = 'tabs';
    }

    render() {

        const isEmpty = TabsV2IsEmptyFn(this.props);

        return (
            <div {...this.containerProps}>
                { !isEmpty && this.tabNavigation }
                { !isEmpty && this.childComponents }
                { this.placeholderComponent }
            </div>
        )
    }

}

export default Tabs;