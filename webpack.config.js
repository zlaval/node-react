const path = require('path')

module.exports = {
    entry: "./client/src/index.js",
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}