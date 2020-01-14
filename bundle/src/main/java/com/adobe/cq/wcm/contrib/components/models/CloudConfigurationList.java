/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2019 Adobe
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

import java.util.List;

import org.jetbrains.annotations.NotNull;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * Defines the {@code CloudConfigurationList} Sling Model used for the {@code /apps/contrib/wcm/components/cloudconfig} component.
 *
 * @since com.adobe.cq.wcm.contrib.components.models 1.0.0
 */
@ConsumerType
public interface CloudConfigurationList {

    /**
     * Retrieve the list of CloudConfigurations for the specified request.
     *
     * @return the list of {@code CloudConfiguration}s
     * @since com.adobe.cq.wcm.contrib.components.models 1.0.0
     */
    @NotNull
    default List<CloudConfiguration> getCloudConfigurations() {
        throw new UnsupportedOperationException();
    }
}
