enviarEmail = (corpo, para, callback) => {
    setTimeout(() => {

        // Lógica
        var erro = true
        if (erro) {
            callback("O envio do e-mail falhou")
        } else {
            callback()
        }
    }, 3000)

}

console.log("Inicio do envio de e-mail")

enviarEmail("Olá, seja bem Vindo!", "aldo@gmail.com", (erro) => {

    if (erro === undefined) {
        console.log("TUDO OK")
    } else {
        console.log("Ocorreu um erro", erro)
    }

})


// console.log("Seu e-mail foi enviado deve chegar em minutos")
// console.log("Tudo certo!")