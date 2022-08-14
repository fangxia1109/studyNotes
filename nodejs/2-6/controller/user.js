module.exports = {
  getUserList() {
    return {
      list: [
        {
          id: 1,
          name: 'eric',
          city: '北京',
        },
        {
          id: 2,
          name: 'fx',
          city: '南京',
        },
        {
          id: 3,
          name: 'lisi',
          city: '天津',
        }
      ]
    }
  },
  addUser(userObj) {
    console.log(userObj)
    return {
      msg: '新增成功',
      code: 0,
      data: null
    }
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