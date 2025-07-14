const numero11 = 20;
const numero22 = "20";
const numero33 = 30;

// Revisar si dos números son iguales
// Se fija en el valor
console.log(numero11 == numero33);
console.log(numero11 == numero22);

// Comparador estricto
// Se fija en el valor y el tipo de dato
console.log(numero11 === numero33);
console.log(numero11 === numero22);
console.log(numero11 === parseInt(numero22));
console.log(typeof numero11);
console.log(typeof numero22);

// Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero11 != numero22);
// Diferente estricto
console.log(numero11 !== numero22);
console.log(numero11 !== parseInt(numero22));
