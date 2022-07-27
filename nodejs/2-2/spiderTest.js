const http = require('https')

const fs = require('fs')

http.get('https://xdclass.net/#/dplayer?video_id=47&e_id=12607', (res) => {
  res.setEncoding('utf-8')
  let html = ''
  res.on('data', chunk => {
    html += chunk
  })
  res.on('end', () => {
    console.log(html)
    fs.writeFile('./index.txt', html, (err) => {
      if(err) throw err
      console.log('写入成功')
    })
  })
})