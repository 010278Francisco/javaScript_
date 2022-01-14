/**Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio.
 */


let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];



let suma = 0;

for (let i = 0; i < numeros.length; i++) {

    numeross = numeros[i].length
    suma = suma + numeros[i];
    prmedio = suma / numeros.length;
    
    
}
document.write(`La suma del arreglo es ${numeros} es un total de <h1> ${suma} y el promedio es ${prmedio}`)



/*
numeros.forEach(element => {

    console.log(element);
    
});*/