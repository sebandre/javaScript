const asientos = document.getElementById("asientosCont");
let objetoAsientos = [];
let cantidad = 0;
let prueba = [];
let price = 0;
const pelicula = document.querySelector(".pelicula");
const parrafo = document.getElementById("parrafo");

parrafo.innerHTML = "Cantidad de asientos " + cantidad + ", total a pagar $ " + cantidad*price;
class asiento{
    constructor(numero, ocupado){
        this.numero = numero;
        this.ocupado = ocupado;
    }
}


for (j = 0; j <60; j++){
    objetoAsientos.push(new asiento(j, false));
}



let id = 0;
objetoAsientos.forEach(a=>{
    const asientoDiv = document.createElement("div");
    asientoDiv.classList.add("asiento");
    asientoDiv.setAttribute("id", id);
    id = id + 1;
    asientos.appendChild(asientoDiv);
})

let ocu = Array.from(document.getElementsByClassName("asiento"));



const seleccionado = e =>{e.target.classList.toggle("selec");
    if (e.target.classList.contains("selec")) {
        cantidad = cantidad+1;
    } else {
        cantidad = cantidad-1;         
    }
    parrafo.innerHTML = "Cantidad de asientos " + cantidad + ", total a pagar $ " + cantidad*price;
} 


for (asiento of ocu){
    asiento.addEventListener("click", seleccionado);
} 


const btnComprar = document.getElementById("btnComprar");

const comprar = () => {
    ocu.forEach(asiento => {
        if(asiento.classList.contains("selec")){
          asiento.classList.add("comprado");  
          asiento.classList.add("disable-div");
          asiento.classList.remove("selec");
          swal("Compra realizada con exito", "", "success");
          cantidad = 0;
          parrafo.innerHTML = "Cantidad de asientos " + cantidad;
          guardarLocal();
        }   
    })
}

let salaUno = [];
let salaDos = [];
let salaTres = [];
let salaCuatro = [];
let salaCinco = [];
 
const guardarLocal = () =>{
    ocu.forEach(asiento => {
        if (pelicula.value == 1) {
            if(asiento.classList.contains("comprado") != asiento.classList.contains("revisado")){
                asiento.classList.add("revisado");
                salaUno.push(asiento.id);
                localStorage.setItem("salaUno", JSON.stringify(salaUno));
            }
        }
        if (pelicula.value == 2) {
            if(asiento.classList.contains("comprado") != asiento.classList.contains("revisado")){
                asiento.classList.add("revisado");
                salaDos.push(asiento.id);
                localStorage.setItem("salaDos", JSON.stringify(salaDos));
            }
        }
        if (pelicula.value == 3) {
            if(asiento.classList.contains("comprado") != asiento.classList.contains("revisado")){
                asiento.classList.add("revisado");
                salaTres.push(asiento.id);
                localStorage.setItem("salaTres", JSON.stringify(salaTres));
            }
        }
        if (pelicula.value == 4) {
            if(asiento.classList.contains("comprado") != asiento.classList.contains("revisado")){
                asiento.classList.add("revisado");
                salaCuatro.push(asiento.id);
                localStorage.setItem("salaCuatro", JSON.stringify(salaCuatro));
            }
        }
        if (pelicula.value == 5) {
            if(asiento.classList.contains("comprado") != asiento.classList.contains("revisado")){
                asiento.classList.add("revisado");
                salaCinco.push(asiento.id);
                localStorage.setItem("salaCinco", JSON.stringify(salaCinco));
            }
        }
    })
}


btnComprar.addEventListener("click", comprar);



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

fetch("./json/data.json")
.then(res => res.json())
.then (data =>{
    cargarPelicula(data);
}) 
let arreglo;    
const cargarPelicula = (arr) => {
    let html;
    for (const item of arr){
        const {id, nombre, precio, img} = item;
        arreglo = item;
        html = `
            <option data-valor="${precio}" value="${id}">${nombre} $${precio}</option>
            `; 
        pelicula.innerHTML += html;
    }
pelicula.addEventListener("click", obtenerValor);
pelicula.addEventListener("click", cargarLocal);
obtenerValor();

function obtenerValor (){
    price = pelicula[pelicula.value-1].dataset.valor;
}    
cargarLocal();
function cargarLocal(){
    if (localStorage.getItem("salaUno") && (pelicula.value == 1)){
        let idLocal = JSON.parse(localStorage.getItem("salaUno"));
        ocu.forEach(asiento => {
            if(asiento.classList.contains("comprado")){
              asiento.classList.remove("comprado");  
              asiento.classList.remove("disable-div");
              asiento.classList.remove("revisado");
            }
        }) 
        for (i = 0; i < idLocal.length; i++){
        for (j = 0; j < 60; j++){
            let array = document.getElementById(j);
            if (array.id == idLocal[i]){
                array.classList.add("comprado");
                array.classList.add("disable-div");
                array.classList.add("revisado");
            }
        }
       }
    }
    else if (localStorage.getItem("salaDos") && (pelicula.value == 2)){
        let idLocal = JSON.parse(localStorage.getItem("salaDos"));
        ocu.forEach(asiento => {
            if(asiento.classList.contains("comprado")){
              asiento.classList.remove("comprado");  
              asiento.classList.remove("disable-div");
              asiento.classList.remove("revisado"); 
            }
        })       
       for (i = 0; i < idLocal.length; i++){
        for (j = 0; j < 60; j++){
            let array = document.getElementById(j);
            if (array.id == idLocal[i]){
                array.classList.add("comprado");
                array.classList.add("disable-div");
                array.classList.add("revisado");
            }
        }
       }
    }
    else if (localStorage.getItem("salaTres") && (pelicula.value == 3)){
        let idLocal = JSON.parse(localStorage.getItem("salaTres"));
        ocu.forEach(asiento => {
            if(asiento.classList.contains("comprado")){
              asiento.classList.remove("comprado");  
              asiento.classList.remove("disable-div");
              asiento.classList.remove("revisado");
            }
        })       
       for (i = 0; i < idLocal.length; i++){
        for (j = 0; j < 60; j++){
            let array = document.getElementById(j);
            if (array.id == idLocal[i]){
                array.classList.add("comprado");
                array.classList.add("disable-div");
                array.classList.add("revisado");
            }
        }
       }
    }
    else if (localStorage.getItem("salaCuatro") && (pelicula.value == 4)){
        let idLocal = JSON.parse(localStorage.getItem("salaCuatro"));
        ocu.forEach(asiento => {
            if(asiento.classList.contains("comprado")){
              asiento.classList.remove("comprado");  
              asiento.classList.remove("disable-div");
              asiento.classList.remove("revisado");
            }
        })       
       for (i = 0; i < idLocal.length; i++){
        for (j = 0; j < 60; j++){
            let array = document.getElementById(j);
            if (array.id == idLocal[i]){
                array.classList.add("comprado");
                array.classList.add("disable-div");
                array.classList.add("revisado");
            }
        }
       }
    }
    else if (localStorage.getItem("salaCinco") && (pelicula.value == 5)){
        let idLocal = JSON.parse(localStorage.getItem("salaCinco"));
        ocu.forEach(asiento => {
            if(asiento.classList.contains("comprado")){
              asiento.classList.remove("comprado");  
              asiento.classList.remove("disable-div");
              asiento.classList.remove("revisado");
            }
        })       
       for (i = 0; i < idLocal.length; i++){
        for (j = 0; j < 60; j++){
            let array = document.getElementById(j);
            if (array.id == idLocal[i]){
                array.classList.add("comprado");
                array.classList.add("disable-div");
                array.classList.add("revisado");
            }
        }
       }
    }
    else {
        ocu.forEach(asiento => {
            if(asiento.classList.contains("comprado")){
              asiento.classList.remove("comprado");  
              asiento.classList.remove("disable-div");
              asiento.classList.remove("revisado");
            }
        }) 
    }   
}
}

