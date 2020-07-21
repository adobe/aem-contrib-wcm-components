const DllPlugin = require("webpack").DllPlugin;
const config = require('./webpack.config.base');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

config.output.library = 'AbstractCoreContainerComponent';

config.entry = {
    'AbstractCoreContainerComponent': ['./src/AbstractCoreContainerComponent.jsx'],
};

config.plugins.push(new CleanWebpackPlugin());
config.plugins.push(
    new DllPlugin({
        context: path.join(__dirname, '..'),
        name: "[name]",
        path: path.resolve(__dirname, `./dist/manifest/[name].json`),
    })
);

module.exports = config;