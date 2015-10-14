var webpack = require('webpack');

module.exports = {
    entry: 'src/g11n',

    output: {
        path: 'dist',
        filename: process.env.NODE_ENV === 'production' ? 'g11n.min.js' : 'g11n.js',
        libraryTarget: 'umd',
        library: 'G11N'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
};
