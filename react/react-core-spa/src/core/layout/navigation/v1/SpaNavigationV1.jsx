

import React from 'react';
import {NavigationV1} from "aem-core-components-contributions-react-core";
import {Link} from '../../../../utils/Link';

export class SpaBreadCrumbV2 extends NavigationV1{

    renderLink(item, isActive){
        return (
            <Link to={item.url}
                  className={this.baseCssCls + '__item-link'}
                  aria-current={isActive && 'page'}
                  title={item.title}
                  itemProp="item">
                {item.title}
            </Link>
        )
    }

}