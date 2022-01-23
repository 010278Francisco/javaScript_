//Clases, molde que nos permite crear objetos


class Animal{
    //Constructor es una funcion de la clase animal
    constructor(nombre, especie){
        //this hace referencia  al contexto en el que se esta utilizaando
        this.nombre = nombre;
        this.especie = especie;
        
    }


// getters y setters
//solo tienen este proposito leer o modificar el atributo
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }
    set setEspecie(especie){
        this.especie = especie;
    }


    //Metodos == function 
    presentarse(){
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} <br>`)
    }
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return document.write(mensaje)
    }


    //METODOS STATICOS
    //pertenece solo a la clase y no se ereda a los objetos
    static saludar(){
        return console.log("Hola soy un metodo estatico")
    }
}

Animal.saludar();

//Animal1.presentarse



//Heredan llos atributos y los metodos de la  clase que estan utilizando;
const Animal1 = new Animal("Scooby", "Perro");//Creamos un objeto
console.log(Animal1);

const Animal3 = new Animal();//Creamos un objeto
console.log(Animal3);


const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal2)

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();


console.log(Animal1.nombre);
Animal1.nombre = "Scrappy";//metodo de punto para cambiar el valor
console.log(Animal1.nombre);
console.log(Animal1);

document.write(Animal1.cambiarNombre("Oddie"))//metodo para cambiar el valor


//getters y setters

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1);
