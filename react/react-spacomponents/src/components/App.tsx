import React from 'react';
//@ts-ignore
import { Page, withModel} from '@adobe/cq-react-editable-components';

// This component is the application entry point
class App extends Page {

    render() {
        return (
            <div className="App">
                //@ts-ignore
                { this.childComponents }
                //@ts-ignore
                { this.childPages }
            </div>
          );
    }
}

export default withModel(App);