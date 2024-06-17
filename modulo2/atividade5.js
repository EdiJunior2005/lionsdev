var notas = [5,3,7,5,9,8,5,7,9,8]
var maior = 0
var menor = 99
var soma = 0
for(i=0;i<notas.length;i++){
   soma += notas[i] 
}

for (let i = 0; i < notas.length;i++ ){
    if(notas[i]  > maior){
        maior = notas[i]
    }else if(notas[i] < menor){
        menor = notas[i]
    }else{
        notas[i] = notas[i]
    }
 }
notas.push(10)
for(i=0;i<notas.length;i++){
    if(notas[i] >= 8){
        console.log("Voce passou de ano com " + notas[i])
    }else{
        console.log("Voce reprovou de ano com " + notas[i])
}}
console.log("o maior numero é: " + maior)
console.log("o menor numero é: " + menor)
console.log("notas: " + notas)
console.log("as media é: " + soma/notas.length)
