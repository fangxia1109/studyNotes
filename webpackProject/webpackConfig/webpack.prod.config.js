const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const EslintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const prodWebpackConfig = merge(baseWebpackConfig, {
    //配置生产环境
    mode: 'production', //开发环境

    // 插件
    plugins: [
        //全局接口地址设置
        new webpack.DefinePlugin({
            API_BASE_URL: JSON.stringify('https://apiprod.xdclass.com')
        }),
        // 自动生成HTML文件和指定的模板
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: '首页',
            minify: {
                collapseWhitespace: true, // 清除空格换行
                removeComments: true, // 清除注释
            },
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/my.html',
            filename: 'my.html',
            title: '我的',
            minify: {
                collapseWhitespace: true, // 清除空格换行
                removeComments: true, // 清除注释
            },
            chunks: ['my']
        }),
        // 抽离css代码生成独立的文件
        new MiniCssExtractPlugin({
            filename: './css/main.[contenthash].css'
        }),
        //压缩css文件
        new CssMinimizerWebpackPlugin(),
        //引用eslint校验
        // new EslintPlugin({
        //     fix: true //自动修正不符合规范的代码
        // }),
        // 打包文件可视化工具
        // new BundleAnalyzerPlugin()
    ]
})

module.exports = prodWebpackConfig