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

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;

import javax.annotation.PostConstruct;

import com.adobe.cq.wcm.contrib.components.models.HTMLContainer;
import com.adobe.cq.wcm.core.components.util.AbstractComponentImpl;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.jetbrains.annotations.Nullable;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.dam.api.Asset;
import com.day.cq.wcm.api.designer.Style;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * V1 HTMLContainer model implementation.
 */
@Model(adaptables = SlingHttpServletRequest.class, adapters = { HTMLContainer.class,
        ComponentExporter.class }, resourceType = HTMLContainerImpl.RESOURCE_TYPE_V1)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HTMLContainerImpl extends AbstractComponentImpl implements HTMLContainer {

    private static final String ASYNC_TYPE = "async";

    private static final String DEFER_TYPE = "defer";

    private static final String INLINE_TYPE = "inline";

    private static final String REFERENCE_TYPE = "reference";

    private static final String INCLUDE_TYPE = "includeType";

    /**
     * Standard logger.
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(HTMLContainer.class);

    private static final String FILE_NAME = "fileName";

    private static final String CSS_FILES = "cssFiles";

    private static final String HTML_FILE = "htmlFile";

    protected static final String RESOURCE_TYPE_V1 = "contrib/wcm/components/htmlcontainer/v1/htmlcontainer";

    private static final String JS_FILES = "jsFiles";

    private static final String NL = StringUtils.CR + StringUtils.LF;

    @ScriptVariable
    private Resource resource;

    @ScriptVariable(injectionStrategy = InjectionStrategy.OPTIONAL)
    @JsonIgnore
    @Nullable
    private Style currentStyle;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL, name = JcrConstants.JCR_TITLE)
    @Nullable
    private String title;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Nullable
    private String type;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Nullable
    private String linkURL;

    @PostConstruct
    private void initModel() {

    }

    @Override
    public String getIncludes() {
        String outString = "";
        outString += (getCSSIncludes());
        outString  += (getHTMLInclude());
        outString += (getJSIncludes());

        return outString;
    }

    @Override
    @JsonIgnore
    public String getCSSIncludes() {
        return getTypedIncludes(CSS_FILES);
    }

    @Override
    @JsonIgnore
    public String getHTMLInclude() {
        ValueMap properties = resource.getValueMap();
        String htmlInclude = "";

        String htmlFile = (String) properties.get(HTML_FILE);
        if (htmlFile != null) {
            htmlInclude = readFileIntoSB(htmlFile);
        }
        return (htmlInclude);
    }

    @Override
    @JsonIgnore
    public String getJSIncludes() {
        return getTypedIncludes(JS_FILES);


    }

    // find ALL the filenames for the given type and either read the file in
    // directly into the html
    // page or treat it as an external link, depending on the "inlineCBox" boolean.
    // This should
    // reduce page size if libraries are referenced instead of inlined.
    public String getTypedIncludes(String type) {
        String include = "";
        Resource typeFileNode = resource.getChild(type);
        if (typeFileNode != null) {
            Iterator<Resource> typeFileNodeIterator = typeFileNode.listChildren();
            while (typeFileNodeIterator.hasNext()) {
                Resource typeFileItemNode = typeFileNodeIterator.next();
                String fileName = (String) (typeFileItemNode.getValueMap()).get(FILE_NAME);
                String includeType = (String) (typeFileItemNode.getValueMap()).get(INCLUDE_TYPE);
                LOGGER.debug("getTypedIncludes - reading " + fileName);

                if (fileName != null) {
                    // includeType will be null for HTML files...
                    if (includeType == null || includeType.contentEquals(INLINE_TYPE)) {
                        if (type.contentEquals(CSS_FILES)) {
                            include += ("<style type=\"text/css\">" + NL);
                        } else if (type.contentEquals(JS_FILES)) {
                            include += ("<script type=\"text/javascript\">" + NL);
                        }

                        include += readFileIntoSB(fileName);

                        if (type.contentEquals(CSS_FILES)) {
                            include += ("</style>" + NL);

                        } else if (type.contentEquals(JS_FILES)) {

                            include += ("</script>" + NL);

                        }

                    } else if (includeType.contentEquals(REFERENCE_TYPE) || includeType.contentEquals(DEFER_TYPE)
                            || includeType.contentEquals(ASYNC_TYPE)) {
                        if (type.contentEquals(CSS_FILES)) {
                            include += ("<link rel=\"stylesheet\" href=\"" + fileName + "\">");

                        } else if (type.contentEquals(JS_FILES)) {

                            include += ("<script type=\"text/javascript\" "
                                    + (String) (includeType.contentEquals(DEFER_TYPE)
                                    || includeType.contentEquals(ASYNC_TYPE) ? includeType : "")
                                    + " src=\"" + fileName + "\"></script>");
                        }
                    }
                }
            }
        }
        return include;
    }

    private String readFileIntoSB(String fileName) {
        String sb = "";
        ResourceResolver resolver = resource.getResourceResolver();
        if (resolver != null) {
            Resource newResource = resolver.getResource(fileName);
            if (newResource != null) {
                Asset asset = newResource.adaptTo(Asset.class);
                if (asset != null) {
                    Resource original = asset.getOriginal();
                    InputStream content = original.adaptTo(InputStream.class);
                    if(content != null) {
                        BufferedReader br = new BufferedReader(new InputStreamReader(content, StandardCharsets.UTF_8));
                        try {
                            String line;
                            StringBuilder sbBuilder = new StringBuilder(sb);
                            while ((line = br.readLine()) != null) {
                                sbBuilder.append(line);
                            }
                            sb = sbBuilder.toString();
                            br.close();
                        } catch (IOException e) {
                            LOGGER.error("ERROR reading {} into the StringBuffer: {}", fileName, e.toString());
                        }
                    }
                }
            }
        }
        return sb;
    }
}
