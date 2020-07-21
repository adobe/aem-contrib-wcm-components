const config = require('./webpack.config.base');

config.output.library = 'cqSpaCoreComponents';

config.entry = {
    'index': ['./src/index.js'],
    'AccordionV1': ['./src/container/accordion/v1/AccordionV1.jsx'],
    'CarouselV1': ['./src/container/carousel/v1/CarouselV1.jsx'],
    'ContainerV1': ['./src/container/container/v1/ContainerV1.jsx'],
    'TabsV2': ['./src/container/tabs/v2/TabsV2.jsx']
};

module.exports = config;


