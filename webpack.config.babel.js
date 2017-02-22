const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
    const config = {
        context: resolve('src'),
        entry: './bootstrap.js',
        output: {
            filename: 'bundle.js',
            path: resolve('dist'),
            publicPath: '/dist/',
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
        ],
    }

    return config;
}
