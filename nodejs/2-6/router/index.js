const url = require('url')
const { getUserList, addUser, deleteUser, updateUser } =  require('../controller/user')
function handleRequest(req, res) {
  let urlObj = url.parse(req.url, true)
  if(urlObj.pathname === '/api/getUserList' && req.method === 'GET') {
    let result = getUserList()
    return result
  }
  if(urlObj.pathname === '/api/addUser' && req.method === 'POST') {
    let result = addUser(req.body)
    return result
  }
  if(urlObj.pathname === '/api/deleteUser' && req.method === 'POST') {
    let result = deleteUser(urlObj.query.id)
    return result
  }
  if(urlObj.pathname === '/api/updateUser' && req.method === 'POST') {
    let result = updateUser(urlObj.query.id, req.body)
    return result
  }
}

module.exports = handleRequest