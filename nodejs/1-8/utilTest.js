const util = require('util')

async function fn1() {
  return 'HelloWorld'
}

let helloCb = util.callbackify(fn1)

helloCb((err, res) => {
  if(err) throw err
  console.log(res)
})

const fs = require('fs')
let stat = util.promisify(fs.stat)

stat('./utilTest.js').then((data) => {
  console.log(data, 'data')
}).catch((err) => {
  console.log(err)
})


async function fn2() {
  try{
    let stats = await stat('./utilTest.js')
    console.log(stats)
  } catch(e) {
    console.log(e)
  }
}

fn2()

console.log(util.types.isDate(new Date()))