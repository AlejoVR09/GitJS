function calcularDescuento(articulos, precio) {
    var precioFinal

    if (articulos <= 5) {
        //Hasta 5 artículos
        precioFinal = precio * (1 - 0.1)
    } else if (articulos > 5 && articulos <= 10) {
        //De 6 a 10 artículos
        precioFinal = precio * (1 - 0.15)
    } else {
        //De 10 artículos en adelante
        precioFinal = precio * (1 - 0.2)
    }

    return precioFinal
}


console.log(calcularDescuento(4, 10))
console.log(calcularDescuento(8, 20))

function esPar(numero) {
    return numero % 2 === 0 ? "Es par" : "No es par"
}

console.log(esPar(2))

//Reto 1
var option1 = "Piedra";
var option2 = "Papel";
var option3 = "Tijera";

function ppt(player1, player2) {
    if (player1 == option1 && player2 == option3) {
        console.log("Gana jugardor")
    } else if (player1 == option2 && player2 == option1) {
        console.log("Gana jugardor")
    } else if (player1 == option3 && player2 == option2) {
        console.log("Gana jugardor")
    } else {
        if (player1 == player2) {
            console.log("Empate")
        } else {
            console.log("Gana CPU")
        }
    }
}

ppt(option1, option2)
ppt(option1, option3)
ppt(option2, option1)
ppt(option2, option3)
ppt(option3, option2)
ppt(option3, option1)