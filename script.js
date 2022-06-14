
/*DESAFIO COMPLEMENTARIO*/

    for(let i = 1; i <= 5; i++) {

    const nombreEstudiante = prompt("Nombre del Estudiante: " + i );

    let notaFinal = 0;



    for(let j = 1; j <= 5; j++) {
        const nota = parseInt(prompt("Ingrese su nota numero:" + j));

        notaFinal = notaFinal + nota;
    }

    notaFinal = parseInt(notaFinal / 5);



    if(notaFinal < 6) {
        alert("Has desaprobado este cuatrimestre");
    } else {
        alert("Has aprobado este cuatrimestre. ¡Felicitaciones!");
    }

    console.log("El estudiante llamado" + nombreEstudiante + " tiene como nota final: " + notaFinal);

}



/* EJEMPLO FOR */

// const nombreAlumno1 = prompt("Ingrese nombre del alumno 1");
// alert("El nombre del alumno 1 es: " + nombreAlumno1);
//
// const nombreAlumno2 = prompt("Ingrese nombre del alumno 2");
// alert("El nombre del alumno 2 es: " + nombreAlumno2);
//
// const nombreAlumno3 = prompt("Ingrese nombre del alumno 3");
// alert("El nombre del alumno 3 es: " + nombreAlumno3);
//
// const nombreAlumno4 = prompt("Ingrese nombre del alumno 4");
// alert("El nombre del alumno 4 es: " + nombreAlumno4);
//
// const nombreAlumno5 = prompt("Ingrese nombre del alumno 5");
// alert("El nombre del alumno 5 es: " + nombreAlumno5);

/*for(let i = 1; i <= 3; i++) {

    const nombreAlumno = prompt("Ingrese nombre del alumno " + i);

    let promedio = 0;

    for(let j = 1; j <= 3; j++) {
        const nota = parseInt(prompt("Ingrese la nota " + j));

        promedio = promedio + nota;
    }

    promedio = parseInt(promedio / 3);

    if(promedio < 7) {
        alert("Desaprobaste");
    } else {
        alert("Aprobaste");
    }

    alert("El nombre del alumno " + i + " es: " + nombreAlumno + " y su promedio: " + promedio);
}*/


/* EJEMPLO WHILE */

// let i = 9;
//
// while(i < 10) {
//
//     console.log(i);
//
//     i = i + 1;
// }
//
// console.log("salgo del while");

/*let i = 10;

do {

    console.log(i);
    i = i + 1;

} while(i < 10);

console.log("salgo del while");*/


/* EJEMPLO SWITCH */

/*let numero = parseInt(prompt("Ingrese un número"));

// if(numero === 2) {
//     console.log("El número es igual a 2");
// } else if(numero === 4) {
//     console.log("El número es igual a 4");
// } else if(numero === 6) {
//     console.log("El número es igual a 6");
// } else {
//     console.log("El número no es 2, 4 o 6");
// }

switch(numero) {

    case 7:

        console.log("El número es igual a 7");
        break;

    case 2:

        console.log("El número es igual a 2");
        break;

    case 4:

        console.log("El número es igual a 4");
        break;

    case 6:

        console.log("El número es igual a 6");
        break;

    default:

        console.log("El número no es 2, 4 o 6");
        break;
}*/



