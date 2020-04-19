
import React from 'react';
import {ListV2} from "aem-core-components-contributions-react-core";
import {Link} from '../../../../utils/Link';

export class SpaListV2 extends ListV2{

    generateLink(){
        return (
            <Link className={this.baseCssCls + '__link'} to={this.props.linkURL ? this.props.linkURL : '#'}>
                {this.props.text}
            </Link>
        )
    }
}



