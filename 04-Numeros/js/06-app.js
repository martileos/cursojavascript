const nu1 = "20";
const nu2 = "20.2";
const nu3 = "Uno";
const nu4 = 20;
console.log(typeof nu1);
console.log(typeof nu2);
console.log(typeof nu3);
console.log(typeof nu4);

console.log(nu1);
// De string a número entero
console.log(Number.parseInt(nu1));
// De string a número flotante
console.log(Number.parseFloat(nu2));
// Marca NaN = no es un número
console.log(Number.parseInt(nu3));

// Revisar si un número es entero o no
console.log(Number.isInteger(4));
console.log(Number.isInteger(4.2));
