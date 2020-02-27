package com.adobe.cq.contrib.wcm.components.ui.testing;
import static com.codeborne.selenide.Browsers.CHROME;
import static com.codeborne.selenide.Browsers.EDGE;
import static com.codeborne.selenide.Browsers.FIREFOX;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.SelenideConfig;
import com.codeborne.selenide.SelenideDriver;
import com.codeborne.selenide.SelenideElement;
import io.github.bonigarcia.seljup.BrowserType;
import io.github.bonigarcia.seljup.DockerBrowser;
import io.github.bonigarcia.seljup.SelenideConfiguration;
import io.github.bonigarcia.seljup.SeleniumExtension;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.openqa.selenium.remote.RemoteWebDriver;

@Tag("demo")
@DisplayName("Demo Test Class with Selenium Jupiter")
public class FirstTest extends BaseTest {

    @Test
    @DisplayName("Open Test Page")
    void openTestPage()  {
        d.open("http://10.132.1.48:6602/editor.html/content/core-components/core-components-page.html");
        d.$("div[data-path='/content/core-components/core-components-page/jcr:content/root/responsivegrid/*']").click();
        d.$("button[data-path='/content/core-components/core-components-page/jcr:content/root/responsivegrid/*']").click();
        d.$("coral-selectlist coral-selectlist-item[value='/libs/wcm/foundation/components/responsivegrid\'").click();
    }

    @Test
    @DisplayName("Open CRXDE")
    void openCRXDE()  {
        d.open("http://10.132.1.48:6602/crx/de");
    }

}
