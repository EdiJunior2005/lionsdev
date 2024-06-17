
var numero 

console.log("Digite um numero: ")

process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    tabuada()
    process.exit()
})
function tabuada(){
for(let i = 0;i<=100;i++){
    let resultado = numero * i
    console.log(numero + "x" + i + "=" + resultado)
  }
}