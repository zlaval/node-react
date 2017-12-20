const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: "./client/src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel-loader",
                test: /\.js$/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'client/src/index.html',
            chunks: ['app']
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "client", "dist"),
        port: 9000
    }

}