package com.adobe.cq.wcm.contrib.components.chunks.impl;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.common.collect.ImmutableMap;

import java.util.Map;


@JsonIgnoreProperties(ignoreUnknown = true)
public class AngularStatsManifest {
    
    private Map<String,Object> assetsByChunkName;
    
    private String publicPath;
    
    public Map<String, Object> getAssetsByChunkName() {
        return ImmutableMap.copyOf(assetsByChunkName);
    }
    
    public String getPublicPath() {
        return publicPath;
    }
}
