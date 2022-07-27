const http = require('http');
const routerModal = require('./router/index');
console.log(routerModal)
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'application/json;charset=UTF-8'
  })
  let resultData = routerModal(req, res)
  if(resultData) {
    res.end(JSON.stringify(resultData))
  } else {
    res.writeHead(404, { 'content-type': 'text/html'})
    res.end('404')
  }
})

server.listen(3000, () => {
  console.log('监听3000端口')
})