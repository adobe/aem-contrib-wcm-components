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

import React from 'react';
import {NavigationV1} from "aem-core-components-contributions-react-core";
import {Link} from '../../../../utils/Link';

export class SpaNavigationV1 extends NavigationV1{

    isEmpty(){
        return super.isEmpty();
    }

    renderComponent(){
        return super.renderComponent();
    }

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