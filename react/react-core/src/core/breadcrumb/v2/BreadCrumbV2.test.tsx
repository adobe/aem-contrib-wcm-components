import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {BreadCrumbV2, BreadCrumbV2ItemModel} from './BreadCrumbV2';




it('Renders without crashing', () => {
    const div = document.createElement('div');
    let items:BreadCrumbV2ItemModel[] = [];
    ReactDOM.render(
        <BreadCrumbV2 items={items}/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders breadcrumb items if provided', () => {
    let items:BreadCrumbV2ItemModel[] = [
        {active:false,url:'/content/some/url.html',title:'Item1'},
        {active:false,url:'/content/some/url.html',title:'Item2'},
        {active:true,url:'/content/some/url.html',title:'Item3'}
    ];


    const wrapper = shallow(<BreadCrumbV2  hidePlaceHolder={false} items={items}/>);
    expect(wrapper.find("li")).toHaveLength(3);

    expect(wrapper.find(".cmp-breadcrumb__item--active").text()).toEqual("Item3");
});