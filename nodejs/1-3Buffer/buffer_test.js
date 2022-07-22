console.log(Buffer.alloc(10))

console.log(Buffer.alloc(10,3))

console.log(Buffer.alloc(10, 10))

console.log(Buffer.alloc(10, 100))

console.log('--------------------------------------')
console.log(Buffer.allocUnsafe(10))

console.log('--------------------------------------')
console.log(Buffer.from([1,2,3]))

console.log(Buffer.from('eric'))

console.log(Buffer.from('eric', 'base64'))

console.log('--------------------------------------')

console.log(Buffer.byteLength('fangxia方霞'))

console.log(Buffer.byteLength('方霞'))

console.log('--------------------------------------')

console.log(Buffer.isBuffer({}))

console.log(Buffer.isBuffer(Buffer.from([1,2,3])))

console.log('--------------------------------------')

const buf1 = Buffer.from('hello')

const buf2 = Buffer.from('fangxia')

console.log(buf1, buf1.length)
console.log(buf2, buf2.length)
console.log(Buffer.concat([buf1,buf2], 12))

console.log('--------------------------------------')
console.log(Buffer.concat([buf1,buf2]).toString())

console.log(Buffer.concat([buf1,buf2]).toString('utf8',3,10))
