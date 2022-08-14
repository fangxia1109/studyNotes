const mysql = require( 'mysql')

// 创建连接
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'user_test'
})

// 建立连接
conn.connect()

// ?是占位符
let sql = 'select * from user where id  = ? or id = ? or name = ?'

// 执行sql语句
//[]数组里的数据是填充占位符
conn.query(sql, [4,5, 'eric'], (err, res) => {
  if(err) throw err
  console.log(res)
})

// 关闭连接
conn.end()