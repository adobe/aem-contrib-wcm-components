
import React from 'react';
import {ListV2} from "aem-core-components-contributions-react-core";
import {Link} from '../../../../utils/Link';

export class SpaListV2 extends ListV2{

    generateLink(action, index){
        return (
            <Link className={this.baseCssCls + '__action-link'} to={action.URL}>${action.title}</Link>
        )
    }
}

