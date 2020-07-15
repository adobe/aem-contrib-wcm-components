package com.adobe.cq.wcm.contrib.components.models.impl.core;

import com.adobe.cq.wcm.contrib.components.models.RoutedModel;
import com.adobe.cq.wcm.core.components.models.NavigationItem;
import lombok.experimental.Delegate;


public class RoutedNavigationItem implements NavigationItem, RoutedModel {
    
    @Delegate
    private NavigationItem delegate;
    
    public RoutedNavigationItem(NavigationItem delegate){
        this.delegate = delegate;
    }
    
    @Override
    public boolean isRouted() {
        
        boolean isRouted = false;
        
        if(delegate != null){
            String path = delegate.getPath();
            if(path != null){
                isRouted = path.startsWith("/content/contrib-react-spacomponent-examples/");
            }
        }
        
        return isRouted;
    }
}
