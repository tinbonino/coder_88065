// Desestructurando arrays

let nombres = ["Guada","Nico","Carlos","Seba","Ivan"];

// let nombre1 = nombres[0];
// let nombre2 = nombres[1];
// let nombre3 = nombres[2];
// let nombre4 = nombres[3];
// let nombre5 = nombres[4];

//Desestructurando un array completo

// let [nombre1,nombre2,nombre3,nombre4,nombre5] = nombres;

// console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);
// console.log(nombre4);
// console.log(nombre5);

// Desestructurando elementos puntuales
let [nombre1,,,,nombre5] = nombres;

console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);
// console.log(nombre4);
console.log(nombre5);

// Desestructurando en bloque

let [name1, ...names] = nombres;

console.log(name1);

console.log(names);

// Desestructurando Objetos

let estudiante = {
    nombre:"Gustavo",
    apellido:"Billoud",
    curso:"React"
}

console.log(estudiante.nombre);
console.log(estudiante.apellido);
console.log(estudiante.curso);

let {curso,apellido,nombre} = estudiante;

// Si no quiero desestructurar todos, simplemente coloco el nombre de las propiedades que deseo

console.log(nombre);
console.log(apellido);
console.log(curso);

let {nombre:nombrecito, apellido:surname,curso:course}= estudiante;

console.log(nombrecito);
console.log(surname);
console.log(course)