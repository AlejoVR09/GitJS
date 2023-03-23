var array = [1, 2, 3, 4]
var longitud = array.length
console.log(longitud)

var array_1 = [1, 2, 3, 4]
var lastElement = array_1.pop()
console.log(lastElement)
console.log(array_1)

function solution(arraySecreto) {
    return (typeof arraySecreto[0] === "string" ? true : false)
}