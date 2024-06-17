var numeros = [27,10,3,0,20,5,6,3]
var par = []
var impar = []
var atual = 0

numeros.push(18)
for(let i = 0; i < numeros.length;i++){
    if(numeros[i] % 2 == 0){
        par.push(numeros[i])
    }else{
        impar.push(numeros[i])
    }
}
console.log('numeros pares: ' + par + ' e numeros impares: ' + impar)