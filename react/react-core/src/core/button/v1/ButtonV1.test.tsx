import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {ButtonV1, ButtonV1Model} from './ButtonV1';


it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
       <ButtonV1 />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders a proper button with link', () => {

    let captured:boolean = false;

    const properties:ButtonV1Model = {
        ariaLabel: "ThisIsAButton",
        hidePlaceHolder: false,
        icon: "iconCSSCls",
        link: "/content/some/link.html",
        text: "SomeText",
        handleOnClick(event): void {
            captured = true;
        }
    }

    const wrapper = shallow(<ButtonV1  {...properties} />);

    const button = wrapper.find('.button');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(captured).toEqual(true);

    const anchor = button.find("a");
    expect(anchor).toHaveLength(1);
    expect(anchor.prop("aria-label")).toEqual("ThisIsAButton");
    expect(anchor.prop("href")).toEqual("/content/some/link.html");

    const iconSpan = anchor.find("span.cmp-button__icon.cmp-button__icon--iconCSSCls");
    expect(iconSpan).toHaveLength(1);

    const textSpan = anchor.find("span.cmp-button__text");
    expect(textSpan.text()).toEqual("SomeText");
});


it('Renders a proper button with link', () => {

    let captured:boolean = false;

    const properties:ButtonV1Model = {
        ariaLabel: "ThisIsAButton",
        hidePlaceHolder: false,
        icon: "iconCSSCls",
        text: "SomeText",
        handleOnClick(event): void {
            captured = true;
        }
    };

    const wrapper = shallow(<ButtonV1  {...properties} />);

    const button = wrapper.find('.button');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(captured).toEqual(true);

    const anchor = button.find("a");
    expect(anchor).toHaveLength(0);


    const iconSpan = button.find("span.cmp-button__icon.cmp-button__icon--iconCSSCls");
    expect(iconSpan).toHaveLength(1);

    const textSpan = button.find("span.cmp-button__text");
    expect(textSpan.text()).toEqual("SomeText");
});