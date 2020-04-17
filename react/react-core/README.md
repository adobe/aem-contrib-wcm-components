[![CircleCI](https://circleci.com/gh/adobe/aem-contrib-wcm-components.svg?style=svg)](https://circleci.com/gh/adobe/aem-contrib-wcm-components) [![codecov](https://codecov.io/gh/adobe/aem-contrib-wcm-components/branch/master/graph/badge.svg)](https://codecov.io/gh/adobe/aem-contrib-wcm-components)


# AEM WCM Components - Community Contributions - React core proposal - Beta

This is a branch of the AEM WCM Components - Community Contributions maintained by Niek Raaijmakers for now.
It serves as proposal to introduce react wrappers, that are compatible to be used with web components or the spa editor.

Currently supported / exported components:

 - AbstractCoreComponent
 - BreadCrumb (V2)
 - Button (V1)
 - Text (V2)
 - Teaser (V1)
 - Title (V2)

Exported interfaces:

CoreComponentModel
CoreComponentState

## how does this help me??

Please check the github source folder ( react maven sub module ) on how this all works together
You leverage these classes in conjunction with web components / spa editor on top of the core components.

If you need nothing else, you just need to provide styling and you are done.
If you  need to extend the classes, please check the typescript definitions / source code, you can overload methods at will, they are all overrideable. 

## why such shitty docs??

Well, I am not an engineer, I am a consultant, and work for the customer always comes first.
I don't have time to provide extensive documentation at this point, although I would love to. 
Perhaps in the future, but no promises! Feel free to improve the documentation by providing PR's.

## Legal disclaimer

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
As this project is a proposal and maintained by me (at time of development) as Adobe employee, it's copyrights belong to Adobe Systems. 

However this project in no way officially provided or supported by Adobe Systems, and Adobe Systems will take no responsibility for financial, 
indirect or any other sorts of damages incurred by the usage of this software. Use at your own risk.


