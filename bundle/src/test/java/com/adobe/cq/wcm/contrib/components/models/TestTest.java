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
package com.adobe.cq.wcm.contrib.components.models;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class TestTest {

    @Test
    public void testAll() {
        com.adobe.cq.wcm.contrib.components.models.Test test = new com.adobe.cq.wcm.contrib.components.models.Test();
        Assertions.assertEquals(com.adobe.cq.wcm.contrib.components.models.Test.TEST, test.getTest());
        Assertions.assertEquals(com.adobe.cq.wcm.contrib.components.models.Test.RT, test.getExportedType());
    }
}
