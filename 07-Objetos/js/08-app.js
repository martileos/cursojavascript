"use strict";

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

// freeze lo vuelve de solo lectura
Object.freeze(producto);
// saber si está congelado el objeto
console.log(Object.isFrozen(producto));

console.log(producto);
producto.imagen = "logo.png";
producto.disponible = false;
delete producto.precio;
console.log(producto);

// Con use strict marca error
// La x no está definida
// x = 20;
// console.log(x);
