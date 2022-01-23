

class Carro{
    //Constructor es una funcion de la clase animal
    constructor(marca, color, modelo, velocidad,numeroDePuertas){
        //this hace referencia  al contexto en el que se esta utilizaando
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroDePuertas = numeroDePuertas;

        
    }

    acelerar(){
        this.velocidad ++;
        return document.write(`la velocidad actual es  ${this.velocidad} </br>`);

    }


    frenar(){
        this.velocidad = 0;
        return document.write(`la velocidad actual es  ${this.velocidad} </br>`);

    }

    reversa(){
        this.velocidad --;
        return document.write(`la velocidad actual es  ${this.velocidad} </br>`);

    }

    toString(){
        this.velocidad ++;
        return document.write(`Marca: ${this.marca} </br> color: ${this.color}  modelo: ${this.modelo} </br> </br>  Puertas: ${this.numeroDePuertas} </br>  Velocidad: ${this.velocidad} </br>`);

    }
    
}

const Carro1 = new Carro('ferrari','rojo','f70',0,2);
Carro1.toString();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.reversa();
Carro1.frenar();