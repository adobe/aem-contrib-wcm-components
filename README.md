[![CircleCI](https://circleci.com/gh/adobe/aem-contrib-wcm-components.svg?style=svg)](https://circleci.com/gh/adobe/aem-contrib-wcm-components) [![codecov](https://codecov.io/gh/adobe/aem-contrib-wcm-components/branch/master/graph/badge.svg)](https://codecov.io/gh/adobe/aem-contrib-wcm-components)


# AEM WCM Components - Community Contributions

This repository was created to allow community contributions for AEM WCM Components to be shared and tested, before they would be integrated into the [Core Components](https://github.com/adobe/aem-core-wcm-components/).

This is a good place to submit your ideas and have them reviewed by the community. It's also a good place for quick iterations. Once an idea matures and starts being used, we will consider it for inclusion into the Core Components.

## Installation

First install :
 
- SP 6.5.4  
- Core components 
- Core components examples

then in the root folder run: 

maven clean intall -Drat.skip -PignoreCodeCoverageCheck,autoInstallPackage,autoInstallSinglePackage

Check:
http://localhost:4502/content/contrib-react-spacomponent-examples/library/button.html

And: 
http://localhost:4502/content/contrib-react-webcomponent-examples/library/button.html

## Mailing List

For discussions and Q&A, you can use our public mailing list hosted on [googlegroups.com](https://groups.google.com/forum/#!forum/aem-core-components-dev). 
You can also subscribe via Email [aem-core-components-dev+subscribe@googlegroups.com](mailto:aem-core-components-dev+subscribe@googlegroups.com).

## Contributing

Contributions are welcome! Read the [Contributing Guide](CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.

