let numeros = [1, 3, 13,23,532,328,123,6865,812,213,123];
/*
numeros.forEach(elemento =>{
    document.write(elemento + ', ');
    

});
*/
/*Forech con funcion anonima por no tienen nombre */



let numero2 = numeros.map(function(elemento){
        return elemento * 2;
});

document.write('<br>' + numero2+'<br>');


/*
let frutas =["mango","uva","piña"];
let frutas2 = frutas;

document.write('<br>' + frutas+'<br>');
document.write('<br>' + frutas2 +'<br>');

frutas.push("pera"); 
document.write('<br>' + frutas+'<br>');
document.write('<br>' + frutas2 +'<br>');*/


/**CON ARREGLOS MAP */
/*
let frutas =["mango","uva","piña"];
let frutas2 = frutas.map(function(elemento){
    return elemento;
});

document.write('<br>' + frutas+'<br>');
document.write('<br>' + frutas2 +'<br>');

frutas.push("pera","Uvas"); 
document.write('<br>' + frutas+'<br>');
document.write('<br>' + frutas2 +'<br>');*/



/*INCLUDES*/
document.write('<br>' + numeros.includes(1) + '<br>');


/**FILTER FILTRA LOS ELEMENTOS QUE SE ESPECIFICAN */
let numerosPares = numeros.filter((elemento)=>{
   /* if(elemento %2==0){
        return true;
    }else{
        return false;
    }
    */
  /* console.log(elemento % 2 == 0);
    return elemento % 2 == 0;*/
    if(elemento>10){
        return true;
    }
});

document.write('<br>' + numerosPares + '<br>')

let frutas =["Mango","uva","piña", "mandarina","manzana","aguacate", "Sandia"];
let frutasFiltro = frutas.filter((fruta)=>{
   /* if(fruta.includes('m') == true){
        return true;
    }*/

    return fruta.toLowerCase().includes('m')
});
document.write('<br>' + frutasFiltro + '<br>');


/*SORT */
let otrosNumeros = [9,2,3,5,1,4,8,6,7,]
document.write('<br>' + otrosNumeros.sort() + '<br>')

//METODO REVERSE
document.write('<br>' + numeros.reverse() + '<br>')

//METODO FIND
let frutaEncontrada = frutas.find((elemento) =>{
    return elemento.toLowerCase().includes('ma');
});

document.write('<br>' + frutaEncontrada + '<br>')

