const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");


var packages ={
    default: {
        entry: ["./dev.js"],
        filename: "./dist/absol-colorpicker.js"
    }
}

const PACKAGE = 'default';


module.exports = {
    mode: process.env.MODE || "development",
    // mode: 'production',
    entry: packages[PACKAGE].entry,
    output: {
        path: path.join(__dirname, "."),
        filename: packages[PACKAGE].filename
    },
    resolve: {
        modules: [
            './node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: [[ '@babel/preset-env', { modules: false }]] }
            },
            {
                test: /\.(tpl|txt|xml|rels|css)$/i,
                use: 'raw-loader',
            }
        ]
    },
    devServer: {
        compress: true
    },
    performance: {
        hints: false
    },
    plugins: [
        new MinifyPlugin()
    ]
};