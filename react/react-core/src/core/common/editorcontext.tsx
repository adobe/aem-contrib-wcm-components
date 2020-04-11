import React, {Context} from 'react';

export type WCMMode = 'edit' | 'disabled' | 'preview';

export interface EditorContext {
    wcmmode?: WCMMode
}

const context:Context<EditorContext> = React.createContext<EditorContext>({wcmmode:'disabled'});

export const EditorContextProvider = context.Provider;

export const EditorContextConsumer = context.Consumer;

export default context;

export const setEditorContext = <P extends object>(
    Component: React.ComponentType<P>,
    editorContext: EditorContext
    ): React.FC<Omit<P, keyof EditorContext>> => props => (
        <context.Provider value={editorContext}>
            <Component {...props as P} wcmmode={editorContext.wcmmode} />
        </context.Provider>
    );