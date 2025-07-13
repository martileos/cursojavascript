// alert("Hola Mundo");
// Comentario de una línea
/*
    Comentario de múltiples líneas
*/ 
// Pregunta al usuario su nombre
const nombre = prompt("¿Cuál es tu nombre?");
// Documentar una línea de código
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript moderno` 

// Tipos de mensajes para la consola del navegador
console.log("Mensaje en consola de texto sencillo")
// Mensaje en tabla
console.table([1,2,3,4,5])
// Mensaje de error
console.error("Este es un error hacia la consola")
// Mensaje de advertencia
console.warn("Advertencia en consola")
// Console.time inicia un contador de tiempo de ejecución de código
// se detiene hasta que encuentra un console.timeEnd y da el resultado
// con la cantidad de tiempo de ejeción del código entre time y timeEnd.
console.time("Hola")
console.log("Mensajes hacia la consola para ver cuanto tarda");
console.log("Mensajes hacia la consola para ver cuanto tarda");
console.log("Mensajes hacia la consola para ver cuanto tarda");
console.log("Mensajes hacia la consola para ver cuanto tarda");
console.log("Mensajes hacia la consola para ver cuanto tarda");
console.log("Mensajes hacia la consola para ver cuanto tarda");
console.log("Mensajes hacia la consola para ver cuanto tarda");
console.timeEnd("Hola")