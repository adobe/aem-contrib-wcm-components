package com.adobe.cq.wcm.contrib.components.models;


import com.fasterxml.jackson.annotation.JsonProperty;

public interface RoutedModel {
    
     @JsonProperty("routed")
     boolean isRouted();
    
}
