
import React from 'react';
import {TeaserV1} from "aem-core-components-contributions-react-core";
import {Link} from '../../../../utils/Link';

export class SpaTeaserV1 extends TeaserV1{

    generateLink(action, index){
        return (
            <Link className={this.baseCssCls + '__action-link'} to={action.URL}>${action.title}</Link>
        )
    }
}

