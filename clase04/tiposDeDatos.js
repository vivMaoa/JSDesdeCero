// Aqui declaramos las variables, para despues mediante un imprimir, poder saber que tipo de dato es cada uno.

let Edad = 42
let Mensaje = 'Jesus Te Ama'
let Negativo = -666
let ElementoNeutroAditivo = 0
let Nulo = null
let Mayor = true
let menor = false

//Aqui empezamos a imprimir de cada variable : Su tipo de dato.

console.log(typeof Edad)
console.log(typeof Mensaje)
console.log(typeof Negativo)
console.log(typeof ElementoNeutroAditivo)
console.log(typeof Nulo) //Me doy cuenta que en la consola, aparece Object, pero debido a que es un error historico de JavaScript, confirmemos con una comparacion.
console.log(typeof Mayor)
console.log(typeof menor)

if (Nulo === null) {
    console.log('Si es nulo')
}
