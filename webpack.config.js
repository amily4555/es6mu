"use strict";
var path = require('path');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
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
    // devtool: 'cheap-module-source-map'
    devtool: 'inline-source-map'
};


config.resolve = {
    extensions: ['', '.html', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('.'),
    alias: {
        'jquery': require.resolve('jquery'),
        'mu': require.resolve('mzmu')
    }
};

config.entry = {
    vendor: [
        'jquery',
        'eonasdan-bootstrap-datetimepicker',
        'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css',
        'mu'
    ],

    ng: [
        'angular',
        'angular-ui-router',
        'angular-resource',
        'angular-translate',
        'angular-sanitize',
        'angular-bootstrap',
        'angular-dialog-service',
    ],

    main: [
        path.resolve(__dirname, 'app/app.init.js')
    ]
};

config.output = {
    filename: 'scripts/[name].js',
    path: path.resolve('./app'),
    publicPath: '/'
};

config.module = {
    loaders: [
        {
            test: require.resolve('jquery'),
            loader: 'expose?$!expose?jQuery'
        },

        {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'app/'),
                path.resolve(__dirname, 'node_modules/response-data-delayering')
            ],
            loader: 'ng-annotate?map=false!babel-loader',
            presets: ['es2015']
        },
        {
            test: /\.html$/,
            loader: 'raw',
            include: path.resolve(__dirname, 'app/')
        },
        {
            test: /\.(png|jpg|jpge|gif|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=4098&name=images/[name].[hash].[ext]'
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!sass')
            // loader: 'style!css'
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!sass')
            // loader: 'style!css!sass'
        }

    ]
};


config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),

    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',

        // bootstrap v4 before install tether
        "window.Tether": 'tether'
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'ng'],
        minChunks: Infinity
    }),

    new ExtractTextPlugin('styles/[name].[contenthash].css'),
    new CopyWebpackPlugin([
        {from: './app/assets', to: 'assets'},
        {from: './app/get.html', to: ''},
        {from: './app/store', to: 'store'}
    ]),

    new HtmlWebpackPlugin({
        chunkSortMode: 'dependency',
        filename: 'index.html',
        hash: false,
        inject: 'body',
        template: './app/index.html'
    })
];

config.postcss = [
    autoprefixer({browsers: ['last 3 versions']})
];

config.sassLoader = {
    outputStyle: 'compressed',
    precision: 10,
    sourceComments: false
};

config.entry.main.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}`);

config.devServer = {
    contentBase: path.resolve(__dirname, 'app/'),
    historyApiFallback: true,
    host: HOST,
    outputPath: config.output.path,
    port: PORT,
    publicPath: config.output.publicPath,
    stats: {
        cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: false,
        colors: true,
        hash: false,
        reasons: true,
        timings: true,
        version: false
    }
};


if(ENV_PRODUCTION) {
    // config.devtool = 'source-map';

    // config.entry = {
    //     vendor: path.resolve('./node_modules/angular/angular.js')
    // };

    config.output = {
        filename: 'scripts/[name].[hash].js',
        path: path.resolve('./dist'),
        publicPath: ''
    };

    config.plugins.push(
        new CleanWebpackPlugin(['dist'], {
            verbose: true
        }),
        new WebpackMd5Hash(),

        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                dead_code: true, // eslint-disable-line camelcase
                screw_ie8: true, // eslint-disable-line camelcase
                unused: true,
                warnings: false
            }
        }),

        new CopyWebpackPlugin([
            {from: path.resolve('./dist'), to: path.resolve('../ec____ui/dist')}

        ])
    );
}

module.exports = config;

