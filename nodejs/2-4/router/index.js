const url = require('url')
function handleRequest(req, res) {
  let urlObj = url.parse(req.url, true)
  if(urlObj.pathname === '/api/getMsg' && req.method === 'GET') {
    res.end('获取成功')
  }
}

module.exports = handleRequest