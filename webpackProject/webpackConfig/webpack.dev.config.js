const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const EslintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const devWebpackConfig = merge(baseWebpackConfig, {
    //配置开发环境
    mode: 'development', //开发环境
    // 插件
    plugins: [
        //全局接口地址设置
        new webpack.DefinePlugin({
            API_BASE_URL: JSON.stringify('https://apidev.xdclass.com')
        }),
        // 自动生成HTML文件和指定的模板
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: '首页'
        }),
        new HtmlWebpackPlugin({
            template: './src/my.html',
            filename: 'my.html',
            title: '我的'
        }),
        // 抽离css代码生成独立的文件
        new MiniCssExtractPlugin({
            filename: './css/main.css'
        }),
        //引用eslint校验
        new EslintPlugin({
            fix: true //自动修正不符合规范的代码
        })
    ]
})

module.exports = devWebpackConfig