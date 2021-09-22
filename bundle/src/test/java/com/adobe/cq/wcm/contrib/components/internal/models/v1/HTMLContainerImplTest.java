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

import com.adobe.cq.sightly.WCMBindings;
import com.adobe.cq.wcm.contrib.components.Utils;
import com.adobe.cq.wcm.contrib.components.context.ContribComponentsTestContext;
import com.adobe.cq.wcm.contrib.components.models.HTMLContainer;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.commons.io.IOUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.scripting.SlingBindings;
import org.apache.sling.testing.mock.sling.servlet.MockSlingHttpServletRequest;
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
import java.nio.charset.StandardCharsets;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@ExtendWith(AemContextExtension.class)
public class HTMLContainerImplTest {

    private static final String TEST_BASE = "/htmlcontainer";
    private static final String CONTENT_ROOT = "/content";
    private static final String TEST_ROOT_PAGE = CONTENT_ROOT + TEST_BASE;
    private static final String TEST_ROOT_PAGE_GRID = "/jcr:content/root/responsivegrid";
    private static final String HTML_CONTAINER_1 = TEST_ROOT_PAGE + TEST_ROOT_PAGE_GRID + "/htmlcontainer-1";

    private static final String SAMPLE_SITE = "/content/dam/html/sample-site";
    private static final String SAMPLE_CSS = "/sample.css";
    private static final String SAMPLE_HTML = "/sample.html";
    private static final String SAMPLE_JS = "/sample.js";

    private static final String CSS_FILES = "cssFiles";

    private static final String JS_FILES = "jsFiles";

    private static final String HTML_FILE = "htmlFile";

    private final AemContext context = ContribComponentsTestContext.newAemContext();

    @InjectMocks
    HTMLContainerImpl htmlContainer;

    @Mock
    Resource resource;

    @BeforeEach
    void setUp() throws NoSuchFieldException {
        MockitoAnnotations.initMocks(this);
        FieldSetter.setField(htmlContainer, getField("resource"), resource);
    }

    private Field getField(final String fieldName) throws NoSuchFieldException {
        return htmlContainer.getClass().getDeclaredField(fieldName);
    }

    @Test
    void testEmptyInclude() {
        when(resource.getChild(CSS_FILES)).thenReturn(null);
        when(resource.getChild(JS_FILES)).thenReturn(null);
        when(resource.getChild(HTML_FILE)).thenReturn(null);
        ValueMap properties = new MockValueMap(resource);
        properties.put(HTML_FILE, "xyz.html");
        when(resource.getValueMap()).thenReturn(properties);
        assertEquals("",  htmlContainer.getIncludes());
    }

    @Test
    void testHtmlIncludes() throws IOException {
        context.load().json(TEST_BASE + ContribComponentsTestContext.TEST_CONTENT_JSON, CONTENT_ROOT);

        context.assetManager().createAsset(
                SAMPLE_SITE + SAMPLE_CSS,
                Utils.class.getResourceAsStream(TEST_BASE + SAMPLE_CSS),
                "text/css",
                true);
        context.assetManager().createAsset(
                SAMPLE_SITE + SAMPLE_HTML,
                Utils.class.getResourceAsStream(TEST_BASE + SAMPLE_HTML),
                "text/html",
                true);
        context.assetManager().createAsset(
                SAMPLE_SITE + SAMPLE_JS,
                Utils.class.getResourceAsStream(TEST_BASE + SAMPLE_JS),
                "application/javascript",
                true);

        Utils.enableDataLayer(context, true);
        Resource resource = context.currentResource(HTML_CONTAINER_1);

        if (resource == null) {
            throw new IllegalStateException("Resource not found " + HTML_CONTAINER_1);
        }

        MockSlingHttpServletRequest request = new MockSlingHttpServletRequest(context.resourceResolver(),
                context.bundleContext());
        SlingBindings bindings = new SlingBindings();
        bindings.put(SlingBindings.RESOURCE, resource);
        bindings.put(SlingBindings.REQUEST, request);
        bindings.put(WCMBindings.PROPERTIES, resource.getValueMap());
        request.setResource(resource);
        request.setAttribute(SlingBindings.class.getName(), bindings);
        HTMLContainer container = request.adaptTo(HTMLContainer.class);
        String output = container.getIncludes();
        String expected = IOUtils.toString(
                Utils.class.getResourceAsStream(TEST_BASE + "/exporter-htmlcontainer.txt"),
                StandardCharsets.UTF_8);
        assertTrue(output.replaceAll("\r", "").contentEquals(expected));
    }
}
