var http = require("http")

http.createServer( (req, res) => {
    res.end("<h1>Bem Vindo o servidor! <h1/> <br> <h4> Aldo Pereira<h4/>")
}).listen(8080)
console.log("Meu servidor está rodando!")