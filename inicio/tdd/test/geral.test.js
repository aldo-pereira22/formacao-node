const supertest = require('supertest')

let request = supertest("http://localhost:3131")
test("A aplicação deve responder na porta 3121", async() => {
    // return request.get('/').then(res => expect(res.statusCode).toEqual(200))

    let res = await request.get('/')

    expect(res.statusCode).toEqual(200)

})