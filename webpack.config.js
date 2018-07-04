var webpack = require('webpack');
var path = require('path');
 
module.exports = {
    devtool: 'source-map',
    mode: 'development', 
    entry: {
        main: './utils/index.js'
    },
    output: {
        path: path.join(__dirname, '.generated'),
        filename: 'webpack-bundle.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [ /\/node_modules\// ]
            },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.html$/, loader: "html-loader" },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         "style-loader", // creates style nodes from JS strings
            //         "css-loader", // translates CSS into CommonJS
            //         "sass-loader" // compiles Sass to CSS
            //     ]
            // },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader" // translates CSS into CommonJS
                ]
            }
        ]
    }
};