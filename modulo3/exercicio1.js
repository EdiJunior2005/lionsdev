console.log('Boas vindas!')
var cont = 1 
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let numero = Math.floor(Math.random()*100)+1
function jogo(){
    
    rl.question('Digite um numero: ', (resposta) => {
    switch(true){
    case resposta == numero:
        console.log("acertou em " + cont + " jogadas")
        rl.close()
        break
    case resposta != numero:
        if(cont != 7){
        switch(true){

            case numero > resposta && resposta < 101:
                console.log("ERROUUUUUU tenta um numero maior: ")
                cont++
            break
            case numero < resposta && resposta < 101:
                console.log("ERROUUUUUU tenta um numero menor: ")
                cont++
            break
            default:
                console.log('numero invalido digite numeros de 0 a 100')
        }
        jogo()
       }else{
            console.log('acabou as tentativas!')
            console.log(' o numero era: ' + numero)
            rl.close()
       }
      }
    })
}
jogo()