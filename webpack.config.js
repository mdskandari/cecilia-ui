const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devMode = process.env.NODE_ENV !== "production";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        main: path.join(__dirname, "src", "index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist',
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Cecilia UI',
            template: path.join(__dirname, "public", "index.html"),
        }),
        new MiniCssExtractPlugin()
    ],//.concat(devMode ? [] : [new MiniCssExtractPlugin()]),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ],
      
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // use: ['file-loader'],
                type: 'asset',
            },
            // {
            //     test: /\.svg$/,
            //     use: ['@svgr/webpack'],
            //   },
    
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset',
            // },
            // {
            //     test: /.ts$/,
            //     use: 'ts-loader'
            // }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    devServer: {
        
        static: {
            directory: path.join(__dirname, 'public'),

        },
        
        port: 3000,

    }

};