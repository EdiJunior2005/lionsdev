var coresFavoritas = ['preto', 'azul', 'verde']
var coresEspeciais = []
var corDoUsuario
 console.log("Qual a sua cor favorita? ") 
 process.stdin.once('data', function(data){
     corDoUsuario = data.toString().trim().toLowerCase()
    percorrerArray()
    process.exit()
 })
function percorrerArray(){
    if(coresFavoritas.includes(corDoUsuario)){
        console.log(" A sua cor favorita é uma das favoritas da turma!")
    }else{
        console.log('A sua cor favorita é diferente, vamos adicionar a lista')
        coresFavoritas.push(corDoUsuario)
    }
    console.log("essa é a quantidade de cores: " + coresFavoritas.length)
}