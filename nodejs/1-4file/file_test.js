const fs = require('fs');

// 读取
// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//   if(err) throw err;
//   console.log(data)
// })

// 写入 注意：覆盖
// fs.writeFile('./hello.txt', '写入测试', 'utf-8', err => {
//   if(err) throw err
//   console.log('写入成功')
// })


// 追加
// const buf = Buffer.from('hello world！')
// fs.appendFile('./hello.txt', buf, err => {
//   if(err) throw err
//   console.log('追加成功')
// })

// // 获取文件信息
// fs.stat('./hello.txt', (err, stats) => {
//   if (err){
//     console.log('文件不存在')
//     return false
//   }
//   console.log(stats)
//   console.log(stats.isFile())
//   console.log(stats.isDirectory())
// })

// fs.stat('../1-4file', (err, stats) => {
//   if(err) {
//     console.log('文件不存在')
//     return false
//   }
//   console.log(stats)
//   console.log(stats.isFile())
//   console.log(stats.isDirectory())
// })

// // 重命名文件
// fs.rename('./hello.txt', './filename.txt', err=> {
//   if(err) throw err
//   console.log('重命名成功')
// })


// 删除文件
// fs.unlink('./filename.txt', err => {
//   if(err) throw err
//   console.log('删除成功')
// })


// //创建文件夹
// fs.mkdir('./bamboo', err=> {
//   if(err) throw err
//   console.log('创建文件夹成功')
// })

// 递归创建文件夹
// fs.mkdir('./bamboo1/bamboo1', {
//   recursive: true //是否允许递归创建文件夹
// },err => {
//   if(err) throw err
//   console.log('递归创建文件夹成功')
// })


//读取文件夹
// fs.readdir('./', {
//   encoding: 'base64', //编码格式
//   withFileTypes: true //带上文件类型
// },(err,files) => {
//   if(err) throw err
//   console.log(files)
// })

// 删除文件夹
// fs.rmdir('./bamboo1', {
//   recursive: true
// }, err => {
//   if (err) throw err
//   console.log('删除文件夹成功')
// })

// 监听文件或文件夹操作 //npm install chokidar --save-dev
// const chokidar = require('chokidar')

// chokidar.watch('./', {
//   ignored: 'node_modules'
// }).on('all', (events, path) => {
//   console.log( path)
// })