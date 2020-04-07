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
import java.util.Map;

@Component(service = PrintChunkService.class)
public class PrintChunkServiceImpl implements PrintChunkService {
    
    private static final Logger log = LoggerFactory.getLogger(PrintChunkServiceImpl.class);
    private static final String SCRIPT_TAG = "\n<script type=\"text/javascript\" src=\"%s\"></script>";
    private static final String CSS_TAG = "\n<link rel=\"stylesheet\" href=\"%s\" type=\"text/css\">";
    
    @Reference
    private AssetManifestService assetManifestService;
    
    @Override
    public void printJsChunkToResponse(String chunkName, SlingHttpServletRequest request, SlingHttpServletResponse response) {
        String tag = getTag(SCRIPT_TAG, ".js", chunkName, request);
        try {
            response.getWriter().println(tag);
        } catch (IOException e) {
           log.error("Error printing js chunk", e);
        }
    }
    
    @Override
    public void printCssChunkToResponse(String chunkName, SlingHttpServletRequest request, SlingHttpServletResponse response) {
        String tag = getTag(CSS_TAG, ".css", chunkName, request);
        try {
            response.getWriter().println(tag);
        } catch (IOException e) {
            log.error("Error printing css chunk", e);
        }
    }
    

    private String getTag(String format, String extension, String chunkName, SlingHttpServletRequest request){
        
        StringBuilder stringBuilder = new StringBuilder();
        final Map<String, String> manifestAsMap;
        try {
            manifestAsMap = assetManifestService.getManifest(request).getFiles();
    
            final String qualifiedChunk = chunkName + extension;
            if(manifestAsMap.containsKey(qualifiedChunk)){
                stringBuilder.append(String.format(format, manifestAsMap.get(qualifiedChunk)));
            }
    
            if(manifestAsMap.containsKey("vendors~" + qualifiedChunk)){
                stringBuilder.append(String.format(format, manifestAsMap.get("vendors~" + qualifiedChunk)));
            }
    
            if(manifestAsMap.containsKey("default~" + qualifiedChunk)){
                stringBuilder.append(String.format(format, manifestAsMap.get("default~" + qualifiedChunk)));
            }
            
        } catch (IOException | LoginException e) {
            log.error("Error computing  chunk", e);
        }
        
        return stringBuilder.toString();
    
       
    }
}
