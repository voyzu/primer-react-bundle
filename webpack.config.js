const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'react-primer-bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'ReactPrimerBundle',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'production',
};
