//Declarativa

function sum(a, b) {
    return a + b;
}


//expresion - expresiva - incognita

var suma = function(a, b) {
    return a + b;
}

console.log(sum(1, 2))
console.log(sum(1, 3))

//Hoisting

//Scope
var nombre = "JavaScript"

function saludar() {
    console.log("Hola " + nombre)
}

saludar()