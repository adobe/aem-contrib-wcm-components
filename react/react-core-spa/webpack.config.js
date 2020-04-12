var path = require('path');

var isEnvironmentTest = process.env.NODE_ENV === 'test';
var nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'source-map',
    output: {
        globalObject: `typeof self !== 'undefined' ? self : this`,
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
        library: 'core',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.ts$|\.tsx$/,
                exclude: /(node_modules|dist)/,
                use: 'ts-loader',
                enforce: 'post',
            }].concat(isEnvironmentTest ?
            {
                test: /\.ts$|\.tsx$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: {
                        esModules: true,
                        presets: ["env", "react", "stage-2"]
                    }
                },
                enforce: 'post'
            } : [])
    },
    externals: [!isEnvironmentTest ? nodeExternals({
        modulesFromFile: {
            exclude: ['dependencies']
        }
    }) : ''],
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};
