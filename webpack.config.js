const webpack               =   require('webpack');
const path                  =   require('path');
const HTMLWebpackPlugin     =   require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: './index.js',

    output: {
        filename: 'bundle.webpack.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'eval',

    devServer: {
        port: 4200
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: 'Vanilla SPA',
            template: './index.html'
        })
    ]
}