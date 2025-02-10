let NotaEstudiante = prompt('Ingresa tu nota entre 1 a 100')
NotaEstudiante = Number (NotaEstudiante)

if (NotaEstudiante >= 90){
    console.log('Excelente')
}
    else if (NotaEstudiante <= 89 && NotaEstudiante>=75) {
        console.log('Bien')
    }

    else if (NotaEstudiante <= 74 && NotaEstudiante>=60) {
        console.log('Suficiente')
    }

    else{
        console.log('El estudiante no aprueba')
    }