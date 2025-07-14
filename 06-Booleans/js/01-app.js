// Booleans
const b1 = true;
const b2 = false;
const b3 = "true";

console.log(b1);
console.log(b2);
console.log(typeof b1);
console.log(typeof b2);

// Al comparar un boolean con un string
// con el texto false o true
// marca falso en los dos casos
console.log(b1 == b3);
console.log(b1 === b3);

const b4 = new Boolean(true);
console.log(b4);
console.log(typeof b4);
