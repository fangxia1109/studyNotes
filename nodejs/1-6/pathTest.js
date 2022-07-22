const { basename, dirname, extname, join ,normalize, resolve, format, parse, sep } = require('path')


// basename：返回path的最后一部分
// dirname: 返回path的目录名
// extname: 返回path的扩展名
// console.log(basename('/nodejs/1-6/index/index.js', '.js'))
// console.log(dirname('/nodejs/1-6/index/index.js'))
// console.log(extname('/nodejs/1-6/index/index.js'))


// // join 路径拼接
// //normalize 规范化路径
// // resolve 返回绝对路径
// console.log(join('//index//', '//hello.js'))
// console.log(normalize(join('//index//', '//hello.js')))
// console.log(resolve('./text.js'))


// let parsePath = parse('nodejs/node/js/index/index.js')
// console.log(parsePath)
// console.log(format(parsePath))
// console.log(sep)

// console.log(__filename)
// console.log(__dirname)



