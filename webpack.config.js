var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

var config = {
    entry: [
        path.join(PATHS.src, 'index.js')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            inject: true,
            title: "React + CSSX",
            template: path.join(PATHS.src, 'index.html')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel!cssx-loader',
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: PATHS.build,
        hot: true,
        inline: true,
        progress: true,
        historyApiFallback: true
    }
};

module.exports = config;