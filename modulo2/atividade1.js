var nota
console.log("Digite sua nota: ")
process.stdin.once('data', function(data){
    nota = parseInt(data.toString().trim())
console.log(classificacao())
process.exit()
})
function classificacao(){
    switch(true){
        case (nota >= 90 && nota <=100):
            return 'sua nota é A, voce foi aprovado'
        case (nota >= 80 && nota <=89):
            return 'sua nota é B, voce foi aprovado'
        case (nota >= 70 && nota <=79):
            return 'sua nota é C, voce foi aprovado'
        case (nota >= 60 && nota <=69):
            return 'sua nota é D, voce esta reprovado'
        case (nota >= 0 && nota <=59):
            return 'sua nota é F, voce esta reprovado'
        default:
            return 'Nota Invalida'
    }
}