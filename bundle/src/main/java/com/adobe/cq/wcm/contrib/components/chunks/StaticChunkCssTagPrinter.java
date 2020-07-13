package com.adobe.cq.wcm.contrib.components.chunks;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;

@Component(
        service = {Servlet.class},
        property = {
                "sling.servlet.resourceTypes=contrib/wcm/chunks/static-css",
                "sling.servlet.methods=GET"
        }
)
public class StaticChunkCssTagPrinter extends SlingSafeMethodsServlet {
    
    @Reference
    private PrintChunkService printChunkService;
    
    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        printChunkService.printCssChunkToResponse("main", request, response);
        printChunkService.printCssChunkToResponse("styles", request, response);
    }
    
}
