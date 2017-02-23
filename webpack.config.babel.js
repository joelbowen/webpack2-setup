const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = env => {
    const config = {
        context: resolve('src'),
        entry: './bootstrap.js',
        output: {
            filename: 'bundle.js',
            path: resolve('dist'),
        },
        module: {
            loaders: [
                { test: /\.(js?x)$/, loaders: ['babel-loader'], exclude: /node_modules/ },
                {
                  test: /\.css$/,
                  loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader',
                  }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new HtmlWebpackPlugin({
                template: './index.html',
            }),
            new OfflinePlugin(),
        ],
    }

    return config;
}
