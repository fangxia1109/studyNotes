let fs = require('fs')
const chokidar = require('chokidar')
    // fs.readFile('./index.md', 'utf-8', (err, data) => {
    //     if (err) throw err
    //     console.log(data)
    // })

// fs.writeFile('./index.md', 'this is a test', err => {
//     if (err) throw err
//     console.log("写入成功")
// })

// const buf = Buffer.from(' Hello World!')

// fs.appendFile('./index.md', buf, err => {
//     if (err) throw err
//     console.log("追加成功")
// })

// fs.stat('./index', (err, stats) => {
//     if (err) {
//         console.log('文件不存在')
//         return false
//     }
//     console.log(stats)
//     console.log(stats.isDirectory())
//     console.log(stats.isFile())
// })

// fs.rename('./index.md', './hello.md', err => {
//     if (err) throw err
//     console.log('重命名成功')
// })

// fs.unlink('./index.md', err => {
//     if (err) throw err
//     console.log('删除文件成功')
// })

// fs.mkdir('./doc', err => {
//     if (err) throw err
//     console.log('创建文件夹成功')
// })

// fs.mkdir('./docc/doc2', {
//     recursive: true
// }, err => {
//     if (err) throw err
//     console.log('创建文件夹成功')
// })

// fs.readdir('./', {
//     encoding: 'buffer',
//     withFileTypes: true
// }, (err, files) => {
//     if (err) throw err
//     console.log(files)
// })

// fs.rmdir('./docc', {
//     recursive: true
// }, err => {
//     if (err) throw err
//     console.log('删除成功')
// })

// chokidar.watch('./', {
//     ignored: './node_modules'
// }).on('all', (event, path) => {
//     console.log(event, path)
// })

// let rs = fs.createReadStream('./index.js', {
//     highWaterMark: 100
// })
// let count = 0
// rs.on('data', chunk => {
//     console.log(chunk.toString())
//     console.log(count++)
// })

// rs.on('end', () => {
//     console.log('读取完成')
// })

// let ws = fs.createWriteStream('./nodejs.md')

// let num = 1;
// let timer = setInterval(() => {
//     if (num < 10) {
//         ws.write('**' + num + '**<br/>')
//         num++
//     } else {
//         ws.end('写入完成');
//         clearInterval(timer)
//     }
// })

// ws.on('finish', () => {
//     console.log('写入成功')
// })

let rs = fs.createReadStream('./index.js')
let ws = fs.createWriteStream('./nodejs.md')
rs.pipe(ws)