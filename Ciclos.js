var nombres = ["Andres", "Diego", "Platzi", "Ramiro", "Silvia"]

for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

var numbers = [5, 4, 3, 2, 1]

for (var number of numbers) {
    console.log(number)
}

function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈
    if (deathCount == 0) {
        estudiantes.push(nuevo)
        return estudiantes
    } else {
        while (deathCount > 0) {
            estudiantes.pop()
            deathCount--
        }
        estudiantes.push(nuevo)
        return estudiantes
    }
}