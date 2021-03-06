const path =require("path");

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
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "imgs"
                        }
                    },
                ],
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            }
        ]
    }
};
