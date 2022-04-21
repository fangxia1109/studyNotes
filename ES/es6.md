* 使用babel工具搭建ES6项目环境

  * 为什么要使用babel工具

    * 采用ECMAScript 2015+语法编写的代码转换为向后兼容的JavaScript语法，以便能够运行在当前和旧版本的浏览器或其他环境中

  * node安装

  * 初始化工程项目

    ```vue
    //使用默认配置初始化项目
    npm init -y
    ```

  * 安装对应的依赖包

    ```vue
    //本地安装babel-cli及对应的转化规则
    npm install --save-dev babel-cli babel-preset-es2015
    
    //阿里巴巴定制的镜像源
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

  * 创建项目目录

    * src目录用于存放编写的es6代码
    * dist目录用于存放由 es6转化后的代码

  * 配置babel

    * 新建.babelrc文件

      ```vue
      //配置用于转化当前代码的规则集
      {
      	"presets": ["es2015"]
      }
      ```

    * babel的基本用法

      ```vue
      // -o 参数指定输出文件
      node_modules/.bin/babel src/index.js -o dist/index.js
      
      // -d 参数指定输出目录
      node_modules/.bin/babel src -d dist
      ```

    * 配置package.json文件实时编译

      ```vue
      //配置启动脚本的命令
      "scripts": {
      	//监听index.js文件，一发生变化就执行babel转译的命令
      	"dev": "babel src -w -d dist"
      }
      ```

* let、const

  * 作用域：全局作用域、局部作用域、块级作用域
  * let 
    * 用法：声明一个变量
    * 特点：
      * 只在声明的代码块内有效
      * 在同一作用域内不允许重复声明
      * 没有变量提升
      * 暂时性死区：在声明变量前，不能使用该变量
  * const
    * 用法：声明一个只读的变量（可理解为常量）
    * 特点：
      * 只在声明的代码块内有效
      * 在同一作用域内不允许重复声明
      * 没有变量提升
      * 暂时性死区：在声明变量前，不能使用该变量
    * 注意事项：
      * 变量声明的同时必须立即赋值
      * 如声明的是简单类型的数据，变量的值不可改变，若是复杂类型的数据例如对象，对象里面的值可以改变

* js的第七种类型数据Symbol

  * 数据类型

    * 原始类型数据

      ```vue
      Number(数字)、String(字符串)、Boolean(布尔值)、Null(空对象指针)、Undefined(声明的变量未被初始化时)、Symbol(独一无二的值)
      ```

    * 复杂类型数据

      * Object(对象)

  * Symbol引入的背景

    * 对象的属性名容易产生命名冲突，为保证键名的唯一性，故es6引入Symbol这种新的原始类型数据，确保创建的每个变量都是独一无二的

  * 特点

    * Symbol类型的数据是类似字符串的数据类型

      由于Symbol函数返回的值是原始类型的数据，不是对象，故Symbol函数前不能使用new命令，否则会报错

    * 创建独一无二的值

  * 用法

    * 定义对象的唯一属性名

      ```vue
      // 在对象里用Symbol作为属性名的三种写法
      let xd = Symbol()
      
      //第一种方式：借助数组读取xd变量，此时不能用点运算符，点运算符默认后面的参数是字符串
      let a = {}
      a[xd] = '小滴课堂'
      
      //第二种方式：构造时声明
      let a = {
      	[xd]: '小滴课堂1'
      }
      
      //第三种方式：Object.defineProperty
      let a = {}
      let xd5 = Symbol()
      Object.defineProperty(a, xd5, {
      value: '小滴课堂'
      })
      ```

    * 定义常量

      ```vue
      //定义字符串常量
      const xd = Symbol("小滴课堂1")
      ```

* 深入原理讲解解构赋值及其常见用法

  * 介绍

    解构赋值可以理解为赋值操作的语法糖，它是针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。代码书写上言简意赅，语义明确，也方便了对象数组的读取操作

  * 实质

    * ES6种只要某种数据可以循环迭代，都可以进行解构赋值

  * 使用场景

    * 数组结构
    * 对象结构
    * 读取接口返回的数据

* ES6提供的新的字符串方法以及模板字符串

  * 扩展的API

    | 方法                     | 描述                                                         |
    | ------------------------ | ------------------------------------------------------------ |
    | includes(string, index)  | 判断字符串中是否包含指定字符串，返回值是布尔值，index是从哪一位开始 |
    | startsWith(string,index) | 判断字符串的开头是否包含指定字符串，返回值是布尔值           |
    | endsWith(string,index)   | 判断字符串的尾部是否包含指定字符串，返回值是布尔值           |
    | repeat(n)                | repeat()方法返回一个新字符串，表示将原字符串重复n次          |
    |                          |                                                              |
    | 字符串补全               | 第一个参数是补全后的字符串长度，第二个参数是用于补全的字符串 |
    | padStart(length,str)     | 用于头部补全                                                 |
    | padEnd(length, str)      | 用于尾部补全                                                 |

  * 模板字符串：`${模板字符串}`

  * 使用模板字符串的注意事项

    * 使用模板字符串表示多行字符串时，所有的空格和缩进都会被保留在输出之中
    * 模板字符串中引入变量，要用${变量名}这样的形式引入才可以
    * 模板字符串中的${...}大括号内部可以放入任意的javaScript表达式，可以进行运算，可以引用对象属性，可以调用函数、可以甚至还能嵌套，甚至还能调用自己本身

* ES6扩展运算符的使用和数组的扩展方法

  * 扩展运算符的使用

    * 深拷贝一维数组

      ![image-20220420174630555](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420174630555.png)

    * 分割数组

      ![image-20220420174945565](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420174945565.png)

    * 将数组转化成参数传递给函数

      ![image-20220420175153063](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420175153063.png)

  * 新增的常用方法

    * fill（会改变原数组）

      ![image-20220420175725790](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420175725790.png)![image-20220420175914772](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420175914772.png)

    * find/findIndex

      ![image-20220420180310536](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420180310536.png)

      ![](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420180417297.png)

    * flat

      创建一个新数组，其中所有子数组元素都以递归方式连接到该数组中，直到达到指定的深度为止

      ![image-20220420182637478](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420182637478.png)![image-20220420182737206](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420182737206.png)

    * filter（改变长度过滤，返回数组）

      ![image-20220420183013395](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420183013395.png)

    * map（会改变对象内容）

      ![image-20220420183445882](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420183445882.png)

* ES6对象的新特性及新增方法

  * 扩展运算符....的使用

    * 深拷贝简单对象
    * 给对象设置默认值
    * 合并对象

  * 属性初始化、方法的简写

    ```vue
    const name = '张三';
    const age = 18;
    
    let obj = {
      name,
      age,
      sayHello() {
        console.log('hello');
      },
    };
    obj.sayHello();
    console.log(obj);
    ```

  * 新增方法

    * Object.is(a,b)

      判断两个值是都相同的值，在判断时，不会做类型转换

      ```vue
      两个值都是 undefined
      两个值都是 null
      两个值都是 true 或者都是 false
      两个值是由相同个数的字符按照相同的顺序组成的字符串
      两个值指向同一个对象
      两个值都是数字并且
      都是正零 +0
      都是负零 -0
      都是 NaN
      都是除零和 NaN 外的其它同一个数字
      ```

    * Object.assign(target, ...sources)

      target指的是目标对象，sources指的是源对象，该方法的返回值是target，即目标对象

      用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。他将返回目标对象

      ![image-20220420203012264](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420203012264.png)

      输出结果，源对象中与目标对象中的同名属性将会取值为源对象中的值，多个源对象的情况下，会以最后的为准

      ![image-20220420203049102](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220420203049102.png)

      如果只是将多个对象进行合并，可以将目标对象设置为空对象即

      ```vue
      Object.assign({}, arr1,arr2...)
      ```

      注意事项：

      1. Object.assign方法只会拷贝源对象自身的并且可枚举的属性到目标对象，继承属性和不可枚举属性是不能拷贝的。
      2. 针对深拷贝，需要使用其他办法，因为Object.assign()拷贝的是属性值，假如源对象的属性值是一个对象的引用，那么他也只指向那个引用。
      3. 目标对象自身也会改变
      4. 异常会打断后续拷贝任务

    * Object.keys()

      ​		返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致

      ​		Object.keys()在内部会根据属性名key的类型进行不同的排序逻辑。分三种情况：

      1. 如果属性名的类型是Number，那么Object.keys()返回值是按照key从小到大排序。
      2. 如果属性名的类型是String，那么Object.keys()返回值是按照属性被创建的时间升序排序。
      3. 如果属性名的类型是Symbol，那么Object.keys()返回值是按照属性被创建的时间升序排序。
      4. 类型顺序：number -> string ->symbol

      该顺序规则还适用于其他API

      ```vue
      Object.entries、
      Object.values、
      for...in循环、
      Object.getOwnPropertyNames、
      Reflect.ownKeys
      ```

    * Object.values()

      返回一个包含对象自身的所有可枚举属性值的数组。属性的顺序与通过手动循环对象的属性值所给出的Object.keys()顺序相同

    * Object.entries()

      返回一个给定对象自身可枚举属性的键值对数组，其排列与使用Object.keys()循环遍历该对象时返回的顺序一致

* Map与WeakMap对象的特点

  * Map对象

    * 用于保存键值对，任何值（对象或者原始值）都可以作为一个键名或一个值。

    * 使用介绍

      ```vue
      //通过构造函数创建一个Map
      let m = new Map()
      m.set([1,2], '张三')
      ```

    * 内置API

      | 属性/方法      | 作用                                         | 例子             |
      | -------------- | -------------------------------------------- | ---------------- |
      | size           | 返回键值对的数量                             | m.size           |
      | clear()        | 清楚所有键值对                               | m.clear()        |
      | has(key)       | 判断键值对中是否有指定的键名，返回值是布尔值 | m.has(key)       |
      | get(key)       | 获取指定键名的键值，如不存在则返回undefined  | m.get(key)       |
      | set(key,value) | 添加键值对，如键名已存在，则更新键值对       | m.set(key,value) |
      | delete(key)    | 删除指定键名的键值对                         | m.delete(key)    |

    * 遍历器生成函数

      * keys()
      * values()
      * entries()

  * WeakMap

    * 只接受对象作为键名
    * 无法遍历

* Set与WeakSet结构的特点

  * Set

    * 基本使用

      ```vue
      let set = new Set()
      let set2 = new Set([1,2,3])
      
      set.add(1)
      ```

    * 特点

      * 成员值唯一

    * 属性及方法

      | 属性/方法     | 作用                                       | 例子          |
      | ------------- | ------------------------------------------ | ------------- |
      | size          | 返回成员个数                               | s.size        |
      | clear()       | 清楚所有成员                               | s.clear()     |
      | has(value)    | 判断键值对中是否有指定的值，返回值是布尔值 | s.has(key)    |
      | delete(value) | 删除指定值                                 | s.delete(key) |

    * 用途

      数组去重 Array.from(new Set())

    * WeakSet

      * 数组成员必须是对象
      * WeakSet结构也提供了add()方法，delete()方法，has()方法给开发者使用，作用与用法跟Set结构完全一致
      * WeakSet结构不可遍历。因为它的成员都是对象的弱引用，随时被回收机制回收，成员消失。所以WeakSet结构不会有keys()，values()，entries()，forEach()等方法和size属性。

* Map、Set与Array以及Object间的区别

  * 增删改查

    ```vue
    // 增删改查
    let a = { a1: '小滴课堂' }
    let list = []
    let obj = {}
    let set = new Set()
    let map = new Map()
    
    // 增加
    list.push(a)
    obj['a1'] = '小滴课堂'
    set.add(a)
    map.set('xd', '小滴课堂')
    console.log(list, obj, set, map)
    
    //查询
    let searchList = list.includes(a)
    let searchObj = 'xd' in obj
    let searchSet = set.has(a)
    let searchMap = map.has('xd')
    console.log(searchList, searchObj, searchSet, searchMap)
    
    // 修改
    list.forEach(function(i) {
        i.xd = i.xd ? 'xdclass.net' : ''
    })
    
    obj.xd = 'xdclass.net'
    set.forEach(function(i) {
        i.xd = i.xd ? 'xdclass.net' : ''
    })
    
    map.set('xd', 'xdclass.net')
    console.log(list, obj, set, map)
    
    // 删除
    let index = list.findIndex(function(i) {
        retrn i.xd === '小滴课堂'
    })
    list.splice(index, 1)
    delete obj.xd
    set.delete(a)
    map.delete('xd')
    console.log(list, obj, set, map)
    ```

  * 类型转换

    ```vue
    let obj = {
        xd: '小滴课堂',
        website: 'xdclass.net'
    }
    
    let map = new Map(Object.entries(obj)) //对象转map
    console.log(map)
    
    let obj1 = Object.fromEntries(map) //map转对象
    console.log(obj1)
    
    let list = [1, 2, 3]
    let set = new Set(list) //数组转set
    console.log(set)
    
    let list1 = Array.from(set) //set转数组
    console.log(list1)
    ```

* ES6高阶知识点之代理Proxy和反射Reflect

  * Proxy

    * 是ES6为了操作对象引入的API。Proxy不直接作用在对象上，而是作为一种媒介，如果需要操作对象的话，需要经过这个媒介的同意。

    * 使用方式

      ```vue
      /* @params
      ** target: 用Proxy包装的目标对象
      ** handler: 一个对象，对代理对象进行拦截操作的函数，如set、get
      */
      let p = new Proxy(target, handler)
      ```

    * 使用场景

      ```vue
      let person = {
          name: 'fangxia',
          age: 23,
          phone: '17764118218',
          idCard: '340827111111111',
          sex: '女'
      }
      
      handler = {
          // 读取代理
          get: function(target, key) {
              switch (key) {
                  case 'name':
                      return target[key].replace('fangxia', 'fx')
                  case 'idCard':
                      return target[key].substring(0, 3) + '*******' + target[key].substring(9)
                  default:
                      return target[key]
              }
          },
          //设置代理
          set: function(target, key, value) {
              if (key === 'phone') {
                  return target[key] = value
              } else if (key === 'idCard') {
                  return target[key]
              }
          }
      }
      
      let personProxy = new Proxy(person, handler)
      
      console.log(personProxy.idCard)
      personProxy.phone = '17754118218' //修改成功
      personProxy.idCard = '11111111111111' //没有修改成功
      personProxy.age = '24' //没有修改成功
      console.log(personProxy.phone)
      console.log(personProxy.idCard)
      console.log(personProxy.age)
      ```

  * Reflect

    * 与Proxy相同，ES6引入也是用来操作对象的，他将对象的一些明显属于语言内部的方法移植到Reflect对象上，他对某些方法的返回结果进行了修改，使其更合理，更具语义化，并且使用函数的方式实现了Object的命令式操作

    * 常见用法

      ```vue
      let person = {
          name: 'fangxia',
          age: 23,
          phone: '17764118218',
          idCard: '340827111111111',
          sex: '女'
      }
      
      let res = 'name' in person
      console.log(res)
      let res1 = Reflect.has(person, 'name')
      console.log(res1)
      
      //Reflect.set(target, propertyKey, value): 设置对象target的属性propertyKey 的值为 value，等同于给对象的属性赋值。
      Reflect.set(person, 'address', 'https://baidu.com')
      console.log(person.address)
      
      // Reflect.get(target, propertyKey): 读取对象 target 的属性 propertyKey，等同于读取对象的属性值。
      Reflect.get(person, 'name')
      console.log(Reflect.get(person, 'name'))
      
      function test(a, b) {
          console.log(a + b)
      }
      // 等同于test(4,5)进行函数调用
      Reflect.apply(test, null, [4, 5])
      
      //删除对象中的属性
      Reflect.deleteProperty(person, 'name')
      console.log(person)
      ```

    Obejct.getOwnPropertyDescriptor(obj, 'i')可以得到一个对象obj的某个属性i的属性描述符,

    Obejct.getOwnPropertyDescriptors(obj)可以得到该对象里面的所有属性的属性描述符

    Object.defineProperty(对象，属性名，描述符)给对象添加属性或者修改其属性

    Object.defineProperties(对象，多个属性的描述符)给对象添加多个属性或者修改多个属性时

    属性描述符中，如果配置了get和set的任何一个，则该属性，不再是一个普通属性，而变成了存取器属性。get和set配置均为函数，如果一个属性时存取器属性，则读取该属性时，会运行get方法，将get方法得到的返回值作为属性值，如果给该属性赋值，则会运行set方法。存取器属性最大的意义，在于可以控制属性的读取和赋值

* 使用Proxy实现简单的双向数据绑定

  ```vue
  // 使用Proxy实现简单的双线数据绑定
  // 获取元素
  let input = document.getElementById('input')
  let span = document.getElementById('span')
  
  let obj = {}
  
  let handler = {
      get: function(target, key) {
          return target[key]
      },
      set: function(target, key, value) {
          console.log(key, 'key')
          if (key === 'text' && value) {
              span.innerHTML = value
              input.value = input.value === value ? input.value : value
              return target[key] = value
          }
      }
  }
  let numberProxy = new Proxy(obj, handler)
  numberProxy.text = '123'
  
  input.addEventListener('keyup', function(e) {
      numberProxy.text = e.target.value
      console.log(numberProxy.text, 'numberProxy.text')
  })
  ```

* 函数的扩展、类的概念以及模块化

  * 函数参数的扩展

    * 函数参数可设置默认值

      ```vue
      function xd(a, b = 3) {
          console.log(a + b)
      }
      xd(1)
      ```

    * reset参数

      * reset参数是一个数组，可以使用数组特有的方法

      * reset参数，必须是最后一个参数，不然报错

        ![image-20220421152028971](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220421152028971.png)

      * 函数的length属性，不包括reset参数

    * 扩展运算符

      ```vue
      function xd1(a, b, c) {
          console.log(a, b, c)
      }
      xd1(...[1, 2, 3])
      ```

* 箭头函数

  * 特点与普通函数相比，最重要的是this指向不同
    * 外形不同，形式 （）=> {}
    * 箭头函数不能用于构造函数，不能使用new
    * 箭头函数中this的指向不同
      * 在普通函数中，this总是指向调用它的对象，如果用作构造函数，this指向创建的对象实例
      * 箭头函数本身不创建this，它是在声明时可以捕获其所在上下文的this供自己使用。
        * 箭头函数若是在全局作用域声明，那么它捕获全局作用域中的this，this指向window对象
      * 箭头函数没有arguments
    * 箭头函数不具有prototype原型对象
    * 箭头函数不具有super
    * 箭头函数不具有new.target
  * 注意事项
    * 什么情况下不能使用箭头函数
      * 定义对象的方法时不能使用
      * 定义DOM事件的回调函数不能使用
      * 定义构造函数不能使用
    * 箭头函数没有argument

* ES6中类的概念

  * ES6之前js中只有对象，没有类的概念。类是基于原型的面向对象语言。原型对象的特点就是将自身的属性共享给新对象

  * 定义类

    ```vue
    class xd {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        sayHello() {
            console.log(`我是${this.name}，今年${this.age}岁`)
        }
    }
    
    let p1 = new xd('张三', '15')
    console.log(p1)
    p1.sayHello()
    ```

  * 类的继承

    ```vue
    class xd {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        sayHello() {
            console.log(`我是${this.name}，今年${this.age}岁`)
        }
    }
    
    class xd1 extends xd {}
    }
    
    let p1 = new xd('张三', '15')
    let p2 = new xd1('李四', '18')
    console.log(p1)
    console.log(p2)
    p1.sayHello()
    p2.hello()
    ```

  * 子类复写父类的属性

    ```vue
    class xd {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        sayHello() {
            console.log(`我是${this.name}，今年${this.age}岁`)
        }
    }
    
    class xd1 extends xd { //extends
        constructor(name, age, phone) {
            super(name, age) //super指向当前对象的原型对象
            this.phone = phone
        }
        hello() {
            console.log(`我是${this.name}，今年${this.age}岁，我的手机号码${this.phone}`)
        }
    }
    
    let p1 = new xd('张三', '15')
    let p2 = new xd1('李四', '18', '1111111')
    console.log(p1)
    console.log(p2)
    p1.sayHello()
    p2.hello()
    ```

  * 静态方法（不能被实例对象调用）均为class本身的属性

    ```vue
    class Parent {
      constructor(name = '大钊') {
        this.name = name;
      }
      static say() { //静态方法
        console.log(111);
      }
    }
    Parent.say();
    
    class Parent {
      constructor(name = '大钊') {
        this.name = name;
      }
      static age = '18'; //静态属性
    }
    
    const p = new Parent();
    console.log(p.age);
    
    
    ```

* 模块化开发（import和export）

  * export用于对外输出本模块变量的接口
  * import用于在一个模块中加载另一个含有export接口的模块

  使用export定义了模块的对外接口以后其他的js文件就可以通过import加载这个模块

  在一个文件或模块中，export、import可以有多个，export default仅有一个

  使用export default，在用import引入时不用加{}

* 什么是异步编程

  * 同步

    当一个"调用"发出时，在没有得到结果之前，这个"调用"就会阻塞后面代码的执行，得到结果的时候才会返回。换句话说，"调用者"要主动等待代码的执行结果，得到返回结果后，程序才会继续运行。

  * 异步

    "调用"发出的时候，就直接返回了，对应的结果会通过状态、通知来告诉"调用者"。异步调用发出后，不会阻塞后面的代码。

  * js为何要引入异步这个概念

    * js是单线程的
    * 同步代码会阻塞后面的代码
    * 异步不会阻塞程序的运行

  * js中异步的实现

    * 回调函数

      ```vue
      // 请求后端接口数据时，使用promise封装ajax的axios请求库
      axios.get('a.json').then((res) => {
        if (res && res.data.code === 0) {
          console.log(res.data.data.data);
        }
      });
      ```

    * setInterval和setTimeout

    * Promise

    * Generator

    * async

* 解决回调地狱提出的新方案 -Promise

  * 回调地狱（为了实现接口请求按照一定顺序执行出现）

    * 可读性差，后期不好维护
    * 代码耦合
    * 出错时，无法排除

    ```vue
    例：
    function request() {
      axios.get('a.json').then((res) => {
        if (res && res.data.code === 0) {
          console.log(res.data.data.data);
          axios.get('b.json').then((res) => {
            if (res && res.data.code === 0) {
              console.log(res.data.data.data);
              axios.get('c.json').then((res) => {
                console.log(res.data.data.data);
              });
            }
          });
        }
      });
    }
    
    request();
    这样的代码就是回调地狱
    ```

  * Promise

    * 简单的说就是一个容器，里面保存者=着某个未来才会结束的事件（通常是一个异步操作）的结果
    * 从语法上说，Promise是一个对象，从它里面可以获取异步操作的最终状态
    * Promise是一个构造函数，提供统一的API，Promise里不仅可以存放着异步的代码，也可以放同步的代码

    ```vue
    // 准备阶段
    new Promise((resolve, reject) => {})
    
    // 成功状态
    new Promise((resolve, reject) => {
        resolve('成功')
    }).then((res) => {
        console.log(res)
    })
    
    // 失败状态
    new Promise((resolve, reject) => {
        reject('失败')
    }).catch((err) => {
        console.log(err)
    })
    ```

    * 特点

      * Promise对象的状态不受外界影响

        * pending初始状态

        * resolve成功状态

        * rejected失败状态

          Promise有以上三种状态，只有异步操作的结果可以决定当前是哪一种状态，其他任何擦欧总都无法改变这个状态

      * Promise的状态一旦改变，就不会在变，任何时候都可以得到这个结果，状态不可逆，只能由pending变化resolve或者由pending变成rejected

  * Promise解决回调地狱

    ```vue
    function requestA() {
        return new Promise((resolve, reject) => {
    		//调用接口
            setTimeout(() => {
                resolve('A成功')
            }, 1000);
        })
    }
    
    function requestB() {
        return new Promise((resolve, reject) => {
    		//调用接口
            setTimeout(() => {
                resolve('B成功')
            }, 1000);
        })
    }
    
    function requestC() {
        return new Promise((resolve, reject) => {
    		//调用接口
            setTimeout(() => {
                resolve('C成功')
            }, 1000);
        })
    }
    
    function request() {
        requestA().then((res) => {
            console.log(res);
            return requestB()
        }).then((res) => {
            console.log(res);
            return requestC()
        }).then((res) => {
            console.log(res)
        })
    }
    
    request()
    ```

  * Promise.all

    * Promise.all实际上是一个函数，他接受一个Promise数组并返回一个Promise。然后当所有的promise都完成时会得到结果数组或者当其中一个被拒绝时会抛出错误
    * 返回值将会按照参数内的promise顺序排列，而不是由调用promise的完成顺序决定

    ```vue
    function requestAll() {
        Promise.all([requestA(), requestB(), requestC()]).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    ```

  * Promise.race

    * Promse.race就是赛跑的意思，传入的`promise` 数组里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

      ```vue
      function requestRace() {
          Promise.race([requestA(), requestB(), requestC()]).then((res) => {
              console.log(res)
          }).catch((err) => {
              console.log(err)
          })
      }
      ```

* 优雅的异步编程 --- async

  * 什么是async

    async是异步的简写，Generator（生成器）的语法糖，用于声明一个函数是异步函数

    ```vue
    async function xd() {
        await console.log('小滴课堂')
    }
    xd()
    ```

  * 优点

    * 内置执行器
    * 更好的语义
    * 更广的适用性

  * async await改造promise.then异步调用

    ```vue
    function requestA() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('A成功')
            }, 1000);
        })
    }
    
    function requestB() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('B成功')
            }, 1000);
        })
    }
    
    function requestC() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('C成功')
            }, 1000);
        })
    }
    
    async function request() {
        try {
            const a = await requestA()
            const b = await requestB()
            const c = await requestC()
            console.log(a, b, c)
        } catch (err) {
            console.log(err)
        }
    }
    
    request()
    ```

* es6面试考点

  * 解构赋值

    * 对象的解构
    * 数组的解构

  * set、map方法

  * 箭头函数

  * Promise函数

    * 结合async函数，异步编程同步化

  * 作用域

  * 简单深拷贝实现方法

    * ...扩展运算符
    * Object.assign()

  * 数组操作方法

  * promise

    