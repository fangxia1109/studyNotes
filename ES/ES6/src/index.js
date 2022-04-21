// let xd = Symbol()
// typeof xd
// console.log(xd, typeof xd)

// let xd1 = Symbol('123')
// let xd2 = Symbol('123')
// console.log(xd1, xd2, xd1 === xd2)

// let xd3 = Symbol()
// let a = {}
//     // 第一种方式
// a[xd] = 'xd3'
// console.log(a)

// // 第二种方式
// let xd4 = Symbol('xd4')
// let b = {
//     [xd4]: '第二种方式'
// }
// console.log(b)

// // 第三种方式
// let c = {}
// let xd5 = Symbol()
// Object.defineProperty(c, xd5, {
//     value: '小滴课堂'
// })
// console.log(c)

// const e = Symbol('小滴课堂1')
// console.log(e)

// // 数组结构
// // 变量多时
// // let [aa, bb, cc] = [1, 2]
// // console.log(aa, bb, cc)

// //变量默认值
// // let [aa, bb, cc = 9] = [1, 2]
// // console.log(aa, bb, cc)

// // 分割数组
// // let [abc, ...other] = [1, 2, 3]
// // console.log(abc, other)

// // 空内容
// // let [a1, a2] = [1, 2, 3]
// // console.log(a1, a2)

// // 对象结构
// //使用
// // let { aaa, bbb } = { aaa: 1, bbb: 2 }
// // console.log(aaa, bbb)
// // 重命名
// // let { aaa: aa, bbb: bb } = { aaa: 1, bbb: 2 }
// // console.log(aa, bb)

// // 读取接口返回的数据
// function xd123() {
//     return {
//         name: '123',
//         url: [{
//             url1: 'xdclass.net'
//         }]
//     }
// }

// let {
//     name,
//     url: [{ url1 }]
// } = xd123()
// console.log(name, url1)

// let str = '小滴课堂'
// let result = str.includes('小', 3)
// console.log(result)

// let str1 = '小滴课堂1'
// let result1 = str1.startsWith('滴', 3)
// console.log(result1)

// let str2 = '小滴课堂2'
// let result2 = str2.endsWith('堂', 4)
// console.log(result2)

// let str3 = str2.repeat(3)
// console.log(str3)

// let str4 = str3.padStart(20, '1111')
// console.log(str4)

// let str5 = str3.padEnd(20, '222')
// console.log(str5)

// const list = [1, 2, 4, 5, 5]
//     // 深拷贝一维数组
// const list1 = [...list]
//     // console.log(list, list1)
//     // 分割数组
// const [, ...list2] = list
// console.log(list, list2)


// let list = [1, 2]

// function xd(a, b) {
//     console.log(a + b)
// }

// xd(...list)
// console.log(...list)

// let list = [1, 2, 3, 4, 5]
//     // 深拷贝之后不会改变原数组
//     //后面的两个数字是从尾数1到4中的数字改为6
// let list1 = [...list].fill(6, 1, 4)
// console.log(list, list1)

// let list = [
//     { hobby: '吃饭', id: 1 },
//     { hobby: '睡觉', id: 1 },
//     { hobby: '敲代码', id: 1 },
//     { hobby: '吃饭', id: 2 },
// ]

// let result = list.findIndex(item => item.hobby === '吃饭')
// console.log(result) //返回找到的第一个对象的数组下标

// let list = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10, [11, 12]]]],
//     [2, 3]
// ]
// let list1 = [].concat(...list) //对于复杂的只是浅拷贝
// let n = 0
// function sum(array) {
//     array.forEach((item) => {
//         if (Array.isArray(item)) {
//             n++
//             sum(item)
//         }
//     })
//     return n
// }
// sum(list)
// let list2 = list.flat(n) //深拷贝
// console.log(list, list1, list2)

// let list = [
//     { hobby: '吃饭', id: 1 },
//     { hobby: '睡觉', id: 1 },
//     { hobby: '敲代码', id: 1 },
//     { hobby: '吃饭', id: 2 },
// ]

// let result = list.filter(item => item.hobby === '吃饭')
// console.log(result) //返回找到对应数组的所有值，返回一个新数组


// let list = [
//     { hobby: '吃饭', id: 1 },
//     { hobby: '睡觉', id: 1 },
//     { hobby: '敲代码', id: 1 },
//     { hobby: '吃饭', id: 2 },
// ]
// let list1 = list.map(item => {
//     let obj = {}
//     Object.assign(obj, item) //浅拷贝
//     obj.state = item.id === 1 ? '喜欢' : '沉迷'
//     return obj
// })
// console.log(list, list1)

// console.log(Object.is(NaN, NaN), Object.is(+0, +0))
// let b = { aa: '1', cc: '3', dd: '4' }
// let a = { aa: 1, bb: 2, cc: 3, list: [b, b] }
// b.aa = '66'
// let c = Object.assign(a, b, { aa: 5, bb1: 2, cc1: 3 })
// console.log(a, 'a')
// console.log(b, 'b')
// console.log(c, 'c')

// let obj = {
//     '2a': 1,
//     '1b': '2',
//     '11': 100,
//     d: 2,
//     e: '111',
//     '10': '3',
//     '1c': 23,
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// let a = new Map()
// a.set(null, '123')
// console.log(a.get(null))

// let obj = { aa: 1 }
// let list = new Set([obj])
// console.log(list.has(obj))

// let list = ['aa', 'bb', 'cc', 'aa']
// let arr = Array.from(new Set(list))
// console.log(arr)

// 增删改查
// let a = { a1: '小滴课堂' }
// let list = []
// let obj = {}
// let set = new Set()
// let map = new Map()

// // 增加
// list.push(a)
// obj['a1'] = '小滴课堂'
// set.add(a)
// map.set('xd', '小滴课堂')
// console.log(list, obj, set, map)

// //查询
// let searchList = list.includes(a)
// let searchObj = 'xd' in obj
// let searchSet = set.has(a)
// let searchMap = map.has('xd')
// console.log(searchList, searchObj, searchSet, searchMap)

// // 修改
// list.forEach(function(i) {
//     i.xd = i.xd ? 'xdclass.net' : ''
// })

// obj.xd = 'xdclass.net'
// set.forEach(function(i) {
//     i.xd = i.xd ? 'xdclass.net' : ''
// })

// map.set('xd', 'xdclass.net')
// console.log(list, obj, set, map)

// // 删除
// let index = list.findIndex(function(i) {
//     return i.xd === '小滴课堂'
// })
// list.splice(index, 1)
// delete obj.xd
// set.delete(a)
// map.delete('xd')
// console.log(list, obj, set, map)

// let obj = {
//     xd: '小滴课堂',
//     website: 'xdclass.net'
// }

// let map = new Map(Object.entries(obj)) //对象转map
// console.log(map)

// let obj1 = Object.fromEntries(map) //map转对象
// console.log(obj1)

// let list = [1, 2, 3]
// let set = new Set(list) //数组转set
// console.log(set)

// let list1 = Array.from(set) //set转数组
// console.log(list1)

// let person = {
//     name: 'fangxia',
//     age: 23,
//     phone: '17764118218',
//     idCard: '340827111111111',
//     sex: '女'
// }

// handler = {
//     // 读取代理
//     get: function(target, key) {
//         switch (key) {
//             case 'name':
//                 return target[key].replace('fangxia', 'fx')
//             case 'idCard':
//                 return target[key].substring(0, 3) + '*******' + target[key].substring(9)
//             default:
//                 return target[key]
//         }
//     },
//     //设置代理
//     set: function(target, key, value) {
//         if (key === 'phone') {
//             return target[key] = value
//         } else if (key === 'idCard') {
//             return target[key]
//         }
//     }
// }

// let personProxy = new Proxy(person, handler)

// console.log(personProxy.idCard)
// personProxy.phone = '17754118218'
// personProxy.idCard = '11111111111111'
// personProxy.age = '24'
// console.log(personProxy.phone)
// console.log(personProxy.idCard)
// console.log(personProxy.age)


// let person = {
//     name: 'fangxia',
//     age: 23,
//     phone: '17764118218',
//     idCard: '340827111111111',
//     sex: '女'
// }

// let res = 'name' in person
// console.log(res)
// let res1 = Reflect.has(person, 'name')
// console.log(res1)

// Reflect.set(person, 'address', 'https://baidu.com')
// console.log(person.address)

// Reflect.get(person, 'name')
// console.log(Reflect.get(person, 'name'))

// function test(a, b) {
//     console.log(a + b)
// }

// Reflect.apply(test, null, [4, 5])

// Reflect.deleteProperty(person, 'name')
// console.log(person)


// 使用Proxy实现简单的双线数据绑定
// 获取元素
// let input = document.getElementById('input')
// let span = document.getElementById('span')

// let obj = {}

// let handler = {
//     get: function(target, key) {
//         return target[key]
//     },
//     set: function(target, key, value) {
//         console.log(key, 'key')
//         if (key === 'text' && value) {
//             span.innerHTML = value
//             input.value = input.value === value ? input.value : value
//             return target[key] = value
//         }
//     }
// }
// let numberProxy = new Proxy(obj, handler)
// numberProxy.text = '123'

// input.addEventListener('keyup', function(e) {
//     numberProxy.text = e.target.value
//     console.log(numberProxy.text, 'numberProxy.text')
// })

// function xd(a, b = 3) {
//     console.log(a + b)
// }
// xd(1)

// let f = function(a, b, ...h) {
//     console.log(h)
// }

// f(2, 3, 4, 5)
// console.log(f.length)

// function xd1(a, b, c) {
//     console.log(a, b, c)
// }
// xd1(...[1, 2, 3])

// const xd = {
//     a: 1,
//     sum: () => {
//         console.log(this);
//     },
// };

// xd.sum();

// class xd {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     sayHello() {
//         console.log(`我是${this.name}，今年${this.age}岁`)
//     }
// }

// class xd1 extends xd { //extends
//     constructor(name, age, phone) {
//         super(name, age) //super指向当前对象的原型对象
//         this.phone = phone
//     }
//     static age1 = '19'
//     static hello() {
//         console.log(`我是${this.name}，今年${this.age}岁，我的手机号码${this.phone}`)
//     }
// }

// let p1 = new xd('张三', '15')
// let p2 = new xd1('李四', '18', '1111111')
// console.log(p1)
// console.log(p2)
// p1.sayHello()
// xd1.hello()

// 准备阶段
// new Promise((resolve, reject) => {})

// // 成功状态
// new Promise((resolve, reject) => {
//     resolve('成功')
// }).then((res) => {
//     console.log(res)
// })

// // 失败状态
// new Promise((resolve, reject) => {
//     reject('失败')
// }).catch((err) => {
//     console.log(err)
// })

// function requestA() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('A成功')
//         }, 1000);
//     })
// }

// function requestB() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('B成功')
//         }, 1000);
//     })
// }

// function requestC() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('C成功')
//         }, 1000);
//     })
// }

// function request() {
//     requestA().then((res) => {
//         console.log(res);
//         return requestB()
//     }).then((res) => {
//         console.log(res);
//         return requestC()
//     }).then((res) => {
//         console.log(res)
//     })
// }

// request()

// function requestAll() {
//     Promise.all([requestA(), requestB(), requestC()]).then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })
// }

// requestAll()

// function requestRace() {
//     Promise.race([requestA(), requestB(), requestC()]).then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })
// }

// requestRace()

// async function xd() {
//     await console.log('小滴课堂')
// }

// xd()

// async function request() {
//     try {
//         const a = await requestA()
//         const b = await requestB()
//         const c = await requestC()
//         console.log(a, b, c)
//     } catch (err) {
//         console.log(err)
//     }
// }

// request()