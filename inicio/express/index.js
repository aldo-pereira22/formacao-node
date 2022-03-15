const express = require('express')
const app = express()


app.get("/",(req, res) => {
    res.send("Bem vindo Ao Site do Aldo!")
})

app.get("/canal", (req, res) => {
    var teste = req.query["teste"]
    if(!teste){
        res.send("Nenhum canal fornecido!")
    }else {

        res.send(teste)
    }
})
app.get("/blog/:artigo?", (req, res) => {

    var artigo = req.params.artigo
    if(artigo){
        res.send("<h2> Artigo: " + artigo +"</h2>")

    }else {
        res.send("Bem Vindo ao meu Blog")
        
    }
})

app.get("/ola/:nome/:empresa",(req, res) => {
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send("<h1> Oi !"+nome+ " da empresa: " + empresa + "</h1>"  )
})

app.listen( 3000,  (err) => {
    if(err){
        console.log("Ocorreu um erro ao acessar o site!")
    }else {
        console.log("Servidor iniciado com sucesso!")
    }
})