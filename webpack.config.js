const webpack = require('webpack');
const path = require("path");
const config = {
    entry: './app.ts',
    output: { 
        filename: 'webpack.bundle.js',
        publicPath: '/',
        path: "/"
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
        },
    module: {
        rules: [{ 
            test: /\.tsx?$/, 
            use: 'awesome-typescript-loader',
            exclude: /node_modules/
        }]
    },
}
module.exports = config;