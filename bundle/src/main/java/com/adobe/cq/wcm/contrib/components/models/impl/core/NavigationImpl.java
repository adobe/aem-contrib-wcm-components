package com.adobe.cq.wcm.contrib.components.models.impl.core;


import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.contrib.components.models.RoutedModel;
import com.adobe.cq.wcm.core.components.models.Navigation;
import com.adobe.cq.wcm.core.components.models.NavigationItem;
import lombok.experimental.Delegate;
import lombok.extern.java.Log;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.via.ForcedResourceType;

import java.util.List;
import java.util.stream.Collectors;


@Log
@Model(
        adaptables = SlingHttpServletRequest.class, adapters = {Navigation.class, ComponentExporter.class},
        resourceType = "contrib/wcm/components/navigation"
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class NavigationImpl implements Navigation {
    
    private interface Overrides{
        List<NavigationItem> getItems();
        String getExportedType();
    }
    
    @Delegate(types = Navigation.class, excludes = Overrides.class)
    @Self
    @Via(type = ForcedResourceType.class, value = "core/wcm/components/navigation/v1/navigation")
    Navigation delegate;
    
    @SlingObject
    private Resource resource;
    
    public List<NavigationItem> getItems(){
        List<NavigationItem> items = delegate.getItems();
        return items.stream().map(RoutedNavigationItem::new).collect(Collectors.toList());
    }
    
    public String getExportedType(){
        return resource.getResourceType();
    }
    
}
