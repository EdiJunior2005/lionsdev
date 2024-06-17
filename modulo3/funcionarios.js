var maior = 0 
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
let novoFuncionario = {
    nome: '',
    cargo: '',
    salario:''
}
function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. Listar Funcionarios 
	3. Exibir maior salario
	4. sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listarFuncionarios()
				break
			case '3':
				maiorSalario()
				break
			case '4':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}
function listarFuncionarios(){
	console.log(funcionarios)
	exibirMenu()
}
function maiorSalario(){
	for(let i =0 ;i<funcionarios.length; i++){
	if (parseFloat(funcionarios[i].salario) > maior){
		maior = parseFloat(funcionarios[i].salario)
	}
}
	console.log('o maior salario é: ', maior)
	exibirMenu()
}
exibirMenu()