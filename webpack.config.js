const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: "/dist/",
        filename: "main.js"
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public/")
        },
        port: 3000,
        devMiddleware: {
            publicPath: "http://localhost:3000/dist/"
        },
        hot: "only"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};