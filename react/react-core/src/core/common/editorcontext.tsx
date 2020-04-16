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

import React, {Context} from 'react';

export type WCMMode = 'edit' | 'disabled' | 'preview';

export interface EditorContext {
    wcmmode?: WCMMode
}

const context:Context<EditorContext> = React.createContext<EditorContext>({wcmmode:'disabled'});

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