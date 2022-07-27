const url = require('url')
// console.log(url.parse('https://api.xdclass.net/pub/api/v1/web/index_card'))
const http = require('http')
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    let urlObj = url.parse(req.url, true)
    res.end(JSON.stringify(urlObj.query))
  } else if (req.method === 'POST') {
    let postData=""
    req.on('data', chunk => {
      postData += chunk
    })
    req.on('end', () => {
      console.log(postData, 'postData')
    })
    res.end(JSON.stringify({
      data: '请求成功',
      code: 0
    }))
  }
})

server.listen(3000, () => {
  console.log('监听3000端口')
})