var idade
var nome 
var mes 
const mesAtual = 5
const anoAtual = 2024
console.log("Insira seu nome: ")

process.stdin.once('data', function(data){
    nome = data.toString().trim()
console.log("digite  sua idade: ")

process.stdin.once('data', function(data){
    idade = parseInt(data.toString().trim())
console.log("Insira o mes do seu aniversario: ")

process.stdin.once('data', function(data){
    mes = data.toString().trim()
    anoNascimento(nome,idade)
    process.exit()
    })
  })
})
function anoNascimento(nome, idade){
    let ano
    if(mes <= mesAtual){
        ano = anoAtual - idade 
        console.log(`Ola ${nome}, voce nasceu em ${ano}!`)
    }else if (mes > 13){
        ano =(anoAtual - idade) - 1 
        console.log(`Ola ${nome}, voce nasceu em ${ano}!`)
    }else{
        console.log("insira um mes valido (entre 1 e 12)!")
    }
}