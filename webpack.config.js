var webpack = require('webpack');

module.exports = {
    entry: {
        index: __dirname+'/js/index.jsx'
    },
    output: {
        path: __dirname+'/js/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devtool: 'eval-source-map',
    module: {
        loaders:[
            { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel'] }
        ]
    },
    plugins:[
        new webpack.OldWatchingPlugin()
    ]
};