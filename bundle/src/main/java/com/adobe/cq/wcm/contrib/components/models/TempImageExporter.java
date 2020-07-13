package com.adobe.cq.wcm.contrib.components.models;


import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonInclude;

public interface TempImageExporter extends ComponentExporter {
    
    @JsonInclude
    String getSrc();
    @JsonInclude
    String getAlt();
    @JsonInclude
    String getTitle();
    @JsonInclude
    boolean isDisplayPopupTitle();
   
}
