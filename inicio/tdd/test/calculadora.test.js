let app = require('../app')

describe("Operações básicas", () => {

    test("Deve retornar o valor 10 ao somar 5 + 5", () => {

        let resultado = app.soma(5, 5)

        expect(resultado).toEqual(10)
    })


    test("Deve retornar o valor 10 ao multiplicar 5 por 2", () => {
        let resultado = app.mult(2, 5)
        expect(resultado).toEqual(10)
    })
})