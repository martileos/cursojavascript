const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Aunque se declare el objeto con CONST
// si se pueden cambiar los valores y atributos
producto.disponible = false;
console.log(producto.disponible);
