const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const paths = {
    src: path.resolve(__dirname, 'src'),
    www: path.resolve(__dirname, 'www')    
};

module.exports = {
    entry: path.resolve(paths.src, 'index.ts'),
    devtool: 'sourcemap',
    output: {
        path: paths.www,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                include: [ paths.src ],
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(paths.src, 'index.html'),
                to: path.resolve(paths.www, 'index.html')
            }
        ])
    ]
};