const query = require('../db/conn')
module.exports = {
  getUserList() {
    return {
      list: [
        {
          name: 'eric',
          city: '北京',
          sex: 1
        },
        {
          name: 'fx',
          city: '南京',
          sex: 2
        },
        {
          name: 'lisi',
          city: '天津',
          sex: 1
        }
      ]
    }
  },
  async addUser(userObj) {
    console.log(userObj)
    let {name, city, sex} = userObj
    let sql = 'insert into user(name, city, sex) values (?, ?, ?)'
    let resData = await query(sql,[name,city,sex])
    if(resData) {
      return {
        code: 0,
        msg: '新增成功'
      }
    } else {
      return {
        code: -1,
        msg: '新增失败'
      }
    }
    return resData
  },
  deleteUser(id) {
    console.log(id)
    return {
      msg: '删除成功',
      code: 0,
      data: null
    }
  },
  updateUser(id, userObj) {
    console.log(id, userObj)
    return {
      msg: '更新成功',
      code: 0,
      data: null
    }
  }
}