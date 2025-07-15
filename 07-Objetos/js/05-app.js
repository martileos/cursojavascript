const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    peso: "1kg",
    medida: "1m",
  },
};
console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);

const productos = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1kg",
    },
    fabricacion: {
      pais: "China",
    },
  },
};
console.log(productos);
console.log(productos.informacion.fabricacion.pais);
console.log(productos.informacion.NoExiste.pais);
