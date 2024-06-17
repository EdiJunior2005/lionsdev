var opcoes = ['pedra','papel','tesoura']
var escolhaComputador = ''
var escolhaUsuario = ''
var resultado = ''

console.log("Pedra, papel ou tesoura? ")
process.stdin.once('data', function(data){
    escolhaUsuario = data.toString().trim().toLowerCase()
    jogo()
    process.exit()
})
function jogo(){
    escolhaComputador = opcoes[Math.floor(Math.random(opcoes[0])*2+1)]
    console.log(escolhaComputador)
    switch(escolhaUsuario){
        case (escolhaUsuario == escolhaComputador):
            resultado = 'Empate'
            console.log(resultado)
        break
        case escolhaComputador == 'pedra' && escolhaUsuario == 'papel' || escolhaComputador == 'papel' && escolhaUsuario == 'tesoura' || escolhaComputador == 'tesoura' && escolhaUsuario == 'pedra':
            resultado = 'Voce ganhou'
            console.log(resultado)
        break
        case escolhaComputador != opcoes && escolhaUsuario != opcoes:
            console.log('erro')
        break
        default:
            resultado = 'Voce perdeu'
        console.log(resultado)
    }
}
