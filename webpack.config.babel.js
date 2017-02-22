const { resolve } = require('path');

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
            ],
        },
    }

    return config;
}
