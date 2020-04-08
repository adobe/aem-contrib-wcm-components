/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
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
package com.adobe.cq.wcm.contrib.components.chunks.impl;



import com.adobe.cq.wcm.contrib.components.chunks.AssetManifestService;
import com.adobe.cq.wcm.contrib.components.chunks.PrintChunkService;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.LoginException;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Component(service = PrintChunkService.class)
public class PrintChunkServiceImpl implements PrintChunkService {
    
    private static final Logger log = LoggerFactory.getLogger(PrintChunkServiceImpl.class);
    private static final String SCRIPT_TAG = "\n<script type=\"text/javascript\" src=\"/etc.clientlibs/contrib/wcm/clientlibs/react-webcomponents/resources/%s\"></script>";
    private static final String CSS_TAG = "\n<link rel=\"stylesheet\" href=\"/etc.clientlibs/contrib/wcm/clientlibs/react-webcomponents/resources/%s\" type=\"text/css\">";
    
    @Reference
    private AssetManifestService assetManifestService;
    
    @Override
    public void printJsChunkToResponse(SlingHttpServletRequest request, SlingHttpServletResponse response) {
        print(request, response, SCRIPT_TAG, "js");
    }
    
    @Override
    public void printCssChunkToResponse(SlingHttpServletRequest request, SlingHttpServletResponse response) {
        print(request, response, CSS_TAG, "css");
    }
    
    private void print(SlingHttpServletRequest request, SlingHttpServletResponse response, String format, String extension){
        try {
            String[] entryPoints = assetManifestService.getManifest(request).getEntryPoints();
        
            for(String entryPoint : entryPoints){
            
                if(entryPoint.endsWith(extension)){
                    String tag = getTag(format, entryPoint);
                    response.getWriter().println(tag);
                }
            
            }
        
        } catch (IOException | LoginException e) {
            log.error("Error printing css chunk", e);
        }
    }
    

    private String getTag(String format, String entryPoint){
        return String.format(format,entryPoint);
    }
}
