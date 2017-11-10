module.exports = [
    {
        test: /\.js$/,
        //test: path.join(__dirname, '.js'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
    },
    {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1']
    }
];
