var numero1
var numero2
var operador 

console.log("Digite o primeiro numero: ")
process.stdin.once('data', function(data){
    numero1 = parseFloat(data.toString().trim())
console.log("Digite o segundo numero: ")
process.stdin.once('data', function(data){
    numero2 = parseFloat(data.toString().trim())
console.log("Digite o operador: ")
process.stdin.once('data', function(data){
    operador = data.toString().trim()
    console.log(calculadora(numero1,numero2,operador))
    calculadora(numero1,numero2,operador)
    process.exit()
    })
  })
})


function calculadora(numero1,numero2,operador){
    switch (operador){
        case '+': 
        resultado = numero1 + numero2
        break
        case '-':
            resultado = numero1 - numero2
            break
        case '/':
            resultado = numero1 / numero2
            break
        case '*':
            resultado = numero1 * numero2
            break
        default:
             resultado = 'operador invalido'
    }
    return resultado
}
