"use strict";
var path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const NODE_ENV = process.env.NODE_ENV;

console.log('oOooooOoo::::::', process.env.NODE_ENV);

const ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION = NODE_ENV === 'production';
const ENV_TEST = NODE_ENV === 'test';
const ENV_STAGING = NODE_ENV === 'staging';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3003;

const config = {
    cache: true,
    debug: true,
    devtool: 'inline-source-map'
    // devtool: 'cheap-module-source-map'
};

config.resolve = {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('.')
};

config.entry = {
    mu: [
        path.resolve(__dirname, './app/index.js')
    ]
};

config.module = {
    loaders: [
        {
            loader: 'babel-loader',
            test: path.join(__dirname, 'app'),
            query: {
                presets: 'es2015'
            }
        }
    ]
};

config.plugins = [
    // 代码异常不编译
    new webpack.NoErrorsPlugin(),
    // 清理编译后的文件夹
    new CleanWebpackPlugin(['dist'], {
        verbose: true
    })
];


if(ENV_PRODUCTION) {
    // JS MAP TYPE
    config.devtool = 'source-map';

    config.output = {
        filename: '[name].js',
        path: path.resolve('./dist')
    };

    config.plugins.push(

        // new WebpackMd5Hash(),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                dead_code: true, // eslint-disable-line camelcase
                screw_ie8: true, // eslint-disable-line camelcase
                unused: true,
                warnings: false
            }
        })
    );
}

module.exports = config;

