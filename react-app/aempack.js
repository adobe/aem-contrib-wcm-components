'use strict';
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const clientLibRelativePath = '/apps/contrib/wcm/clientlibs/react-webcomponents';
const clientLibRoot = resolveApp('../ui.apps/src/content/jcr_root/apps/contrib/wcm/clientlibs/react-webcomponents');



const aemPack = require('aempack');

const developWithSSR = process.env.DEVELOPSSR || false;
const webpackConfig = require('react-scripts/config/webpack.config.js')('development');

webpackConfig.output.path = clientLibRoot;

const user = process.env.AEMUSER  || 'admin';
const password = process.env.AEMPW || 'admin';

const aemPort = process.env.AEMPORT || 4502;
const aemHost = process.env.AEMHOST || 'localhost';


const proxyHost = process.env.PROXYHOST || 'localhost';
const proxyPort = process.env.PROXYPORT || 443;


const computeProxyUrl = () => {

    const port = proxyPort === 80 ? '' : ':' + aemPort;
    return 'http://' + proxyHost + port;
};

//const serverWebpackConfig = require('../config/webpack.config.server.dev');

aemPack({
    delays: {
        postCompiledDebounceDelay: 10,
        serverSpawnDelay: 500,
        folderPushDelay: 10
    },
    browserSync: {
        https: true,
        enabled: true,
        sendDispatcherHeader: true,
        proxyUrl: computeProxyUrl(),
        proxyPort: proxyPort
    },
    webpackConfig: webpackConfig,
    // webpackServerConfig: serverWebpackConfig,
    disableServerSideRendering: !developWithSSR,

    aemProtocol: 'http',
    aemHost: aemHost,
    aemPort: aemPort,
    aemUser: user,
    aemPassword: password,

    clientLibRelativePath: clientLibRelativePath,
    clientLibAbsolutePath: clientLibRoot,
});



