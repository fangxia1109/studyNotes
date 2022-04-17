* vue全家桶项目所用到的技术栈

  * 项目构建工具vue-cli
    * vue-cli是一个脚手架工具，为我们搭建了开发所需要的环境和生成目录架构
  * 路由vue-router
    * 创建单页应用，我们的单页应用只做路由切换，组件拼凑成的页面映射成路由
    * 路由是我们单页应用的核心插件
  * 状态管理vuex
    * 状态管理库，可理解为全局数据集中地
    * 推荐小项目尽量别用vuex，会显得有些繁琐，bus总线机制完全可以处理了
  * http请求工具axios（vue-resource官方已停止维护）
    * 一个经过封装的ajax，可以根据自己的项目情况再进行封装
    * axios是经过了Es6的promise封装的

* 前后端联调必备技术之Mock

  * 什么是Mock数据？
    * 处于开发环境模拟接口返回的数据（用于开发状态后端还没给接口）
    * 不会影响生产环境，只是方便我们还没与后端交互时不阻塞我们开发流程
  * Mock数据的好处
    * 团队可以并行工作（后端进度不至于影响前端开发进度）
    * 可以用来演示开发成果，实时反馈开发进度
    * 模拟测试并简单了解接口编写为全栈打基础

* 搭建vue单页面应用工程架构

  * 搭建前提条件

    1. ##### node环境

       - ##### node是傻瓜式安装的，直接去官网下载安装不断下一步

       - ##### 命令行输入node -v查询版本号，有版本号即安装成功

       - ##### node自带npm包管理工具（安装好node也可以输入npm -v查看版本号）

       - ##### npm太慢，下载国内淘宝镜像cnpm(npm install -g cnpm --registry=[https://registry.npm.taobao.org](https://registry.npm.taobao.org/))

    2. ##### 安装webpack

       - ##### 运行npm install webpack webpack-cli -D //局部安装

       - **运行npm install webpack webpack-cli –g # 全局安装**

    3. ##### 安装vue-cli 2.x

       - ##### npm install vue-cli -g

       - ##### 创建项目：vue init webpack 项目名(不要取中文名字)

    4. ##### 安装vue-cli 3.x

       - **npm install @vue/cli -g**
       - **创建项目：vue create 项目名（不要取中文名字）**

  * **不添加指定版本号就是下载最新稳定版本**

* **vue-cli2.x和3.x版本项目架构的区别**

  * **vuecli3.x:**

    **去掉了2.x的build和config等目录，大部分配置都集成到vue.condig.js这里了**

    **vue.config.js里大概包括了配置常用的输出路径名、根目录、预处理、devServer配置、pwa、dll、第三方插件等**

    **参考路径https://www.cnblogs.com/zjhr/p/9472648.html**

    **webpack的配置在这个属性里修改configureWebpack**

* 