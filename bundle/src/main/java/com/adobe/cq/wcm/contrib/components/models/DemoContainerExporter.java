package com.adobe.cq.wcm.contrib.components.models;

import com.adobe.cq.export.json.ContainerExporter;
import com.fasterxml.jackson.annotation.JsonInclude;


public interface DemoContainerExporter extends ContainerExporter {
    
    @JsonInclude
    boolean isFullWidth();

}
