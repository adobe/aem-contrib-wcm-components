/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2021 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
package com.adobe.cq.wcm.contrib.components.internal.services.table;

import com.adobe.cq.wcm.contrib.components.services.table.ResourceProcessor;
import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.Rendition;
import com.day.cq.dam.commons.util.DamUtil;
import org.apache.sling.api.resource.Resource;
import org.jetbrains.annotations.NotNull;
import org.osgi.service.component.annotations.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import static java.util.Objects.nonNull;

@Component(service = ResourceProcessor.class, immediate = true)
public class CSVResourceProcessor implements ResourceProcessor {

    @Override
    public List<List<String>> processData(@NotNull Resource resource, String[] headerNames) throws IOException {
        List<List<String>> rows = new ArrayList<>();
        Asset asset = DamUtil.resolveToAsset(resource);
        if (nonNull(asset)) {
            Rendition original = asset.getOriginal();
            if (nonNull(original)) {
                InputStream inputStream = original.getStream();
                try (BufferedReader br = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
                    List<List<String>> lines = getRawCSVDataInList(br);
                    // First line of csv is the name of headers
                    final List<String> columns = lines.get(0);
                    Map<String, Integer> columnIndexMap = getColumnIndexMap(columns);
                    // Set the column header names and their indexes in the same order as header are received as input
                    Map<String, Integer> tableColumnsMap = new LinkedHashMap<>();
                    for (String headerName : headerNames) {
                        tableColumnsMap.put(headerName, columnIndexMap.getOrDefault(headerName, -1));
                    }

                    // Remove header names row from the list.
                    lines = lines.subList(1, lines.size());
                    populateRowsForTable(lines, tableColumnsMap, rows);
                }
            }
        }
        return rows;
    }

    @Override
    public boolean canProcess(String mimeType) {
        return nonNull(mimeType) && mimeType.equalsIgnoreCase("text/csv");
    }


    private void populateRowsForTable(List<List<String>> lines, Map<String, Integer> finalMap, List<List<String>> rows) {
        for (List<String> line : lines) {
            List<String> row = new ArrayList<>();
            for(Map.Entry<String, Integer> columnIndex : finalMap.entrySet()) {
                row.add(line.get(columnIndex.getValue()));
            }
            rows.add(row);
        }
    }

    private List<List<String>> getRawCSVDataInList(BufferedReader br) throws IOException {
        List<List<String>> lines = new ArrayList<>();
        String currentLine;
        while ((currentLine = br.readLine()) != null) {
            lines.add(Arrays.asList(currentLine.split(",")));
        }
        return lines;
    }

    /**
     * @param columns : Array of Column names. This is first row in the CSV file
     * @return : Returns the column name and it's index
     */
    private Map<String, Integer> getColumnIndexMap(List<String> columns) {
        Map<String, Integer> columnIndexMap = new HashMap<>();
        for (int i = 0; i < columns.size(); i++) {
            columnIndexMap.put(columns.get(i), i);
        }
        return columnIndexMap;
    }
}
