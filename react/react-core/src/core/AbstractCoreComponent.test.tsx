import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {setEditorContext, EditorContext} from './common/editorcontext';
import AbstractCoreComponent, {CoreComponent} from './AbstractCoreComponent';

interface TestType extends CoreComponent{
    forceEmptyFlag:boolean
}

class ImplementingClass extends AbstractCoreComponent<TestType>{

    isEmpty(): boolean {
        return this.props.forceEmptyFlag;
    }


    getEmptyPlaceHolderText(): string {
        return 'AwesomeComponent';
    }

    renderComponent(): JSX.Element {
        return <div>My awesome component</div>;
    }

}

const Wrapped = setEditorContext(ImplementingClass,{wcmmode:'disabled'});

const WrappedWithEdit = setEditorContext(ImplementingClass,{wcmmode:'edit'});

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Wrapped  hidePlaceHolder={false} forceEmptyFlag={true}/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

it('Should show our awesome text if the component is not empty', () => {
    const wrapper = shallow(<Wrapped  hidePlaceHolder={false} forceEmptyFlag={false}/>);
    expect(wrapper.html()).toEqual("<div>My awesome component</div>");
});

it('Should not show anything if wcmmode is disabled and component is empty', () => {
    const wrapper = shallow(<Wrapped  hidePlaceHolder={false} forceEmptyFlag={true}/>);
    expect(wrapper.html()).toEqual("");
});

it('Should show the proper placeholder if wcmmode is edit and component is empty', () => {
    const wrapper = shallow(<WrappedWithEdit  hidePlaceHolder={false} forceEmptyFlag={true}/>);
    expect(wrapper.html()).toEqual("<div class=\"cq-placeholder\">AwesomeComponent - Please configure the component</div>");
});

it('Should NOT show the proper placeholder if wcmmode is edit and component is empty, and hidePlaceHolder is set to true.', () => {
    const wrapper = shallow(<WrappedWithEdit  hidePlaceHolder={true} forceEmptyFlag={true}/>);
    expect(wrapper.html()).toEqual("");
});