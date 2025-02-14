let ArrayFrutas = ['Pera', 'Manzana', 'Pera', 'Manzana', 'Pera', 'Uva', 'Fresa', 'Uva'];
let Peras = [];
let Manzanas = [];
let Uvas = [];
let Fresas = [];

for (let fruta of ArrayFrutas) {
    if (fruta === 'Pera') {
        Peras.push(fruta);
    } else if (fruta === 'Manzana') {
        Manzanas.push(fruta);
    } else if (fruta === 'Uva') {
        Uvas.push(fruta);
    } else if (fruta === 'Fresa') {
        Fresas.push(fruta);
    }
}

console.log('Cantidad de Peras:', Peras.length);
console.log('Cantidad de Manzanas:', Manzanas.length);
console.log('Cantidad de Uvas:', Uvas.length);
console.log('Cantidad de Fresas:', Fresas.length);
