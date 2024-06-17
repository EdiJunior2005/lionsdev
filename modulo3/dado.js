var dado

console.log("digite o numero de lados do dado: ")
process.stdin.once('data',function(data){
    dado = parseInt(data.toString().trim())
    var numero = Math.floor(Math.random()*dado)+1
    console.log(numero)
    process.exit()
})
