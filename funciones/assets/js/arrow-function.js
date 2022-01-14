/**Arrow functio 
 Funcion de flecha
*/

/*
function sumar (numero1, numero2){
    //operaciones o codigo a ejecutar
    return numero1 + numero2;

}
*/

const sumar = (numero1,numero2)=>{
    return numero1 + numero2;
}

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let sumaNumeros = sumar(numero1,numero2);

document.write(`la suma de ${numero1} y ${numero2} es ${sumaNumeros}<br>`);
