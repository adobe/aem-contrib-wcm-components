/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const isEnvironmentTest = process.env.NODE_ENV === 'test';
const isEnvironmentProd = process.env.NODE_ENV === 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const sourceMap = (isEnvironmentProd) ? '' : 'inline-source-map';

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: sourceMap,
    output: {
        globalObject: `typeof self !== 'undefined' ? self : this`,
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
        library: 'cqSpaCoreComponents',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|dist)/,
                use: 'babel-loader',
                enforce: 'post',
            }].concat(isEnvironmentTest ?
            {
                test: /\.js$|\.jsx$/,
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
        alias: {
            'react-router-dom': path.resolve('./node_modules/react-router-dom')
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};