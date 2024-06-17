let prova1 
let prova2
let media = []
console.log("Digite sua primeira nota: ")
process.stdin.once('data', function(data){
    prova1 = parseFloat(data.toString().trim())
console.log("Digite sua segunda nota: ")
process.stdin.once('data', function(data){
    prova2 = parseFloat(data.toString().trim())
    media.push(prova1)
    media.push(prova2)
calculo()
process.exit()
})
})

function calculo(){
    let result = (media[0] + media[1])/2
    console.log(`sua media é ${result}!`)
}
