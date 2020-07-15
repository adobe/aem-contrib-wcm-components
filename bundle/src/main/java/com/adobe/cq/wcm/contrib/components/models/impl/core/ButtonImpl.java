package com.adobe.cq.wcm.contrib.components.models.impl.core;


import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.contrib.components.models.RoutedModel;
import com.adobe.cq.wcm.core.components.models.Button;
import com.adobe.cq.wcm.core.components.models.Navigation;
import lombok.experimental.Delegate;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.via.ForcedResourceType;


@Model(
        adaptables = SlingHttpServletRequest.class, adapters = {Button.class, ComponentExporter.class},
        resourceType = "contrib/wcm/components/button"
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ButtonImpl implements Navigation, RoutedModel {
    
    
    @Delegate(types = Button.class)
    @Self
    @Via(type = ForcedResourceType.class, value = "core/wcm/components/button/v1/button")
    Button delegate;
    
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String link;
    
    @Override
    public boolean isRouted() {
        return StringUtils.isNotBlank(link) && link.startsWith("/content/contrib-react-spacomponents-examples");
    }
    
}
