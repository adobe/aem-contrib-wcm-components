import React from 'react';
import {EditorContext} from "../../types";

const context = React.createContext<EditorContext>({wcmmode:"disabled"});

export const EditorContextProvider = context.Provider;

export const EditorContextConsumer = context.Consumer;

export default context;

export const withEditorContext = <P extends object>(
    Component: React.ComponentType<P>,
  ): React.FC<Omit<P, keyof EditorContext>> => props => (
      <context.Consumer>
        {({ wcmmode }) => <Component {...props as P} wcmmode={wcmmode} />}
      </context.Consumer>
    );


export const setEditorContext = <P extends object>(
    Component: React.ComponentType<P>,
    editorContext: EditorContext
    ): React.FC<Omit<P, keyof EditorContext>> => props => (
        <context.Provider value={editorContext}>
            <Component {...props as P} wcmmode={editorContext.wcmmode} />
        </context.Provider>
    );