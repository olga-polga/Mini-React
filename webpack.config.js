var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var node_dir = __dirname + '/node_modules';
const loaders = require('./webpack.loaders')

loaders.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader']
})

var config = {
    entry: './src/main/js/index.js',
    output: {
        path: __dirname,
        filename: './built/bundle.js'
    },
    module: {
        loaders: loaders
    },
    externals: {
        'Config':
            JSON.stringify({serverUrl: "http://localhost:9091"})
    },
    devServer: {
        contentBase: './src/main/resources/static'
    },

};

module.exports = config;