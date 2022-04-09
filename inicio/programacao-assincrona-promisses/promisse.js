function enviarEmail(copro, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;

            if (!deuErro) {
                console.log("E-mail enviado\n--------------")
                resolve({ time: 5, to: "aldo" })
            } else {

                reject("Fila de email cheia")
            }
        }, 3000)
    })
}

function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1000)
    })
}


function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Aldo Pereira")
        }, 2000)
    })
}

function pegarUsuarios() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve([
                { name: "Aldo", lang: "Java" },
                { name: "João", lang: "Flutter" },
                { name: "Gabriel", lang: "JS" }
            ])
        }, 3000)

    })
}

// var usuarios
// pegarUsuarios().then((dados) => {
//     usuarios = dados
// })

// console.log(usuarios)

async function pegarDados() {
    var usuarios = await pegarUsuarios()
    console.log(usuarios)

}

pegarDados()


// usuarios = pegarDados()


// console.log(usuarios)
// pegarId()
//     .then((id) => {
//         buscarEmailNoBanco(id)
//             .then((email) => {
//                 enviarEmail("Olá, como vai ?", email).then(() => {
//                     console.log("Email enviado para o usuário com o id: ", id)
//                 }).catch(err => {
//                     console.log(err)
//                 })
//             })
//     })