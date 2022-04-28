const mongoose = require('mongoose')
const articleModel = require('./article.js')

mongoose.connect("mongodb://172.17.0.2:27017/aprendendomongo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conectado com sucesso!")
    })
    .catch((err) => {
        console.log(err)
    })

const Article = mongoose.model('Article', articleModel)

const artigo = new Article({ title: "Teste do João 2", author: "João 2", body: " Este é um teste de body do João Victor 2" })

artigo.save()
    .then(() => {
        console.log("Artigo Salvo!")
    })
    .catch((err) => {
        console.log(err)
    })