const supertest = require('supertest')

let request = supertest("www.google.com.br")
test("A aplicação deve responder na porta 3121", () => {
    request.get('/')
        .then(res => expect(res.statusCode).toEqual(200))
})