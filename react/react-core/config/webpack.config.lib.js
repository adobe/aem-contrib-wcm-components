const config = require('./webpack.config.base');

config.output.library = 'cqCoreComponents';

config.entry = {
    'index': ['./src/index.ts'],
    'ListV2': ['./src/authoring/list/v2/ListV2'],
    'ButtonV1': ['./src/authoring/button/v1/ButtonV1'],
    'TextV2': ['./src/authoring/text/v2/TextV2'],
    'TitleV2': ['./src/authoring/title/v2/TitleV2'],
    'ImageV2': ['./src/authoring/image/v2/ImageV2'],
    'TeaserV1': ['./src/authoring/teaser/v1/TeaserV1'],
    'DownloadV1': ['./src/authoring/download/v1/DownloadV1'],
    'SeparatorV1': ['./src/authoring/separator/v1/SeparatorV1'],
    'BreadCrumbV2': ['./src/layout/breadcrumb/v2/BreadCrumbV2'],
    'NavigationV1': ['./src/layout/navigation/v1/NavigationV1'],
    'LanguageNavigationV1': ['./src/layout/language-navigation/v1/LanguageNavigationV1']
};

module.exports = config;