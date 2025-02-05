/* 
    Tipos de datos en JavaScript
*/ 

// Tipo de dato: Number =  Numero

var edad = 25
var precio = 100.50
var puntos = 0
var temperatura = -19

// Tipo de Dato: Cadena de Texto o String

var nombre = "Ano" // Con comillas dobles
var apellido = 'Culo' // Con comillas simples

// Tipo de Dato Boolean 

var esMayor = true
var esMenor = false

//Tipo de dato: Symbol (Identificador Unico)
    var identificador1 = Symbol('id')
    var identificador2 = Symbol('id')

//Tipo de dato: BigInt

var numeroGrande = 2833909019209102910n // Notar la 'n' al final, 

// Tipo: Null (Valor vacio INTENCIONALMENTE)
var vacio = null

//Tipo NaN (No a numero - Un no numero)
var resultadoInvalido = 'Hola' * 10

/*
Que es console.log?
Console.log se usa para mostrar valores en la consola del navegador

Es util para depurar y entender como funcionan las variables del codigo.
*/

console.log (edad)

/*
Que es typeof?
Nos permite conocer el tipo de dato de una variable. 

Es util para depuracion y validaciones de codigo.
*/

console.log (typeof edad)