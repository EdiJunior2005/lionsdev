var numero
console.log("Digite um numero: ")
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
console.log(teste())
process.exit()
})
function teste(){
    if(numero % 5 == 0){
        return 'o numero ' + numero + ' é divisivel por 5'
    }else{
        return 'o numero ' + numero + ' nao é divisivel por 5'
    }
}