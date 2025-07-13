const productos01 = "Monitor 20 pulgadas ";
const precios = "30 USD";
console.log(productos01.concat(precios));
console.log(productos01.concat("en descuento"));

console.log(productos01 + "con un precio de " + precios);

// Concatenar utilizando signo +
console.log("El producto " + productos01 + "tiene un precio de " + precios);
// Concatenar utiizando la coma ,
console.log("El producto", productos01, "tiene un precio de", precios);
// Utilizando backticks ``
console.log(`El producto ${productos01}tiene un precio de ${precios}`);
