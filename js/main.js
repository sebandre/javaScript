const asientos = document.getElementById("asientosCont");
let objetoAsientos = [];
let cantidad;


class asiento{
    constructor(fila, columna, ocupado){
        this.fila = fila;
        this.columna = columna;
        this.ocupado = ocupado;
    }
}

for (let i = 0; i < 6; i++) {
    for (j = 0; j <10; j++){
        objetoAsientos.push(new asiento(i, j, false));
    }
}

objetoAsientos.forEach(asiento=>{
    const asientoDiv = document.createElement("div");
    asientoDiv.classList.add("asiento");
    asientoDiv.classList.add("fila-${asiento.fila}");
    asientoDiv.classList.add("columna-${asiento.columna}");
    asientos.appendChild(asientoDiv);
})

let ocu = Array.from(document.getElementsByClassName("asiento"));

const seleccionado = e => e.target.classList.toggle("selec");


for (asiento of ocu){
    asiento.addEventListener("click", seleccionado);
     cantidad = cantidad+1;
}


const btnComprar = document.getElementById("btnComprar");

const comprar = () => {
    ocu.forEach(asiento => {
        if(asiento.classList.contains("selec")){
          asiento.classList.add("comprado")
          asiento.classList.remove("selec")
          console.log(asiento);
        }  
    })
}
btnComprar.addEventListener("click", comprar)


//darkmode
const btnoscuro = document.querySelector("#oscuro");
const body = document.querySelector("body");
btnoscuro.addEventListener("click", e=>{
    body.classList.toggle("oscuro");
    almacena(body.classList.contains("oscuro"));
});

cargar();

function cargar() {
    const oscuro = localStorage.getItem("oscuro");
    if (!oscuro) {
        almacena("false");
    }
    else if (oscuro == "true") {
        body.classList.add("oscuro");
    }
}

function almacena(valor) {
    localStorage.setItem("oscuro", valor);
}