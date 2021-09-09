const path = require("path")
const glob = require("glob")
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        "bundle.js": 
            glob.sync("build/static/?(js|css)/main.*.?(js|css)")
                .map(f => path.resolve(__dirname, f)),
    },
    output: {
        filename: "build/static/js/bundle.min.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}

