//import {Configuration} from 'webpack';
const webpack = require('webpack');
const tsLoader = require("ts-loader");
const path = require("path");
const config = {
    entry: './app.ts',
    output: { filename: './webpack.bundle.js' },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
        },
    module: {
        rules: [{ 
            test: /\.tsx?$/, 
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
}
module.exports = config;