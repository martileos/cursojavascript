const productos03 = "Monitor 20 pulgadas";

// .replace para reemplazar
console.log(productos03);
console.log(productos03.replace(" pulgadas", '"'));
console.log(productos03.replace("Monitor", "Monitor curvo"));

// .slice para recortar
console.log(productos03.slice(0, 10));
console.log(productos03.slice(8));
// Si el primer valor es mayor al segundo, no recorta nada, sale en blanco
console.log(productos03.slice(2, 1));

// Alternativa a slice
console.log(productos03.substring(0, 10));
// Si funciona porque toma de la posición 2 un caracter
console.log(productos03.substring(2, 1));

const usuario = "Martín";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));
