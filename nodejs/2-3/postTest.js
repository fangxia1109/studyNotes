const http = require('http')

const server = http.createServer((req, res) => {
  let postData=""
  req.on('data', chunk => {
    postData += chunk
  })
  req.on('end', () => {
    console.log(postData)
  })
  res.end(JSON.stringify({
    data: '请求成功',
    code: 0
  }))
})

server.listen(3000, () => {
  console.log('监听3000端口')
})