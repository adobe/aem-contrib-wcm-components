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
import com.adobe.cq.wcm.contrib.components.chunks.Manifest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.tika.io.IOUtils;
import org.osgi.service.component.annotations.Component;

import java.io.IOException;
import java.io.InputStream;


@Component(service = AssetManifestService.class)
public class AssetManifestServiceImpl implements AssetManifestService {
    

    private static final String PATH_TO_MANIFEST = "/apps/contrib/wcm/clientlibs/react-webcomponents/asset-manifest.json";
    
    @Override
    public Manifest getManifest(SlingHttpServletRequest request) throws IOException {
        
            final Resource assetManifestResource = request.getResourceResolver().getResource(PATH_TO_MANIFEST);
    
            if(assetManifestResource != null){
                InputStream file = assetManifestResource.adaptTo(InputStream.class);
                String fileString = IOUtils.toString(file);
                ObjectMapper objectMapper = new ObjectMapper();
                return objectMapper.readValue(fileString, Manifest.class);
            }else{
                throw new IOException("Could not load manifest file!");
            }
        
        
        
    }
    
    
    
}
