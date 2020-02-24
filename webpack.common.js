const path =require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, "src","index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loaders:  ["react-hot-loader/webpack", "babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
    ]
};
