const productos04 = "Monitor 20 pulgadas";

// .repeat te va a permitir repetir una cadena de texto
const texto = " en promoción".repeat(3);
console.log(texto);
console.log(`${productos04}${texto}!!!`);

// Si se pone un argumento que no es entero
// redondea hacia abajo al próximo número entero
const texto2 = " en promoción".repeat(3.6);
console.log(texto2);

// Split, dividir un string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar música, aprender a programar";
console.log(hobbies.split(","));

const tweet = "Aprendiendo JavaScript Moderno #JSModernoConJuan";
console.log(tweet.split("#"));
