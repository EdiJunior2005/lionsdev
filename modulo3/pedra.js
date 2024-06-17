var acao = ''
var numero

console.log("Pedra, papel ou tesoura: ")

process.stdin.once('data', function(data) {
    acao = data.toString().trim().toLowerCase()
    switch (acao) {
        case 'pedra':
            numero = 1
            jogo()
            break
        case 'papel':
            numero = 2
            jogo()
            break
        case 'tesoura':
            numero = 3
            jogo()
            break
        default:
            console.log('Erro: escolha inválida.')
            process.exit()
    }
})

function jogo() {
    var jogada = Math.floor(Math.random() * 3) + 1
    switch (jogada) {
        case numero:
            console.log("Empate")
            break
        case 1:
            switch (numero) {
                case 2:
                    console.log("Você ganhou")
                    break
                case 3:
                    console.log("Você perdeu")
                    break
            }
            break
        case 2:
            switch (numero) {
                case 1:
                    console.log("Você perdeu")
                    break
                case 3:
                    console.log("Você ganhou")
                    break
            }
            break
        case 3:
            switch (numero) {
                case 1:
                    console.log("Você ganhou")
                    break
                case 2:
                    console.log("Você perdeu")
                    break
            }
            break
        default:
            console.log("Erro: escolha inválida.")
    }
    switch(jogada){
        case 1:
            jogada = 'pedra'
            break
        case 2:
            jogada = 'papel'
            break
        case 3:
            jogada = 'tesoura'
    }
    console.log('Jogada do computador:', jogada)
    process.exit()
}
