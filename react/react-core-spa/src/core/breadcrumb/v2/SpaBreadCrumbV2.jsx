import React from 'react';
import {BreadCrumbV2} from "@adobe/core-contrib-core";
import {Link} from '../../../utils/Link';

export class SpaBreadCrumbV2 extends BreadCrumbV2{

    renderBreadCrumbLink(crumbItem,index){
        return (
            <Link to={crumbItem.url}
                  className="cmp-breadcrumb__item-link"
                  itemProp="item">
                {this.renderBreadCrumbSpan(crumbItem, index)}
            </Link>
        )
    }

}