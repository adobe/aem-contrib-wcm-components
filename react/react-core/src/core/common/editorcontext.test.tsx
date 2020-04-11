import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {setEditorContext,EditorContextProvider, EditorContextConsumer, EditorContext} from './editorcontext';

const TypedDummy = (props:EditorContext) => {
    return (
        <div>context:{props.wcmmode}</div>
    )
};

const ConsumerDummy = (props:any) => {
    return (
        <EditorContextConsumer>
            { ctx =>  <TypedDummy wcmmode={ctx.wcmmode}/>}
        </EditorContextConsumer>
    )
};


const Wrapped = setEditorContext(TypedDummy,{wcmmode:'disabled'});

const WrappedWithEdit = setEditorContext(TypedDummy,{wcmmode:'edit'});

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Wrapped/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

it('Provides a good context - disabled', () => {
    const wrapper = shallow(<Wrapped/>);
    expect(wrapper.html()).toEqual("<div>context:disabled</div>");
});

it('Provides a good context - edit', () => {
    const wrapper = shallow(<WrappedWithEdit/>);
    expect(wrapper.html()).toEqual("<div>context:edit</div>");
});


it('Works with a context provider', () => {

    const ctx:EditorContext = {wcmmode: 'disabled'};

    const wrapper = shallow(
        <EditorContextProvider value={ctx}>
            <ConsumerDummy/>
        </EditorContextProvider>
    );
    expect(wrapper.html()).toEqual("<div>context:disabled</div>");

});