**Vue -->** 

**一、引包、留坑、实例化、插值表达式{{}}**

1、引包

* 下载node,然后执行命令npm install Vue

* 页面引入刚下载的包

      <script type="text/javascript" src="vue.js"></script>

 

2、留坑

* 即留一个vue模板插入的地方或者是vue代码对其生效的地方

 

3、实例化 即启动Vue

* 启动：

  ```vue
  new Vue({
     el:目的地,
     template:模板内容
  });
  ```

* 实例化传入的是一个对象options

​    options

​      目的地 el 对应上面留坑的坑位，可通过id名，类名，标签名来查找.方式和jq一样

​      内容 template

​      数据data值为函数形式也可是对象，但是都是用函数，因为用的函数最后也是return一个对象

 

4、插值表达式{{}}

  插值表达式内填入data里面的变量即可在页面取到变量值{{data里的变量}}

 

**二、熟悉及使用常用指令**

v-text 元素的innerText必须是双标签

v-html 元素的innerHTML

v-if   判断是否插入append remove

v-else-if 

v-else

v-show 判断是否隐藏 display: none

v-for 

  	数组 item,index

​      对象 value,key,index

 

**三、阐述vue单双向数据流及事件绑定**

* Vue单向数据流绑定属性值 v-bind:属性 简写  :属性

  例：``` <input v-bind:value="name" v-bind:class="name">```

  * 单向数据绑定 内存改变影响页面改变

  * v-bind就是对属性的简单赋值，当内存中值改变，还是会触发重新渲染

* vue双向数据流v-model只作用于有value属性的元素

  例：```<input v-model="name" v-bind:class="name">```

  * 双向数据绑定 页面对于input的value改变，能影响内存中name变量

  * 内存js改变name的值，会影响页面重新渲染最新值

* 事件绑定v-on:时间名=“表达式||函数名"  简写 @时间名=”表达式||函数名“

  * 事件名可以是原生也可以是自定义的

* 总结

  * v-model双向数据绑定
    * vue页面改变影响内存（js）
    * 内存（js）改变影响vue页面

  * v-bind单向数据绑定只是内存(js)改变影响vue页面

 

**四、过滤器**

* 过滤器就是可以对我们的数据进行添油加醋然后再显示
* 过滤器有全局过滤器和组件内的过滤器
  * 全局过滤器Vue.filter('过滤器名'，过滤方式fn)；
  * 组件内的过滤器filters:{'过滤器名'，过滤方式fn}
  * {{msg|过滤器名}}

* 最终都是在过滤方式fn里面return产出最终你需要的数据



**五、数据监听watch计算属性computed**

* watch监听单个，computed监听多个

* 当watch监听的是复杂数据类型的时候需要做深度监听(写法如下)

  ```js
  watch:{
      msg:{
          handler(val){
              if(val.text=='love'){
                  alert(val.text)
              }		
          },
          deep:true//开启深度监听
      }
  }
  ```

  

* computed监视对象，写在了函数内部，凡是函数内部有this.相关属性，改变都会触发当前函数

  

**六、组件化开发**

* 创建组件的两种方式

  * ```
    var Header = { 
    	template: ' 模板 ',
    	data是一个函数,
    	methods：功能,
    	components：子组件们 
    }//局部声明
    
    
    Vue.component('组件名',组件对象);//全局注册 等于注册加声明了
    ```

* 组件类型

  * 通用组件
  * 业务组件
  * 页面组件

* 组件开发三部曲：声明、注册、使用

  

**七、slot插槽和ref、$parent**

* slot插槽
  * slot就是子组件里给DOM留下的坑位
  * <子组件>DOM</子组件>
  * slot是动态的DOM
* ref获取子组件实例
  * 识别：在子组件或元素上使用属性ref="xxxxx"
  * 获取：this.$refs.xxxxx获取元素
  * $el是拿其DOM
* $parent获取父组件实例（可在子组件直接使用this.$parent即可）



**八、父子组件的通信**

* 父组件传子组件

  * 父组件使用子组件的时候通过属性传递
  * 子组件需要声明props:['属性名']来接收
  * 子组件可以在template中直接使用
  * 子组件也可以在js中this.属性名来使用

* 子组件传父组件

  * 子组件里通过$emit('自定义事件名',变量1，变量2)触发

  * 父组件@自定义事件=‘事件名’监听

  * ```vue
    子组件方法里  this.$emit('sendfather',value1,value2)触发自定义事件
    父组件里调用子组件时 <child @sendfather='mymethods'></child>
    ```



**九、非父子组件之间的通信**

* 创建一个空实例（bus中央事件总线也可以叫中间组件）

* 利用$emit $on的触发和监听事件实现非父子组件的通信

  ```Vue
  Vue.prototype.$bus=new Vue()//在vue上面挂载一个$bus作为中央处理组件
  this.$bus.$emit('自定义事件名','传递的数据')//触发自定义事件传递数据
  this.$bus.$on('自定义事件名',fn)//监听自定义事件获取数据
  ```

* 解决的方案还有vuex、provide/inject是解决同根往下派发、本地存储也可以进行非父子组件之间的通信

* this的指向可通过箭头函数进行改变，还可以进行赋值改变



**十、vue的生命周期**

* 需要频繁的创建和销毁组件

  * 比如页面中部分内容显示与隐藏，但是用的是v-if

* 组件缓存

  * 内置组件中

    ```Vue
    <keep-alive>
    ```

  * 被其包裹的组件，在v-if=false的时候，不会销毁，而是停用

  * v-if="true"不会创建，而是激活

  * 避免频繁创建组件对象的性能损耗

  * 组件的激活和停用

    * activated和deactivated

* 成对比较

  * created和beforeCreate
    * 可以操作数据   数据没有初始化
  * mounted和beforeMount
    * 可以操作Dom   还未生成Dom
  * updated和beforeUpdate
    * 可以获取最终数据   可以进行二次修改
  * destoryed和beforeDestory

* 性能调优：频繁销毁创建的组件使用内置组件

  * ```Vue
        <keep-alive></keep-alive>
    ```



**十一、路由的跳转原理（哈希模式）**

* 单页应用的路由模式有两种

  * 哈希模式（利用hashchange事件监听url的hash的改变）
  * history模式（使用此模式需要后台配合把接口都打到我们打包后的index。html上）

* 哈希模式原理

  ```Vue
  window.addEventListener('hashchange',function(e){	console.log(e)})
  ```

* 核心是锚点值的改变，我们监听到锚点值改变了就去局部改变页面数据，不做跳转。跟传统开发模式url改变后立刻发起请求，响应整个页面，渲染整个页面比路由的跳转用户体验更好。



**十二、安装和使用路由**

* 路由是以插件的形式引入到我们的vue项目中的

  * vue-router是vue的核心组件

    * 下载```npm i vue-router -S```

    * 安装插件```Vue.use(vueRouter);```

    * 创建路由对象```var router = new VueRouter();```

    * 配置路由规则```router.addRoutes([路由对象]);```

      路由对象`{path:'锚点值',component:要显示的组件}`

    * 将配置好的路由对象交给Vue

      * 在options中传递->key叫做router

    * 使用组件`<router-view></router-view>`



**十三、路由的跳转**

* 路由的跳转方式有：

  * 通过标签：

    ```vue
    <router-link to='/login'></router-link>
    ```

  * 通过js控制跳转

    ```vue
    this.$router.push({path:'/login'})
    ```

* 区别：

  * this.$router.push()跳转到指定的url，会向history插入新记录。
  * this.$router.replace()同样是跳转到指定的url，但是这个方法不会向history里面添加新的记录，点击返回，会跳转到上上一个页面，上一个记录是不存在的。
  * this.$router.go(-1)常用来做返回，读history里面的记录后退一个
  * vue-router中的对象：
    * $route路由信息对象，只读对象
    * $router路由操作对象，只写对象



**十四、路由的传参和取参**

* 查询参

  * 配置（传参）

    ```vue
    :to="{name:'login',query:{id:loginid}}"
    ```

  * 获取（取参）

    ```vue
    this.$route.query.id
    ```

* 路由参数

  * 配置（传参）

    ```vue
    :to="{name:'register',params:{id:registerid}}"
    ```

  * 配置路由的规则

    ```vue
    {name:'detail',path:'/detail/:id'}
    ```

  * 获取

    ```vue
    this.$route.params.id
    ```

* 总结：

  * :to传参的属性里 params是和name配对的  query和name或path都可以
  * 使用路由参数必须要配置路由规则里面配置号参数名，否则刷新页面参数会丢失



**十五、嵌套路由**

* js跳转路由传参和标签传参，路由相同而参数不同时页面不做刷新的问题

  ```vue
  解决方案：<router-view :key="$route.fullpath"></router-view>
  ```

* 代码思想

  * :router-view的细分

    * router-view第一层中，包含一个router-view

  * 每一个坑挖好了，要对应单独的组件

  * 路由配置

    ```vue
    routes: [	{		path: '/nav',		name: 'nav',		component: Nav,		//路由嵌套增加此属性		children:[		//在这里配置嵌套的子路由		]	}]
    ```


**十六、vue相关面试题**

* 理解MVVM和组件带出来的面试题详解

  * 对MVVM开发模式的理解

    * MVVM分为Model、View、ViewModel三者
      * Model：代表数据模型，数据和业务逻辑都是在Model层定义
      * View：代表UI视图，负责对数据的展示
      * ViewModel：负责监听Model中数据的改变并控制视图的更新，处理用户交互操作

    ​          Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。
    ​	     这种模式实现了Model和View的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作dom。

  * 对于组件通信了解多少，请描述一下是怎么完成组建的通信的
    * 父传子用props传递
    * 子传父用$emit传递
    * 非父子之间的传值 建立一个空实例进行传值，中央事件总线机制
    * 祖孙之间的传值可以利用provide inject模式
    * vuex状态管理

* 单页面应用首屏加载时间过长如何优化以及输入网址到渲染完成过程

  * 关于单页应用首屏加载速度慢，出现白屏时间过长问题怎么处理
    * 将公用的js库通过script标签在index.html进行外部引入，减少我们打包出来的js文件的大小，让浏览器并行下载资源文件，提高下载速度
    * 在配置路由的时候进行路由的懒加载，在调用到该路由时再加载该路由相对应的js文件
    * 加一个首屏loading图或骨架屏，提高用户的体验
    * 尽可能使用CSS Sprites和字体图标库
    * 图片的懒加载等
  * 从输入网址到王爷渲染完成经历了什么
    1. 输入网址按回车键或点击跳转
    2. 发送到DNS服务器进行DNS解析，获取到我们对应web服务器对应的ip地址
    3. 与web服务器建立TCP链接（三次握手，四次挥手）
    4. 浏览器向web服务器发送http请求
    5. web服务器进行响应请求并返回指定的url数据（当然这里也可能是错误信息或者重定向到新的url地址等）
    6. 浏览器下载web服务器返回的数据及解析html源文件
    7. 根据文件生成DOM树和样式树合成我们的渲染树，解析js，最后渲染我们的页面然后显示出来

* 修改数据视图不更新情况该怎么处理和如何监听数据

  * 关于修改了数据，视图不更新的理解和处理方式

    * vue中给data中的对象属性添加一个新的属性时会发生什么

      ​        经过打印发现数据是已经改变了，但是由于在vue实例创建时，新添加的属性并未声明，因此就没有被vue转换为响应式的属性，自然就不会触发视图的更新，这时就需要使用vue的全局api：$set()

      $set()使用方法：$set(需要修改的对象，”对象的属性“，值)

    * 在vue里面如何做数据的监听

      1. watch里面监听

         * 第一种写法

           ```vue
           watch: {
           	obj(newVal, oldVal) {
           		console.log(newVal, oldVal)
           	}
           }
           ```

         * 第二种写法可设置deep为true，对数据进行深层遍历监听, 使用immediate进行立即监听

           ```vue
           watch: {
           	obj: {
           		handler(newVal, oldVal) {
           			console.log(newVal, oldVal)
           		},
           		//深度监听
           		deep: true,
           		//立即监听
           		immediate: true,
           	}
           }
           ```

      2. computed里面监听

         * computed里面的依赖改变时，所计算的属性或作出实时的改变

  