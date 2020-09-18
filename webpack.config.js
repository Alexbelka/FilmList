const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}= require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename: "[name].[contenthash].js",
        path:path.resolve(__dirname,'build')
    },
    devServer:{
      port:7000
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot2)$/,
                use:['file-loader']
            }
        ]
    }
}


