const libros = []

function agregarLibro() {
    const titulo = prompt(`Cual libro quisieras agregar a tu lista?`);
    if (titulo) {
        libros.push(titulo)
        console.log(`${titulo} ha sido agregado a tu lista de libros`)
        
    } else {
        console.log(`No se ha agregado ningun libro`)
    }
}

function mostrarLibros () {
    if(libros.length === 0) {
        console.log("Tu lista de libros esta vacia")
    } else {
        console.log("Lista de libros:")
        for(const libro of libros){
            console.log(`- ${libro}`);
        }
    }
}

agregarLibro();
agregarLibro();
agregarLibro();
agregarLibro();
mostrarLibros();
