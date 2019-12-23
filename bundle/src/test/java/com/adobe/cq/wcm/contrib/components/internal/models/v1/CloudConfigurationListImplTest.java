/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2019 Adobe
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
package com.adobe.cq.wcm.contrib.components.internal.models.v1;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.List;
import java.util.Optional;

import org.apache.sling.testing.mock.sling.servlet.MockRequestPathInfo;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.adobe.cq.wcm.contrib.components.context.CoreComponentTestContext;
import com.adobe.cq.wcm.contrib.components.models.CloudConfiguration;
import com.adobe.cq.wcm.contrib.components.models.CloudConfigurationList;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

import static org.junit.Assert.assertEquals;

@ExtendWith(AemContextExtension.class)
public class CloudConfigurationListImplTest {

  private final AemContext context = CoreComponentTestContext.newAemContext();

  @BeforeEach
  void init() {
    context.load().json("/cloudconfig/cloudconfig.json", "/conf/test");
  }

  @SuppressWarnings("unchecked")
  @Test
  void valid()
      throws IOException, NoSuchFieldException, SecurityException, IllegalArgumentException, IllegalAccessException {
    MockRequestPathInfo requestPathInfo = (MockRequestPathInfo) context.request().getRequestPathInfo();
    requestPathInfo.setSuffix("/apps/contrib/wcm/templates/marketocloudconfig");

    CloudConfigurationList list = context.request().adaptTo(CloudConfigurationList.class);

    Assert.assertNotNull(list);
    Field field = list.getClass().getDeclaredField("configs");
    field.setAccessible(true);

    Assert.assertNotNull(field.get(list));

    CloudConfiguration config = Optional.ofNullable(context.resourceResolver().getResource("/conf/test"))
        .map(r -> r.adaptTo(CloudConfiguration.class)).orElseThrow(IllegalArgumentException::new);
    ((List<CloudConfiguration>) field.get(list)).add(config);

    Assert.assertNotNull(list.getCloudConfigurations());
    assertEquals(1, list.getCloudConfigurations().size());

    config = list.getCloudConfigurations().get(0);
    Assert.assertNotNull(config);
    assertEquals("/conf/test", config.getItemPath());
    assertEquals("/", config.getConfigPath());
    assertEquals("Test Cloud Config", config.getTitle());
  };

  @Test
  void invalid() {
    MockRequestPathInfo requestPathInfo = (MockRequestPathInfo) context.request().getRequestPathInfo();
    requestPathInfo.setSuffix("");

    CloudConfigurationList list = context.request().adaptTo(CloudConfigurationList.class);

    Assert.assertNotNull(list);
    Assert.assertNotNull(list.getCloudConfigurations());
    assertEquals(0, list.getCloudConfigurations().size());
  }
}
