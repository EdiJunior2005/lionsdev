let gostaDeCafe

console.log("voce gosta de cafe?")

process.stdin.once('data', function(data){
    gostaDeCafe = data.toString().trim().toLowerCase()

    resposta()
    process.exit()
})
function resposta(){
    if(gostaDeCafe == 'sim'){
        console.log("parabens voce gosta de cafe")
    }if(gostaDeCafe == 'nao'){
        console.log("que pena que voce nao gosta de cafe")
    }else if((gostaDeCafe != 'sim') && (gostaDeCafe != 'nao')){
        console.log("sua resposta deve ser sim ou nao, escreva de novo!")
        
    }
}