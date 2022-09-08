let continuar = true;
const productos = [
    { id: 1, nombre: "Intel I3", modelo: "10100F Comet Lake",  precio: 105},
    { id: 2, nombre: "Intel I3", modelo: "12100F Alder Lake ", precio: 155},
    { id: 3, nombre: "Intel I5", modelo: "11400F Rocket Lake", precio: 215},
    { id: 4, nombre: "Intel I5", modelo: "12400F Alder Lake", precio: 270},
    { id: 5, nombre: "Intel I7", modelo: "11700F Rocket Lake", precio: 450},
    { id: 6, nombre: "Intel I7", modelo: "12700 Alder Lake", precio: 530},
    { id: 7, nombre: "Intel I9", modelo: "10900KF Comet Lake", precio: 600},
    { id: 8, nombre: "Intel I9", modelo: "12900KF Alder Lake", precio: 900},
    { id: 9, nombre: "Intel I9", modelo: "7900x X-series", precio: 1400},
  ];
  console.log(productos);
  
function agregar(id, nombre, modelo, precio){
    this.id=id;
    this.nombre=nombre;
    this.modelo=modelo;1
    this.precio=precio;
};
  
do {
  let opcion = prompt("Selecione una opcion\n1: Agregar productos\n2: Comprar\n3: Salir");
  console.log(opcion);
  switch (opcion) {
    case "1":
      let ultimaid = productos[productos.length-1];
      let nombreN = prompt("Ingrese el nombre del producto");
      let modeloN = prompt("Ingrese el modelo");
      let precioN = prompt("Ingrese precio");
      const nuevoProducto = new agregar(ultimaid.id+1, nombreN, modeloN, precioN);
      productos.push(nuevoProducto);
      console.log(productos);
    break;
    case "2":
      
    break;
    case "3":
      continuar = false;
    break;
  
    default:
    break;
  }
} while (continuar);