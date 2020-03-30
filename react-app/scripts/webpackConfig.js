const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpackConfig = require('react-scripts/config/webpack.config.js')('production');
const paths = require('../config/paths');

webpackConfig.output.path = paths.clientLibRoot;
webpackConfig.output.publicPath = process.env.PUBLIC_URL;
webpackConfig.output.filename = "resources/js/[name].[hash:8].js";
webpackConfig.output.chunkFilename = "resources/js/[name].[hash:8].js";
webpackConfig.module.rules.forEach( rule => {
    if(rule.oneOf){
        rule.oneOf.forEach( subRule => {
            if(subRule.options && subRule.options.name)
                subRule.options.name = "resources/media/[name].[hash:8].[ext]";
        });
    }
});

webpackConfig.plugins.forEach(plugin => {
    if(plugin instanceof ManifestPlugin){
        plugin.opts.publicPath = webpackConfig.output.publicPath;
    }

    if(plugin instanceof MiniCssExtractPlugin){
        plugin.options.filename = 'resources/css/[name].[contenthash:8].css';
        plugin.options.chunkFilename = 'resources/css/[name].[contenthash:8].chunk.css';
    }
});

module.exports = webpackConfig;