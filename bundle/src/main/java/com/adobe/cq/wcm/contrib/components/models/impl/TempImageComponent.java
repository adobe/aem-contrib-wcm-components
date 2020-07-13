package com.adobe.cq.wcm.contrib.components.models.impl;


import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.contrib.components.models.TempImageExporter;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.via.ForcedResourceType;

import javax.annotation.Nonnull;

@Model(adaptables = SlingHttpServletRequest.class, resourceType = TempImageComponent.RESOURCE_TYPE, adapters = {TempImageExporter.class, ComponentExporter.class, TempImageComponent.class})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
@JsonSerialize(as = TempImageExporter.class)
public class TempImageComponent implements  TempImageExporter {
    
    static final String RESOURCE_TYPE = "contrib/wcm/components/image";
    static final String RESOURCE_SUPER_TYPE = "core/wcm/components/image/v2/image";
    
    @Self @Via(type = ForcedResourceType.class, value = RESOURCE_SUPER_TYPE) @Optional
    Image delegate;
    
    @Override
    public String getSrc() {
        return delegate.getFileReference();
    }
    
    @Override
    public String getAlt() {
        return delegate.getAlt();
    }
    
    @Override
    public String getTitle() {
        return delegate.getTitle();
    }
    
    @Override
    public boolean isDisplayPopupTitle() {
        return delegate.displayPopupTitle();
    }
    
    @Nonnull
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
