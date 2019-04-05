const path = require('path')
// const VueLoaderPlugin = require('vue-loader')
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack')
const HtmlWebpackPlugin =require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        }),
        // new VueLoaderPlugin()
    ],
    devServer: {
        open: true,
        inline: true,
        host: '0.0.0.0',
        hot: true,
        port: 3000,
        contentBase: 'src'
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jepg|jpg|gif|png|bmp)$/, use: 'url-loader ? limit=10000&name=[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'
            },
        ]
    },
    resolve: {
        alias: {
            // 'vue$': 'vue/dist/vue.js'
            
        }
    }
}
