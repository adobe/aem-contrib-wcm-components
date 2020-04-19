
import React from 'react';
import {TitleV2} from "aem-core-components-contributions-react-core";
import {Link} from '../../../../utils/Link';

export class SpaTitle extends TitleV2{

    generateLink(){
        return (
            <Link className={this.baseCssCls + '__link'} to={this.props.linkURL ? this.props.linkURL : '#'}>
                {this.props.text}
            </Link>
        )
    }
}



