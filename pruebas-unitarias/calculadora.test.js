const {sumar,multiplicar,dividir} = require('./calculadora')
const {restar} = require('./calculadora')


describe('Pruebas en el componente calculadora', ()=>{


        test('Prueba en la funcion sumar',()=>{

            expect(sumar(3,5)).toBe(8);
        })
});

describe('Pruebas en el componente calculadora', ()=>{


    test('Prueba en la funcion restar',()=>{

        expect(restar(5,2)).toBe(3);
    })
});

    test('Prueba en la funcion multiplicar',()=>{

        expect(multiplicar(5,2)).toBe(10);
})
    test('Prueba en la funcion dividir',()=>{

        expect(dividir(10,2)).toBe(5);
})