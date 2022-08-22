let max=0;
let min=0;
let suma=0;
let ingreso=0;
let flag=false;

for (let i = 0; i <5; i++) {
    ingreso = parseInt(prompt("Ingresa un numero: ")); 
    suma = suma + ingreso;
    if (flag==false) {
        max=ingreso;
        min=ingreso;
        console.log(min);
    }
    if ((ingreso>max) && (flag==true)) {
        max=ingreso;
    }
    if ((ingreso<min) && (flag==true)) {
        min=ingreso;
    }
    flag=true;
    console.log(ingreso);
}
console.log("El maximo es: " + max);
console.log("El minimo es: " + min);
console.log("La suma es: " + suma);

