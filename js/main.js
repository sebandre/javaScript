let continuar = true;
let productos = [];
let carrito = [];

class Productos{
  constructor(id, nombre, modelo, precio){
    this.id=id;
    this.nombre=nombre;
    this.modelo=modelo.toUpperCase();
    this.precio=precio;
  }
}

function agregar(){
  productos.push(new Productos(1, "Intel I3", "10100F Comet Lake",  105));
  productos.push(new Productos(2, "Intel I3", "12100F Alder Lake ", 155));
  productos.push(new Productos(3, "Intel I5", "11400F Rocket Lake", 215));
  productos.push(new Productos(4, "Intel I5", "12400F Alder Lake", 270));
  productos.push(new Productos(5, "Intel I7", "11700F Rocket Lake", 450));
  productos.push(new Productos(6, "Intel I7", "12700 Alder Lake", 530));
  productos.push(new Productos(7, "Intel I9", "10900KF Comet Lake", 600));
  productos.push(new Productos(8, "Intel I9", "12900KF Alder Lake", 900));
  productos.push(new Productos(9, "Intel I9", "7900x X-series", 1400));
  console.log(productos);
}

agregar();
  
do {
  let opcion = prompt("Selecione una opcion\n1: Agregar productos\n2: Comprar\n3: Salir");
  console.log(opcion);
  switch (opcion) {
    case "1":
      let ultimaid = productos[productos.length-1];
      let nombreN = prompt("Ingrese el nombre del producto");
      let modeloN = prompt("Ingrese el modelo");
      let precioN = parseInt(prompt("Ingrese precio"));
      productos.push(new Productos(ultimaid.id+1, nombreN, modeloN, precioN));
      console.log(productos);
    break;
    case "2":
      let buscar = prompt("Modelo").toUpperCase();
      let resultado = productos.filter((el)=>el.modelo.includes(buscar));
      carrito.push(resultado);
      console.log(carrito);
      
    break;
    case "3":
      continuar = false;
    break;
  
    default:
    break;
  }
} while (continuar);