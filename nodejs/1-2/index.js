let cal = require('./calculdate') 

let _ = require('loadsh')


cal.add(10, 11)
cal.decrease(20, 10)

let arr1 = [1, 2]

let arr2 = _.concat(arr1, 1, 2, [4, 5, 6])

console.log(arr2)