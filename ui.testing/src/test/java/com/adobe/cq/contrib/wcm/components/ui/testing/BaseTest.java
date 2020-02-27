package com.adobe.cq.contrib.wcm.components.ui.testing;

import com.codeborne.selenide.SelenideDriver;
import io.github.bonigarcia.seljup.BrowserType;
import io.github.bonigarcia.seljup.DockerBrowser;
import io.github.bonigarcia.seljup.SelenideConfiguration;
import io.github.bonigarcia.seljup.SeleniumExtension;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.openqa.selenium.remote.BrowserType.CHROME;

@ExtendWith(SeleniumExtension.class)
public class BaseTest {

    static SelenideDriver d;

    // For running in local browsers
    // @SelenideConfiguration(browser = CHROME) SelenideDriver d

    // For running in docker browsers
    // @DockerBrowser(type = BrowserType.CHROME) SelenideDriver d

    @BeforeAll
    static void beforeClass(@SelenideConfiguration(browser = CHROME) SelenideDriver d) {
        FirstTest.d = d;
        d.open("http://10.132.1.48:6602/libs/granite/core/content/login.html");
        d.$("input[id='username']").setValue("admin");
        d.$("input[id='password']").setValue("admin");
        d.$("button[id='submit-button']").click();
    }


    @BeforeEach
    void before() {

    }

    @AfterEach
    void after() {

    }

    @AfterAll
    static void afterClass() {

    }
}
