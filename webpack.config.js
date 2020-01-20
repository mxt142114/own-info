const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }, {
                loader: 'eslint-loader',
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }],
            enforce: "pre",
            exclude: /node_modules/,
            include: [path.resolve(__dirname, 'src')]
        }, { // 解析css
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, { // 解析图片
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, { // 解析sass/scss文件
            test: /\.s[a|c]ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, { // 解析less文件
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        }]
    },
    target: 'web', // 运行环境
    devServer: { // webpack-dev-server相关配置
        hot: true,
        port: 4000,
        https: true,
        host: 'localhost'
    },
    plugins: [ // 附加插件列表
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
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
