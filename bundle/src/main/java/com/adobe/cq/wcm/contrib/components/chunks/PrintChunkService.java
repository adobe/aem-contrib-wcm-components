package com.adobe.cq.wcm.contrib.components.chunks;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;


public interface PrintChunkService {
    
    void printJsChunkToResponse(String chunkName, SlingHttpServletRequest request, SlingHttpServletResponse response);
    void printCssChunkToResponse(String chunkName, SlingHttpServletRequest request, SlingHttpServletResponse response);
    
}
