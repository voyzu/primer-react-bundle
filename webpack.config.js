const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'react-primer-bundle.css',
        }),
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('CombineCSSFilesPlugin', () => {
                    const files = glob.sync('node_modules/@primer/primitives/dist/**/*.css');
                    let combinedCSS = '';

                    files.forEach(file => {
                        combinedCSS += fs.readFileSync(file, 'utf8') + '\n';
                    });

                    fs.writeFileSync(path.resolve(__dirname, 'dist/primer-primitives-bundle.css'), combinedCSS);
                    console.log('✅ Successfully bundled CSS files to dist/primer-primitives-bundle.css');
                });
            }
        }
    ],
    mode: 'production',
};
