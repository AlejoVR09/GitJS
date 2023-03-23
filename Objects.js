var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function() {
        console.log("Es un auto")
    }
}

miAuto["marca"]
miAuto["modelo"]
miAuto["año"]
miAuto["detalle"]()

function auto(MARCA, MODELO, ANNIO) {
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}
var autos = [];
for (let i = 0; i < 30; i++) {
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto(marca, modelo, annio));
}

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

function solution(car) {
    if (car.licensePlate === null || car.licensePlate === undefined) {
        car.drivingLicense = false;
    } else {
        car.drivingLicense = true;
    }
    return car;
}