let cadena1 = "Hola";
console.log(cadena1);

let cadena2 = new String("Adios");//Objetos String
console.log(cadena2);


console.log(cadena2.toLowerCase().includes("a"));


console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());



//COHERSION Y CONVERSION
//COHERSION - JAVASCRIPT CONVIERTE EN AUTOMATICO
//UN TIPO DE DATO EN OTRO 

/*Funcion que recibe una palabra y la regresa invertida

*/
let palabra = "Hola Mundo";
let arreglo = palabra.split(" ");
console.log(arreglo);
console.log(arreglo.reverse());

function invertirPalabra(cadena){
    let arreglo = cadena.split("");//Convierte la cadena en arreglo
    arreglo.reverse();//manda la cadena invertido

    let cadenaInvertida = arreglo.join("");//este metodo une los elementos de un arreglo y regresa un string
    return console.log(cadenaInvertida);
}

let correcto = invertirPalabra("Generation");
