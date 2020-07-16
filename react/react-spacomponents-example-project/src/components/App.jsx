import React, {Suspense} from 'react';
import {Page, withModel} from '@adobe/cq-react-editable-components';

// This component is the application entry point
class App extends Page {

    render() {
        return (
            <div className="App">
                    { this.childComponents }
                    <Suspense fallback={<div>Loading...</div>}>
                        { this.childPages }
                    </Suspense>
            </div>
          );
    }
}

export default withModel(App);