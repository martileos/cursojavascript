const meses = ["Enero", "Febrero", "Marzo"];
// meses[3] = "Abril";
// Agregar al final del arreglo
meses.push("Abril");
meses.push("Mayo");
console.table(meses);

const carrito = [];
// Definir un producto
const producto = {
  nombre: "Monitor de 32 pulgadas",
  precio: 400,
};
const producto2 = {
  nombre: "Celular",
  precio: 800,
};
const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

// Insertar al inicio del arreglo
carrito.push(producto);
carrito.push(producto2);
// Insertar al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);
