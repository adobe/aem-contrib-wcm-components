# AEM WCM Core Web Components

This is a [Web Components](https://www.webcomponents.org/) implementation of [AEM WCM Core Components](https://github.com/adobe/aem-core-wcm-components) using custom elements for the markup and allowing client-side overlay of generated markup and CSS/JavaScript.

The custom elements markup is defined in the [ui.apps](./ui.apps) module.

The clientside Web Components are defined in:
* [ui.frontend.vanilla](./ui.frontent.vanilla) - Vanilla JavaScript implementation
* [ui.frontend.litelement](./ui.frontend.litelement) - [LitElement](https://lit-element.polymer-project.org/) based implementation

The default implementations are packaged as clientlibs that can be included in a project, using the following categories:

* `contrib.wcm.webcomponents.vanilla` - for the Vanilla Javascript implementation
* `contrib.wcm.webcomponents.litelement` - for the LitElement-based implementation

Individual components are exported by each module and can be imported, customized and assembled in project-specific clientlibs.