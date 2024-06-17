var somaPares = 0
var somaImpares = 0
var totalPares = 0
var totalImpares = 0
var mediaPares
var mediaImpares

    for(let i = 0;i <=999;i++){
        if(i %2 == 0){
            somaPares += i
            totalPares++
        }else{
            somaImpares += i
            totalImpares++
        }
    }
    mediaImpares = somaImpares/totalImpares
    mediaPares = somaPares/totalPares
    if(mediaImpares>mediaPares){
        console.log("a media dos impares é maior que a dos pares: "+ mediaImpares)
    }else if(mediaImpares<mediaPares){
        console.log("a media do pares é maior que a dos impares:" + mediaPares)
    }else{
        console.log("as medias sao iguais: "+ mediaImpares + mediaPares)
    }

