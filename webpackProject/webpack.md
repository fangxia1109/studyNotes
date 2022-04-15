* webpack是什么

  * webpack其实就是一个javaScript应用程序的**静态模块打包工具**
  * 静态模块
    * 模块化开发，避免重复代码、逻辑，提高开发效率
  * 打包
    * 将各个模块，按照一定的规则组装起来
  * 特点
    * 构建（不支持的代码转换成支持的代码）
      * 源代码编译成浏览器能解析的生产代码（如：es6=>es5，scss =>css)
      * 格式化校验
      * 压缩
    * 打包
      * 把多个文件合并成一个文件，减少http请求的次数，提高生产环境的运行效率
    * 发布web服务
      * 生成本地的服务器，监听开发代码的修改，自动更新页面的显示
  * 功能
    * 将多个不同类型文件打包
    * 编译代码，确保浏览器能解析
    * 对代码进行压缩，减少文件体积，提高加载速度
    * 对源代码进行格式化校验
    * 有热更新功能，提高开发效率
    * 不同环境，提供不同的打包策略

* webpack五个核心配置

  * 入口（Entry）
    * 告诉webpack应该使用哪个模块，来作为构建整个项目的开始
  * 出口（Output）
    * 告诉webpack在哪里输出她所创建的bundle，以及如何命名这些文件（默认为main.js)
  * 加载器（Loader)
    * webpack只能理解JS和JSON文件，loader让webpack能够去处理其他类型的文件，并将它们转化为有效模块，以供应用程序使用
    * 例子:css-loader|html-loader
  * 插件（Plugins）
    * 插件是webpack的支柱功能，能够执行范围更广的任务，包括：打包优化、压缩、重新定义环境的变量等
    * 例子：html-webpack-plugin
  * 模式（Mode）
    * 区分环境，不同的环境打包逻辑不同
      * development （优化打包速度，提供调试的辅助功能）
      * production（优化打包结果，打包之后代码的运行效率和性能优化）
      * none （最原始的打包）

* webpack配置文件

  * 特点

    * 简化命令行的选项
    * 默认配置文件名称为webpack.config.js
    * 操作webpack大部分都是在配置webpack.config.js文件

  * 配置详情

    * mode（模式）

      ```vue
      //打包配置模式
      mode: 'development'
      ```

    * entry（入口）

      ```vue
      //入口文件配置
      entry: './src/index.js'
      ```

    * output（出口）

      ```vue
      const {resolve} = require('path')
      //出口文件配置
      output: {
      	//所有输出文件的目标路径，必须是绝对路径
      	path: path.resolve(__dirname, 'dist'),
      	//出口文件名配置
      	filename: 'bundle.js'
      }
      ```

    * module（模块-loader配置）

      ```vue
      //模块配置
      modules: {
      	rules: [
      		//配置多个模块规则（配置loader、解析器等选项）
      	]
      }
      ```

    * devServer（用于快速开发应用程序）

      ```vue
      //开发服务器
      devServer: {},
      ```

    * plugin（插件）

      ```vue
      //插件配置
      plugins: []
      ```

  * 打包命令设置

    ```vue
    //package.json
    "scripts": {
    	"dev": "webpack"
    }
    ```

* HTML资源打包-自动生成HTML文件和指定模板

  * 自动生成HTML文件（html-webpack-plugin)

    * 定义

      * 该插件可以生成一个HTML文件，并在HTML中加载所有打包资源，便于服务器访问

    * 安装

      ```vue
      npm install html-webpack-plugin -D
      ```

    * 引入

      ```vue
      //webpack.config.js
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      ```

    * 配置

      ```vue
      //webpack.config.js
      plugin: [
      	new HtmlWebpackPlugin(),
      ]
      ```

  * 指定生成HTML模板

    * 新建HTML文件

      ```vue
      // ./src/index.html
      ```

    * 配置

      ```vue
      // webpack.config.js
      plugins: [
      	new HtmlWebpackPlugin({
      		template: './src/index.html', //指定html模板
      		filename: 'index.html',	//指定html名称
      		title: 'hello webpack' //指定html title
      	})
      ]
      ```

    * title使用

      ```vue
      // 使用EJS语法，是JS的模板引擎
      <title><%=htmlWebpackPlugin.options.title%></title>
      ```

* 打包多个HTML页面和压缩

  * 打包多个HTML页面

    * 配置

      ```vue
      // webpack.config.js
      plugins: [
        new HtmlWebpackPlugin({
          template:'./src/index.html',  
          filename:'index.html',        
          title:'首页'          
        }),
        new HtmlWebpackPlugin({
          template:'./src/index.html',  
          filename:'mine.html',       
          title:'我的'          
        }),
      ],
      ```

    * 跳转设置

      ```vue
      // index.html
      <body>
        <div>小滴课堂</div>
        <a href="index.html">首页</a>
        <a href="mine.html">我的</a>
      </body>
      ```

  * 压缩

    * 配置

      ```vue
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: '我的',
        filename: 'mine.html',
        minify: {
          collapseWhitespace: true,  // 清除空格换行
          removeComments: true,      // 清除注释
        }, 
      }),
      ```

* 剖析CSS打包的原理

  * 打包css的loader

    * css-loader
      * 将css代码转化为js代码，合并到打包后的js文件中
    * style-loader
      * 将包含css内容的js代码，插入到html中style标签中

  * 安装

    ```vue
    npm install css-loader style-loader -D
    ```

  * css文件引入

    ```vue
    //index.js
    import './css/main.css'
    ```

  * webpack配置文件中配置规则

    ```vue
    //模块配置
    module: {
    	rules: [
    		//配置多个模块规则（配置loader、解析器等选项）
    		{
    			//匹配css文件
    			test: /\.css$/i,
    			//指定加载器，加载顺序是从右到左或者是从下到上
    			use: ['style-loader', 'css-loader'],
    		}
    	]
    }
    ```

* 将css代码抽离成单独文件

  * mini-css-extract-plugin

    * 安装

      ```vue
      npm install mini-css-extract-plugin -D
      ```

    * 引入

      ```vue
      //webpack.config.js
      const MiniCssExtractPlugin=require('mini-css-extract-plugin')
      ```

    * loader配置（替换style-loader)

      ```vue
      //webpack.config.js
      use:[MiniCssExtractPlugin.loader, 'css-loader']
      ```

    * 实例化插件

      ```vue
      //webpack.config.js
      new MiniCssExtractPlugin({
      	filename: './css/main.css'
      })
      ```

    * 作用

      * 从js文件中抽离出css代码，减少js文件体积
      * 当js文件比较庞大时，可以避免阻碍页面的渲染
      * 提高渲染速度

* 剖析CSS预编译语言

  * css预编译语言的安装

    * less

      ```vue
      npm install less less-loader -D
      ```

    * sass

      ```vue
      npm install node-sass sass-loader -D
      ```

    * stylus

      ```vue
      npm install stylus stylus-loader -D
      ```

  * 使用

    ```vue
    //index.js
    import './css/main.less'
    ```

  * webpack配置文件中配置规则

    ```vue
    //模块配置
    module: {
    	rules: [
    		{
    			test:/\.less$/i,
    			use: ['style-loader', 'css-loader', 'less-loader']
    		}
    	]
    }
    ```

* 对特殊的css样式添加兼容前缀

  * 安装

    ```vue
    npm install postcss-loader autoprefixer -D
    ```

  * 配置

    * webpack.config.js

      ```vue
      use: [
      	MiniCssExtractPlugin.loader, 
      	'css-loader', 
      	'postcss-loader' //处理css兼容
      ]
      ```

    * postcss.config.js

      ```vue
      module.exports = {
      	plugin: [require('autoprefixer')], //添加浏览器前缀
      }
      ```

    * package.json

      ```vue
      "browserslist": [
      	"last 2 version", //兼容浏览器的最近两个版本
      	"> 1%" //全球占有率超过1%的浏览器
      ]
      ```

  * 作用

    * 让特殊的css样式兼容各个浏览器

* 压缩CSS代码

  * css-minimizer-webpack-plugin

    * 安装

      ```vue
      npm install css-minimizer-webpack-plugin -D
      ```

    * 引入

      ```vue
      //webpack.config.js
      const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
      ```

    * 配置

      ```vue
      //webpack.config.js
      plugins: [
      	new cssMinimizerWebpackPlugin(),
      ]
      ```

    * 作用

      * 压缩后的代码去除了空格和换行
      * 文件体积更小，提高请求的速度

* JS、其他资源打包和热更新

  * 目的

    * 将ES5以上的语法转成ES5，保证在低版本浏览器的兼容性

  * 安装

    ```vue
    npm install babel-loader @babel/core @babel/preset-env core-js -D
    ```

  * 配置

    ```vue
    {
    	test: /\.m?js$/i,
    	exclude: /node_modules/,
    	use: {
    		loader: 'babel-loader',
    		options: {
    			presets: [
    				['@babel/preset-env',
    					{
    						useBuiltIns: 'usage', //按需加载
    						corejs: 3, //指定版本
    						targets: "defaults"
    					}
    				]
    			]
    		}
    	}
    }
    ```

* 代码格式校验

  * 安装

    ```vue
    npm install eslint eslint-config-airbnb-base eslint-webpack-plugin eslint-plugin-import -D
    ```

    * eslint
      * 检验代码格式的工具
    * eslint-config-airbnb-base
      * js代码格式规范
      * 校验的依据：https://github.com/airbnb/javascript
    * eslint-webpack-plugin
      * webpack的eslint插件
    * eslint-plugin-import
      * 用于在package.json中读取eslintConfig配置项

  * 使用

    ```vue
    // webpack.config.js
    const ESlintPlugin = require('eslint-webpack-plugin')
    
    plugins: [
    	new ESlintPlugin({
    		fix:true //自动修正不符合规范的代码
    	})
    ]
    ```

    ```vue
    //package.json
    "eslintConfig": {
    	"extends": "airbnb-base"
    }
    ```

* 资源模块Asset Modules

  * Asset Modules
    * 定义
      * Asset Modules是一种模块，允许我们在不配置额外loader的情况下使用资源文件（字体、图片、图标、html等）
    * 官方地址：https://webpack.docschina.org/guides/asset-modules/
  * 在webpack4版本，通常使用：
    * raw-loader将文件作为字符串输出
    * file-loader将文件发送到输出目录
    * url-loader设定一个临界值（文件大小），大于该值将文件发送到输出目录，否则将文件转为base64合并到js文件当中
  * 在webpack5版本，可以使用Asset Modules的4种新的模块类型来替换这些loader
    * asset/resource
      * 发出一个单独的文件并导出URL。替换file-loader
    * asset/inline
      * 导出资源的data URI。替换url-loader
    * asset/source
      * 导出资源的源代码。替换raw-loader
    * asset
      * 自动在导出data URI和发出单独文件之间进行选择。之前是使用url-loader资产大小限制来实现

* 实现图片和字体资源打包

  * 图片资源打包

    ```vue
    {
      test: /\s/i,
      // asset可以在asset/inline和asset/resource之间进行切换，文件小于8kb时使用asset/inline，否则使用asset/resource
      type: 'asset',              
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024,
        },
      },
      generator: {
        filename: 'images/[name][ext]',
      },
    },
    ```

  * 字体资源打包

    ```vue
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
        filename: 'fonts/[name][ext]',
      },
    },
    ```

* 提高开发效率 - 开发服务器

  * 热更新

    * 安装

      ```vue
      npm install webpack-dev-server -D
      ```

    * 配置

      ```vue
      devServer: {
      	//告诉服务器从哪里提供内容
      	static: {
      		directory: resolve(__dirname, 'output')
      	},
      	//打开自动更新
      	liveReload: true,
      	//打开gzip压缩
      	compress: true,
      	//指定端口号
      	port: 8888,
      },
      //指定构建的环境
      target: 'web'
      ```

  * 配置接口代理（proxy）

    * 目的

      * 解决接口跨域问题

    * 配置

      ```vue
      proxy: {
      	'/api': {
      		//访问的目标地址
      		target: 'https://api.xdclass.net',
      		//如果不希望传递/api，则需要重写路径
      		pathRewrite: {'^/api': ''},
      		//访问https时需要配置
      		secure: false, 
      	},
      	//覆盖源主机名
      	changeOrigin:true,
      }
      ```

* webpack5进阶--环境区分和代码分离

  * 开发环境区分--变量区分打包环境

    * 详解开发环境区分

      * 目的

        * 不同的环境需要不同打包策略
        * 生产环境需要压缩，但是可读性差，在开发环境一般不开启
        * 生产环境与开发环境的调试接口不一样

      * 变量区分打包环境

        * 配置

          ![image-20220415155815835](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220415155815835.png)

        * 打包命令传参

          * 生产环境打包命令设置

            ```vue
            //package.json
            "scripts": {
            	"build": "webpack --env production"
            }
            ```

          * 开发环境

            ```vue
            npm run dev
            ```

          * 生产环境

            ```vue
            npm run build
            ```

* 开发环境区分 -- 配置文件区分打包环境

  * 开发环境区分

    * 配置文件区分打包环境

      * 合并插件

        * webpack-merge

          * 将公共配置文件分别与两个环境的配置文件合并

        * 安装

          ```vue
          npm install webpack-merge -D
          ```

      * 开发环境配置文件

        ```vue
        //webpack.dev.config.js
        const {merge} = require('webpack-merge')
        const baseWebpackConfig = require('./webpack.base.conf')
        const devWebpackConfig = merge(baseWebpackConfig, {
        	//开发环境的配置
        })
        ```

      * 生产环境配置文件

        ```vue
        //webpack.prod.config.js
        const {merge} = require('webpack-merge')
        const baseWebpackConfig = require('./webpack.base.conf')
        const prodWebpackConfig = merge(baseWebpackConfig, {
        	//生产环境的配置
        })
        ```

      * 公共配置文件

        * 抽离需要区分环境的配置后的配置文件

  * 修改打包命令

    ![image-20220415180851568](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220415180851568.png)

* 开发环境区分--环境区分全局变量

  * DefinePlugin

    * 为项目注入全局变量

  * 不同环境注入不同的接口地址

    * 开发环境配置

      ```vue
      //webpack.dev.config.js
      const webpack = require('webpack')
      plugins: [
      	new webpack.DefinePlugin({
      		API_BASE_URL:JSON.stringfy('https://apidev.xdclass.com')
      	})
      ]
      ```

    * 获取接口地址

      ```vue
      //index.js
      console.log('配置的接口：', API_BASE_URL)
      ```

* 代码分离--多入口打包

  * 目的

    * 将代码分离到不同打包后的文件中即bundle文件
    * 可以按需加载或并行加载这些文件
    * 获取更小的bundle，控制资源加载优先级，降低加载时间

  * 分离方式

    * 多入口打包

    * 抽离出公共文件

      ```vue
      optimization.splitChunks:all
      ```

    * 动态导入

      * 按需加载
      * 预加载

  * 多入口打包

    * 入口entry配置多个文件

    * 配置

      ```vue
      //webpack.config.js
      entry: {
      	index: './src/index.js',
      	mini: './src/mine.js'
      },
      output: {
      	filename: '[name].bundle.js'
      },
      HtmlWebpackPlugin({
      	chunks: ['index']
      })
      HtmlWebpackPlugin({
      	chunks: ['mine']
      })
      ```

* 

* webpack有什么作用

  * 模块化打包

    ```html
    webpack会将项目的资源文件当成一个一个模块，模块之间会有依赖关系
    webpack将会对这些有依赖关系的文件进行处理，让浏览器能够识别，最后将应用程序需要的每个模块打包成一个或者多个bundle
    ```

* webpack开发环境的搭建、打包模式和效果

  * 安装node

  * 创建package.json文件

    * 命令：npm init

  * 安装webpack

    * 本地安装：(推荐)

      ```vue
      npm install --save-dev webpack
      npm install --save-dev webpack-cli
      ```

    * 全局安装：

      ```vue
      npm install --global webpack webpack-cli
      ```

  * 打包

    默认entry入口 src/index.js

    默认output出口 dist/main.js

    * 打包模式：

      webpack --mode development

      webpack --mode production

    * package.json文件下添加scripts

      ![image-20220414093600297](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414093600297.png)

  * 设置好后在命令行程序中运行npm run dev或者npm run build来进行打包

* webpack开发环境的搭建，打包模式和效果

  * 新建一个webpack.config.js
  * 配置入口entry(所需打包的文件路径)
  * 配置出口output
    * path指文件打包后的存放路径
    * path.resolve()方法将路径或路径片段的序列处理成绝对路径
    * __dirname表示当前文件所在的目录的绝对路径
    * filename是打包后文件的名称
  * 命令行程序运行npm run dev或者npm run build

* webpack常用配置之入口entry和出口output的进阶用法

  * 入口entry

    * 单入口

      * 单文件

        entry: './src/index.js'

      * 多文件

        entry: ['./src/index.js'，'./src/index1.js']

    * 多入口

      ![image-20220414101419447](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414101419447.png)

  * 出口output

    * 单出口

      ![image-20220414101538130](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414101538130.png)

    * 多出口

      ![image-20220414101604913](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414101604913.png)

* 本地服务器webpack-dev-server的搭建

  * 了解webpack-dev-server

    ​		webpack-dev-server是webpack官方提供的一个小型Express服务器。使用它可以为webpack打包生成的资源文件提供web服务。

    ​		webpack-dev-server主要提供两个功能：

    ​		（1）为静态文件提供服务

    ​		（2）自动刷新和热替换（HMR）

  * 安装webpack-dev-server

    ```vue
    npm install --save-dev webpack-dev-server
    ```

  * 配置webpack.config.js文件

    ![image-20220414104721955](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414104721955.png)

  * 配置package.json

    ![image-20220414105042369](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414105042369.png)

  * 在build文件夹新建index.html文件，在html中引入bundle.js

    ![image-20220414110830751](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414110830751.png)

  * 在命令行程序运行npm run start

* webpack加载css所需loader及其使用方式

  * 了解loader

    * loader让webpack能够去处理那些非JavaScript文件（webpack自身只理解Javascript）。loader可以将所有类型的文件转换为webpack能够处理的有效模块，然后就可以利用webpack的打包能力，对他们进行处理。

    * 安装loader

      * 安装style-loader和css-loader

        下载：npm install style-loader css-loader --save-dev

        ![image-20220414112923452](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414112923452.png)

    * 配置loader

      * 在webpack.config.js文件里配置modules中的rules

        ![image-20220414112950906](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414112950906.png)

        在webpack的配置中loader有两个目标：

        ​	1、test属性，用于标识出应该被对应的loader进行转换的某个或某些文件。

        ​	2、use属性，表示进行转换时，应该使用哪个loader

    * 创建css文件并运行命令

      ![image-20220414113024626](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414113024626.png)

      * 创建index.css文件并import进index.js文件中

        ![image-20220414113103656](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220414113103656.png)

* webpack编译Less和Sass的方式

  * Less

    * 处理效果

    * 安装loader

      * 安装less-loader和less

        下载：npm install less-loader less --save-dev

    * 

  * Sass

* 

