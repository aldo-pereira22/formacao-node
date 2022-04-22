const supertest = require('supertest')

let request = supertest("http://localhost:3131")
test("A aplicação deve responder na porta 3121", async() => {
    // return request.get('/').then(res => expect(res.statusCode).toEqual(200))

    let res = await request.get('/').then(res => expect(res.statusCode).toEqual(200))

})

test("Deve retornar vermelho como cor favorita", (req, res) => {
    return request.get("/cor/aldo").then(res => {
        expect(res.body.cor).toEqual("vermelho")
    })
})