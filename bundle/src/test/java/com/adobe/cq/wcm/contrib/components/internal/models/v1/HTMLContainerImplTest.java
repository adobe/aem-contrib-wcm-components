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
package com.adobe.cq.wcm.contrib.components.internal.models.v1;

import com.adobe.cq.wcm.contrib.components.context.ContribComponentsTestContext;
import com.adobe.cq.wcm.contrib.components.models.HTMLContainer;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.testing.resourceresolver.MockValueMap;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.internal.util.reflection.FieldSetter;

import java.io.IOException;
import java.lang.reflect.Field;

import static org.mockito.Mockito.when;

@ExtendWith(AemContextExtension.class)
public class HTMLContainerImplTest {

    private static final String FILE_NAME = "fileName";

    private static final String CSS_FILES = "cssFiles";

    private static final String HTML_FILE = "htmlFile";

    protected static final String RESOURCE_TYPE_V1 = "core/wcm/components/htmlcontainer/v1/htmlcontainer";

    private static final String JS_FILES = "jsFiles";

    private final AemContext context = ContribComponentsTestContext.newAemContext();

    @InjectMocks
    HTMLContainerImpl htmlContainer;

    @Mock
    Resource resource;

//    @Mock
//    private ResourceResolver resourceResolver;
//
//    @Mock
//    ValueMap properties;

    @BeforeEach
    void setUp() throws NoSuchFieldException {
        MockitoAnnotations.initMocks(this);
        FieldSetter.setField(htmlContainer, getField("resource"), resource);
    }

    private Field getField(final String fieldName) throws NoSuchFieldException {
        return htmlContainer.getClass().getDeclaredField(fieldName);
    }

    @Test
    void testEmptyInclude() throws IOException {
        when(resource.getChild(CSS_FILES)).thenReturn(null);
        ValueMap properties = new MockValueMap(resource);
        when(resource.getValueMap()).thenReturn(properties);
        htmlContainer.getIncludes();
    }
}
