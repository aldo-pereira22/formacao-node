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


// Atualizar dados
// 626a8c939bcfb783f72fb79d
// Article.findByIdAndUpdate('626a8c939bcfb783f72fb79d', {
//         title: " Teste de atualização",
//         body: "Teste de atualização de campos"
//     })
//     .then(() => {
//         console.log("Atualizado!")

//     })
//     .catch(err => {
//         console.log(err)
//     })


// Excluir dados
// Article.findByIdAndDelete('626a8ee46c5efb5cb3de5eed')
//     .then(() => {
//         console.log("Dado removido!")
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// Busca de dados
Article.find({ 'author': 'Aldo' })
    .then((article) => {
        console.log("----------------------------------------------------------------")
        console.log(article)
    })
    .catch(err => {
        console.log(err)
    })





// Listagem de dados
// Article.find({})
//     .then((articles) => {
//         console.log(articles)

//     })
//     .catch((err) => {
//         console.log(err)
//     })




// Cadastro
// const artigo = new Article({
//     title: "React",
//     body: " Estudo do framework REACT!",
//     author: "Aldo Pereira",
//     special: true,
//     resume: {
//         content: "Teste do conteudo do resumo",
//         author: "Aldo Pereira!"
//     }
// })

// artigo.save()
//     .then(() => {
//         console.log("Artigo Salvo!")
//     })
//     .catch((err) => {
//         console.log(err)
//     })