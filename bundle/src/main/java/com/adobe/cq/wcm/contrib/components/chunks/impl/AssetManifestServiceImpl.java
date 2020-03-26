package com.adobe.cq.wcm.contrib.components.chunks.impl;

import com.adobe.cq.wcm.contrib.components.chunks.AssetManifestService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.tika.io.IOUtils;
import org.osgi.service.component.annotations.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;


@Component(service = AssetManifestService.class)
public class AssetManifestServiceImpl implements AssetManifestService {
    

    private static final String PATH_TO_MANIFEST = "/apps/contrib/wcm/clientlibs/react-webcomponents/asset-manifest.json";
    
    @Override
    public Map<String,String> getManifest(SlingHttpServletRequest request) throws IOException {
        
            final Resource assetManifestResource = request.getResourceResolver().getResource(PATH_TO_MANIFEST);
    
            if(assetManifestResource != null){
                InputStream file = assetManifestResource.adaptTo(InputStream.class);
                String fileString = IOUtils.toString(file);
                ObjectMapper objectMapper = new ObjectMapper();
                return objectMapper.readValue(fileString, new TypeReference<Map<String, String>>() {});
            }else{
                throw new IOException("Could not load manifest file!");
            }
        
        
        
    }
    
    
    
}
