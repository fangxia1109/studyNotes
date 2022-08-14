const mysql = require( 'mysql')

// 创建连接池
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'user_test'
})

// 获取连接
pool.getConnection((err, conn) => {
  if(err) throw err
  // ?是占位符
  let sql = 'select * from user where id  = ? or id = ? or name = ?'

  // 执行sql语句
  //[]数组里的数据是填充占位符
  conn.query(sql, [4,5, 'eric'], (err, res) => {
    conn.release()
    if(err) throw err
    console.log(res)
  })
})