const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log(socket.id + " Desconectou")
    })

    socket.on('boasvindas', (data) => {
        console.log(data)
        console.log("BEMVINDO: " + socket.id)
    })


    socket.on('palavra', (data) => {
        console.log(data)
        socket.emit('resultado', data + '- Desenvolvedor!')
    })
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

http.listen(3000, () => {
    console.log('APP RODANDO NA PORTA 3000')
})