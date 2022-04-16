/**
 * webpack配置文件
 */
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // 入口
    entry: {
        index: './src/index.js',
        my: './src/my.js',
    },

    // 出口
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].bundle.[contenthash].js',
    },

    // 模块设置
    module: {
        rules: [
            // 配置多个规则
            // 解析css
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'], // style-loader必须在css-loader前面，否则样式不生效
            },
            // 解析less
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
            },
            // 编译es5以上的语法
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage', // 按需加载
                                    corejs: 3, // 指定版本
                                    targets: 'defaults',
                                },
                            ],
                        ],
                        // 开启babel缓存
                        cacheDirectory: true
                    },
                },
            },

            // 解析打包图片
            {
                test: /\.(png|gif|jpe?g)$/i,
                // asset可以在asset/inline和asset/resource之间进行切换，文件小于8kb时使用asset/inline，否则使用asset/resource
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024,
                    },
                },
                generator: {
                    filename: './img/[name][ext]',
                },
            },

            // 解析打包字体
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                // asset可以在asset/inline和asset/resource之间进行切换，文件小于8kb时使用asset/inline，否则使用asset/resource
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024,
                    },
                },
                generator: {
                    filename: './fonts/[name][ext]',
                },
            },
        ],
    },

    // 服务器开发
    devServer: {
        static: {
            directory: resolve(__dirname, '../dist'),
        },
        liveReload: true,
        compress: true,
        port: 8888,
        proxy: {
            '/api': {
                target: 'https://api.xdclass.net',
                pathRewrite: {
                    '^/api': '',
                },
                secure: false,
            },
            changeOrigin: true,
        },
    },

    target: 'web',

    // 抽离出公共文件配置
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    devtool: 'eval-cheap-module-source-map',

    // 模块解析
    resolve: {
        alias: {
            '@': resolve('src'),
        },
        extensions: ['.js', '.json', '.less']
    },

    //排除依赖打包
    externals: {
        jquery: 'jQuery'
    }
};