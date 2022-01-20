let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spnaError = document.querySelector('span');


$btnMensaje.addEventListener('click',  ()=>{
    console.log("No me presiones");
});



$mensaje.addEventListener('keyup', (e) => {
    console.log(e.target.value);

    if(e.target.value.length < 3){
        $spnaError.classList.remove('hide');
        $spnaError.classList.add('error');
    }else{
        $spnaError.classList.add('hide');
        $spnaError.classList.remove('error')
    }
/*
    function mostrarConsole(){
        console.log('escribiste algo');
        //ecomerce

    }*/

});