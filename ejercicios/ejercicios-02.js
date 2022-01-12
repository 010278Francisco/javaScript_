//1. Almacenar el año actual en una variable. Pedirle al usuario su edad y calcular su edad.

let obtenerEdad= document.getElementById('cambio_edad');
//console.log(obtenerEdad);
let year = 2022;


function  functionn(){
    let edad = prompt("INGRESA TU EDAD");
    let resultado = year - edad;
    obtenerEdad.textContent = "Tienes " + resultado +  " años" ;


}







