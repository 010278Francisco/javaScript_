/** 

let $titulo = document.getElementById('titulo');
console.log(titulo.textContent);
titulo.textContent = "titulo escrito por js";*/


let $titulo = document.querySelector("#titulo");
$titulo.textContent = "titulo escrito por js"; 

let $parrafo = document.querySelector("p");
console.log($parrafo.textContent);

let $parrafo = document.querySelectorAll("p");
console.log($parrafo[1].textContent);

let subtitulo = document.createElement("h3")
subtitulo.textContent = 'Este es un suftitulo desdeJS';
//documen.body.append agrga un elemento dentro de body al final
//document.body.insertAdjacentElement(beforeBegin, subtitulo)
document.body.insertAdjacentElement("afterend", subtitulo)
document.body.append(subtitulo);


let $contenido = document.querySelector("#contenido")
//console.log($contenido.textContent = '<br>');
//console.log($contenido.textContent = '<br>');
//console.log($contenido.outerHTML = "Hola");

console.log($contenido.outerHTML)
