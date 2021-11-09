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
"use strict";

class Title extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();

        // Element functionality written in here

        // Create a shadow root
        const shadow = this.attachShadow({mode: "closed"}); // sets and returns 'this.shadowRoot'

        shadow.append(this.markup(this.getAttribute("data-cmp-title-heading"), this.innerHTML, this.getAttribute("data-cmp-title-link")));
    }

    // Create heading element
    markup(heading, text, link) {
        const element = document.createElement(heading || "h1");
        if (link) {
            const link = document.createElement("a");
            link.setAttribute("href", link);
            link.innerHTML = text;
            element.append(link);
        } else {
            element.innerHTML = text;
        }
        return element;
    }
}

customElements.define("cmp-title", Title);

module.exports = Title;