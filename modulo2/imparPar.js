var numero

console.log("Insira seu numero: ")

process.stdin.once('data', function(data){
    numero = parseFloat(data.toString().trim())

    calculo(numero)
    process.exit()
})
function calculo(numero){
    if(numero %2 == 1){
        console.log(`o numero ${numero} é impar`)
    }else if(numero == 0){
        console.log(`o numero 0 é neutro!`)
    }else{
        console.log(`o numero ${numero} é par`)
    }
}