package com.adobe.cq.wcm.contrib.components.chunks;


import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.LoginException;

import java.io.IOException;
import java.util.Map;

public interface AssetManifestService {
    
    Map<String,String> getManifest(SlingHttpServletRequest request) throws IOException, LoginException;
    
}
