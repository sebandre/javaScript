let nombre;
let apuesta, saldo, posicion, juego;
apuesta=0;
saldo=100;

nombre = prompt("Bienbenido al juego de la mosqueta, ingrese su nombre para continuar");
alert(nombre + " cuentas con $100 de saldo inicial, diviertete" );
do{
    apuesta = prompt("Ingresa tu apuesta");
    if (apuesta <= saldo) {
        posicion = parseInt(prompt("Elige un vaso, 1, 2 o 3!"));
        juego = Math.floor(Math.random() * 3)+1;
        if (posicion == juego ) {
            apuesta = apuesta * 2;
            saldo = saldo + apuesta;
            alert("Ganaste: " + apuesta + "\nTu saldo actual es: " + saldo);
        }
        else{
            saldo = saldo - apuesta;
            alert("Perdiste, el vaso correcto era: " + juego + "\nTu saldo actual es: " + saldo);
        }
    }
    else if (apuesta > saldo ) {
        alert("La apuesta no puede ser mayor al saldo. Tu saldo es: " + saldo);
    }
}
while (saldo > 0);
alert("Gracias por jugar")