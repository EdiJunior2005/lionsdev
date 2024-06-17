var nota1
var nota2

console.log("Digite a primeira nota: ")

process.stdin.once('data', function(data){
    nota1 = parseInt(data.toString().trim())
    
    console.log("Digite a segunda nota: ")

    process.stdin.once('data', function(data){
        nota2 = parseInt(data.toString().trim())
    calculo_media()

    process.exit()
    })
})
function calculo_media(){
    let media = (nota1 + nota2)/2
    if(media < 7){
    console.log("Que pena que voce ficou para recuperação " + media)
    }else{
        console.log("Parabens, voce passou de ano com "+media)
    }
}