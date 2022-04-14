const expres = require('express')
const app = expres()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var db = {
    games: [{
            id: 22,
            title: "Call of duty",
            year: "2019",
            price: 60
        },
        {
            id: 21,
            title: "FIFA 2022",
            year: "2022",
            price: 99
        },
        {
            id: 25,
            title: "Super Mário World",
            year: "1995",
            price: 1000
        },
        {
            id: 59,
            title: "Counter Strike",
            year: "2008",
            price: 79
        }
    ]
}


app.get("/games", (req, res) => {
    res.statusCode = 200
    res.json(db.games)

})

app.get("/game/:id", (req, res) => {
    const id = req.params.id
    if (isNaN(id)) {
        res.sendStatus(400)
    } else {
        const game = db.games.find(g => g.id == parseInt(id))
        if (game != undefined) {
            res.statusCode = 200
            res.json(game)
        } else {
            res.sendStatus(404)
        }
    }
})


app.delete('/game/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        const id = parseInt(req.params.id)
        const index = db.games.findIndex(g => g.id == id)

        if (index == -1) {
            res.sendStatus(404)
        } else {
            db.games.splice(index, 1)
            res.sendStatus(200)
        }
    }
})

app.put('/game/:id', (req, res) => {

    const id = req.params.id
    if (isNaN(id)) {
        res.sendStatus(400)
    } else {
        const game = db.games.find(g => g.id == parseInt(id))
        if (game != undefined) {
            var { title, price, year } = req.body

            if (title != undefined) {
                game.title = title
            }
            if (price != undefined) {
                game.price = price
            }

            if (year != undefined) {
                game.year = year
            }

            res.sendStatus(200)

        } else {
            res.sendStatus(404)
        }
    }

})

app.post('/game', (req, res) => {
    var { id, title, price, year } = req.body
    id = Math.floor(Math.random() * (999 - 0) + 0)
    db.games.push({
        id,
        title,
        price,
        year
    })
    res.sendStatus(201)
})


app.listen(5000, () => {

    console.log("Servidor rodando na porta: 5000")
})