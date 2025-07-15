const nombre = "Hola";
const precio = 0;
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de ${this.precio}`
      //   `El producto: ${nombre} tiene un precio de ${precio}`
    );
  },
};

producto.mostrarInfo();

const producto2 = {
  nombre: "Tablet",
  precio: 100,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de ${this.precio}`
      //   `El producto: ${nombre} tiene un precio de ${precio}`
    );
  },
};

producto2.mostrarInfo();
