package com.adobe.cq.wcm.contrib.components.models;

import com.day.cq.wcm.foundation.model.responsivegrid.export.ResponsiveGridExporter;
import com.fasterxml.jackson.annotation.JsonInclude;


public interface DemoContainerExporter extends ResponsiveGridExporter {
    
    @JsonInclude
    boolean isFullWidth();
}
