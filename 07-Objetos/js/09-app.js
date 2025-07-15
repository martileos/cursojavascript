"use strict";

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Seal lo vuelve de solo lectura parcialmente
// Con Seal se pueden modificar los valores de las propiedades
// Con Seal no se pueden agregar o modificar propiedades
Object.seal(producto);
// saber si está Seal el objeto
console.log(Object.isSealed(producto));
