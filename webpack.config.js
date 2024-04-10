const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/' // in webpack 4 if not used sets to auto
    },
    mode: 'none', 
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/inline'
            }
        ]
    }
};