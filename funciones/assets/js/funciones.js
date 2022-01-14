/**Bloque de codigo reutilizable puede 
 * tener o no parametros de entrada 
 * puede devolver un valor.
 */



function suma(num1, num2){
    //Operaciones a realizar.

    return num1 + num2;
    console.log("Hola desde la funcion");
}

function resta(num1, num2){
    //Operaciones a realizar.
    document.write(`la resta de ${num1} y ${num2} es ${num1-num2}<br>`);

   
}

let num1 = parseInt(prompt('Numero 1'));
let num2 = parseInt(prompt('Numero 2'));
let sumaNumeros = suma(num1,num2);

document.write(`la suma de ${num1} y ${num2} es ${sumaNumeros}<br>`);
document.write("la suma de " + num1 + " y " + num2 + " es " + sumaNumeros);
resta(num1,num2);
