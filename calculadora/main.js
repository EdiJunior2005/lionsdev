const prompt = require('prompt-sync')({sigint: true})

var num1,num2,operador

var caracteres = ['+','-','*','x','/','%']
validacao()
function validacao(){
    num1 = parseFloat(prompt("Digite o primeiro numero: "))
    if(isNaN(num1)){
        console.log("Digite apenas numeros!!")
        validacao()
    }else{
        validacao2()
    }
}
function validacao2(){
    num2 = parseFloat(prompt("Digite o segundo numero: "))
    if(isNaN(num2)){
        console.log("Digite apenas numeros!!")
        validacao2()
    }else{
        validacao3()
    }
}
function validacao3(){
        operador = prompt("Digite o operador: ")
        if(!caracteres.includes(operador)){
            console.log("Digite operadores validos!!")
            validacao3()
        }else{
            calcular()
    }
}
function calcular(){
    switch(operador){
    case '+':
        console.log(`resultado: ${num1 + num2}`);
    break
    case '-':
        console.log(`resultado: ${num1-num2}`);
    break
    case '*' || 'x':
        console.log(`resultado: ${num1*num2}`);
    break
    case '/':
        console.log(`resultado:  ${num1/num2}`);
    break
    case '%':
        console.log(`resultado: ${(num1*num2)/100}`)
    break
    }
}