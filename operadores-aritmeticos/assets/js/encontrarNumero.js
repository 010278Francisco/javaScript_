/**Escribir un documento html el cual debe contener un input y un botón.
Escribir un programa en donde se defina un número secreto.
Se debe leer el valor que el usuario escriba en el input y darle pistas al usuario sobre si adivinó o no el número secreto.

Si el número que escribio el usaurio es igual al número secreto se debe mostrar Felicidades, adivinaste el número secreto
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 5, se debe mostrar Calienteeeeeeee
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 10, se debe mostrar Caliente
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 20, se debe mostrar Tibio
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 30, se debe mostrar Frio
Si la diferencia entre en número ingresado y el número secreto es mayor a 30, se debe mostrar Congelado
 */



let numeroCorrecto = Math.random()*100;//se hace un random para qye de un numero oleatorio
let entero = Math.trunc(numeroCorrecto);//utilizamos la funcion trunk para devlover un entero
console.log(entero);//Manda el numero en consola para saber que numero es el correcto.


function ejercicio(){
    let numeroIngresado = document.getElementById('dameNumero').value;

    let resta = numeroIngresado-entero;
    let restaPositivo = Math.abs(resta);//PASAMOS TODOS LOS DATOS A POSITIVOS CON ABS.
    
    console.log(restaPositivo);

    
    if (entero == numeroIngresado ){
        let msj = document.getElementById('msj').innerHTML = "Felicidades Advinaste el numero";

    }else if(restaPositivo <= 5){
        let msj = document.getElementById('msj').innerHTML = "CALIENTEEEEE";
       
    }else if (restaPositivo <=10){
        let msj = document.getElementById('msj').innerHTML = "caliente";

    }else if(restaPositivo <= 20){
        let msj = document.getElementById('msj').innerHTML = "Tibio";

    }else if(restaPositivo <= 30){
        let msj = document.getElementById('msj').innerHTML = "Frio";

    }else if(restaPositivo > 30 ) {
        let msj = document.getElementById('msj').innerHTML = "congelado";


    }
    

  
}





/*
function mandar(){
    let nombre = document.getElementById('dameNombre').value;
    let mensajePantalla = document.getElementById('msj').innerHTML = "Hola "+ nombre 

}
*/








