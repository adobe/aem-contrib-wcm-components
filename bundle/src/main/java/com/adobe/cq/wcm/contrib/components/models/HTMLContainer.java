/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2021 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
package com.adobe.cq.wcm.contrib.components.models;

import com.adobe.cq.wcm.core.components.models.Component;
import org.jetbrains.annotations.NotNull;
import org.osgi.annotation.versioning.ConsumerType;

import com.adobe.cq.export.json.ComponentExporter;

/**
 * Defines the {@code HtmlContainer} Sling Model used for the
 * {@code /apps/contrib/wcm/components/htmlcontainer} component.
 *
 * @since com.adobe.cq.wcm.contrib.components.models 1.0.0
 */
@ConsumerType
public interface HTMLContainer extends Component {

    /**
     * Returns the CSS included
     *
     * @return the CSS included
     * @since com.adobe.cq.wcm.contrib.components.models 1.0.0
     */
    default String getCSSIncludes() {
        return "";
    }

    /**
     * Returns the HTML included
     *
     * @return the HTML included
     * @since com.adobe.cq.wcm.contrib.components.models 1.0.0
     */
    default String getHTMLInclude() {
        return "";
    }

    /**
     * Returns the JS included
     *
     * @return the JS included
     * @since com.adobe.cq.wcm.contrib.components.models 1.0.0
     */
    default String getJSIncludes() {
        return "";
    }

    default String getIncludes() {
        return "";
    }

    /**
     * @see ComponentExporter#getExportedType()
     * @since com.adobe.cq.wcm.contrib.components.models 1.0.0
     */
    @NotNull
    @Override
    default String getExportedType() {
        return "";
    }
}
