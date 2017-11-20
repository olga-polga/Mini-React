var webpack = require('webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');
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
        path: __dirname + '/public/',
        filename: './built/bundle.js'
    },
    module: {
        loaders: loaders
    },
    devServer: {
        contentBase: 'public'
    },
    plugins: [
        // Makes some environment variables available to the JS code, for example:
        // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':
                JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.ROUTER_URL': '"fsdgsdgg"'
            })
    ],

};

module.exports = config;