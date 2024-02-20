//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

delete Array.prototype.map

function map(array, callback) {
    // TODO implement me
    var newArray = []
   
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        var mappedElement = callback(element)
        newArray[i] = mappedElement
    }
    
    return newArray
}

console.log('CASE 1')

var nums = [10, 20, 30, 40, 50]

var numsX100 = map(nums, function (num) {
    return num * 100
})

console.log(numsX100)
// [1000, 2000, 3000, 4000, 5000]
console.log(nums)
// [10, 20, 30, 40, 50]

console.assert(numsX100 === 1000, 2000, 3000, 4000, 5000, '1000, 2000, 3000, 4000, 5000')

console.assert(nums === 10, 20, 30, 40, 50, '10, 20, 30, 40, 50')

console.log('CASE 2')

var chars = ['a', 'b', 'c']

var charsInUpper = map(chars, function (char) {
    return char.toUpperCase()
})

console.log(charsInUpper)
// ['A', 'B', 'C']
console.log(chars)
// ['a', 'b', 'c']

console.assert(charsInUpper === A, B, C, 'A, B, C')

console.assert(chars === a, b, c, 'a, b, c')