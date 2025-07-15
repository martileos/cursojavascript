const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Agregar nuevas propiedades al objeto
producto.imagen = "foto.png";

// Eliminar una propiedad del objeto
delete producto.disponible;

console.log(producto);
