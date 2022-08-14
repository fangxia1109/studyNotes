const mysql = require('mysql')

const dbOption = require('../config/db_config')

const pool =  mysql.createPool(dbOption)

function query(sql, params) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if(err) {
        reject(err)
        return 
      }
      conn.query(sql, params, (err, res) => {
        conn.release()
        if(err) {
          reject(err)
          return 
        }
        resolve(res)
      })
    })
  })
}

module.exports = query