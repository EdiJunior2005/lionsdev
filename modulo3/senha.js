var senha = ''
var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
var tamanhoSenha

console.log("Qual o tamanho da sua senha? ")
process.stdin.once('data', function(data){
    tamanhoSenha = parseInt(data.toString().trim())
    
    for(let i = 0; i < tamanhoSenha; i++){
        var numeroAleatorio = Math.floor(Math.random() * caracteres.length)
        senha += caracteres.charAt(numeroAleatorio)
    }
    
    console.log(senha)
    process.exit()
})
