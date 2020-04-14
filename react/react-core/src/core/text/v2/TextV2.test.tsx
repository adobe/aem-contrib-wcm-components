import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {TextV2, TextV2Model, TextV2IsEmptyFn} from './TextV2';

it('Has a proper isEmpty function', () => {

    const props:TextV2Model = {
        hidePlaceHolder: false,
        text: 'test',
        isRichText: true
    };

    expect(TextV2IsEmptyFn(props)).toBe(false);

    const propsEmpty:TextV2Model = {
        hidePlaceHolder: false,
        isRichText: true,
        text: ''
    };

    expect(TextV2IsEmptyFn(propsEmpty)).toBe(true);
});

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TextV2  text={"someText"}/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders plain text', () => {

    const element = shallow(<TextV2 text={'plain text'}/>);

    const p = element.find('.cmp-text__paragraph');
    expect(p.text()).toEqual("plain text");

});


it('Renders rich text', () => {

    const richText = '<div class="myclass">richtext</div>';
    const expectedHtml = '<div class="cmp-text"><div class="myclass">richtext</div></div>';
    const element = shallow(<TextV2 isRichText={true} text={richText}/>);

    const actualHtml = element.html();
    expect(actualHtml).toEqual(expectedHtml);

});