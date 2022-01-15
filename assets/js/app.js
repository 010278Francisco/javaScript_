let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto esta escrito con javascript';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

//parrafos[0].textContent = 'Parrafos escritos desde Javascript';

//for(let i = 0; i < parrafos.length; i++){
 //   parrafos[i].textContent = 'Parrafo ' + i + ' Escrito desde Javascript'
//}

let email = document.getElementById('email');//hacemos referncia a los datos
let password = document.getElementById('password');//hacemos referencia a los datos


function getInformation(){
    console.log(email.value);
    console.log(password.value);
    

}
