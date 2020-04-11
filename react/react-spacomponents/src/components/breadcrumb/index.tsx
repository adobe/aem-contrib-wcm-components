import React from 'react';

import {BreadCrumbV2,BreadCrumbV2Model, BreadCrumbV2ItemModel,BreadCrumbV2IsEmptyFn} from "@adobe/core-contrib-core";
import Link from '../../utils/Link';

class SpaBreadCrumb extends BreadCrumbV2<BreadCrumbV2Model>{

    renderBreadCrumbLink(crumbItem:BreadCrumbV2ItemModel,index:number){
        return (
            <Link to={crumbItem.url}
                      className="cmp-breadcrumb__item-link"
                      itemProp="item">
                {this.renderBreadCrumbSpan(crumbItem, index)}
            </Link>
        )
    }

}

export default SpaBreadCrumb;