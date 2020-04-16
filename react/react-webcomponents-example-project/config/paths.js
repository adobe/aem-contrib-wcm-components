const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const clientLibRelativePath = '/apps/contrib/wcm/clientlibs/react-webcomponents/resources';
const clientLibRoot = resolveApp('../../ui.apps/src/content/jcr_root' + clientLibRelativePath);

module.exports = {
    clientLibRelativePath: clientLibRelativePath,
    clientLibRoot: clientLibRoot
};