const path =require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const  MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(common, {
          entry: path.resolve(__dirname, "src", "index.js"),
          mode: "production",
          output: {
                path: path.resolve(__dirname, "build"),
                filename: "bundle.[hash].js"
          },
          optimization: {
                   minimizer: [
                       new OptimizeCssAssetsPlugin(),
                        new TerserWebpackPlugin(),
                         new HtmlWebpackPlugin({
                               template: './public/index.html',
                               minify: {
                                     collapseWhitespace: true,
                                     removeComments: true,
                                     removeRedundantAttributes: true,
                                     removeScriptTypeAttributes: true,
                                     removeStyleLinkTypeAttributes: true,
                                     useShortDoctype: true
                               }
                         })
                   ]
            },
      plugins: [new CleanWebpackPlugin( {
            verbose: true
      }), new MiniCssExtractPlugin({
            filename: "[name].[hash].css"
      }),],
      module: {
            rules: [
                  {
                        test: /\.css$/i,
                        use: [MiniCssExtractPlugin.loader,//2 Inject styles into DOM
                              'css-loader' //1 turns css into js
                        ],
                  },
            ]}
});
