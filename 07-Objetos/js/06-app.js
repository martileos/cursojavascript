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
// console.log(productos);
const {
  nombre,
  informacion,
  informacion: { fabricacion },
  informacion: {
    fabricacion: { pais },
  },
} = productos;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);
