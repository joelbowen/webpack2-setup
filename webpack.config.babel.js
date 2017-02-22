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
    }

    return config;
}
