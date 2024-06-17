let nome 
let idade
let aniversario
const anoAtual = 2024

console.log("qual é o seu nome?")
process.stdin.once('data', function(data){
    nome = data.toString().trim()
console.log("qual é a sua idade?")
process.stdin.once('data', function(data){
    idade = parseInt(data.toString().trim())
console.log("ja fez aniversario esse ano?")
process.stdin.once('data', function(data){
    aniversario = data.toString().trim()
    
    processamento()
    process.exit()
})
})
})
function processamento(){
    let ano = anoAtual - idade
    let salva
    if(aniversario == 'sim'){
        salva = true
    }else{
    salva = false
} if(salva == true){
    console.log('voce nasceu em '+ ano)
}else{
    console.log(`voce nasceu em ${ano -1}`)
}
}