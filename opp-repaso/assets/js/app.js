

//Creamos una clase llamada Animalito
class Animalito{
    constructor(nombre, edad, especie){//se crea su constructor con sus parametrso
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = false;

    }
    saludar(){
        return console.log(`Hola mmi nombre es${this.nombre}`)
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];

    }
    agregarPaciente(paciente){
       this.listaPacientes.push(paciente); 
       this.cantidadPacientes +=1;
       let mensaje = "Paciente Agregado <br>";
       return document.write(mensaje);
    }

    modificarPacientesRevisados(pacientesRevisados){
        this.pacientesRevisados++;
    }
    
    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados();
            document.write('<br>Este paciente ha sido revisado');

        }else{
            document.write('Este paciente ya fue revisado');
        }
    }

    mostrarLista(){
        for(let i = 0; i< this.listaPacientes.length; i++){
            document.write(" - " + this.listaPacientes[i].nombre);
        }
        document.write(`<br>Cantidad de pacientes: ${this.cantidadPacientes} <br> Paciente revisados${this.pacientesRevisados} <br>`);
    }

    
}

const VeterinariaPanchito = new Veterinario();


const Animalito1 = new Animalito("Manchas",5 , "Canino");
const Animalito2 = new Animalito("Galleta",5 , "Gato");
console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);

console.log(VeterinariaPanchito.listaPacientes);


VeterinariaPanchito.mostrarLista();
VeterinariaPanchito.revisarPaciente(Animalito);
VeterinariaPanchito.mostrarLista();



