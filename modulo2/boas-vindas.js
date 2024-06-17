var nome = ""
console.log("Digite seu nome: ")

process.stdin.on('data', function(data) {
   
    let nome = data.toString()

    let saudacao = "ola " + nome

    console.log(saudacao)

    process.exit()
})