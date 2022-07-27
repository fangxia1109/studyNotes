const url = require('url')
// console.log(url.parse('https://api.xdclass.net/pub/api/v1/web/index_card'))
const http = require('http')
const server = http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true)
  res.end(JSON.stringify(urlObj.query))
})

server.listen(3000, () => {
  console.log('监听3000端口')
})