package com.adobe.cq.wcm.contrib.components.chunks;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;


public interface PrintChunkService {
    
    void printJsChunkToResponse(SlingHttpServletRequest request, SlingHttpServletResponse response);
    void printCssChunkToResponse( SlingHttpServletRequest request, SlingHttpServletResponse response);
    
}
