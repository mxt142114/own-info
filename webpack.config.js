const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development", // production、development、none
    entry: './src/index.js', // string | object | array
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "build.js"
    },
    module: { // 模块配置
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader']
        }, { // 加载css
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, { // 加载图片
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.s[a|c]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    target: 'web', // 运行环境
    devServer: {
        hot: true,
        open: true,
        port: 4000,
        https: false,
        host: 'localhost'
    },
    plugins: [ // 附加插件列表
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve('src')
        }
    },
    performance: false, // 性能提示
    profile: true, // 捕获时机信息
    bail: true, // 在第一个错误出错时抛出，而不是无视错误
    cache: true, // 禁用/启用缓存
    watch: true // 启用观察
}
