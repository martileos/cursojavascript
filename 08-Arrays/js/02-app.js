const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];
console.log(numeros);
console.table(numeros);

//Acceder al arreglo
console.log(numeros[2]);
console.log(numeros[0]);
// undefined
console.log(numeros[20]);
// Arreglo dentro del arreglo
console.log(numeros[5]);
// Elemento del arreglo dentro del arreglo
console.log(numeros[5][1]);
