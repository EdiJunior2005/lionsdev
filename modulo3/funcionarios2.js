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
	4. Editar Funcionário
    5. Remover Funcionário
    6. Sair
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
				editar()
				break
            case '5':
                remover()
                break
            case '6':
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
function editar(){
    if (funcionarios.length == 0) {
        console.log('nao ha funcionarios para serem editados! ')
        exibirMenu()
        } else {
          rl.question('Digite o número do elemento que deseja editar: ', (nome) => {
                if (nome > 0 && nome <= funcionarios.length) {
                    rl.question('Digite o novo nome: ', (nome) => {
                    rl.question('Digite o novo cargo: ', (cargo) => {
                    rl.question('Digite o novo salario: ', (salario) => {
        funcionarios[nome - 1] = {
        nome,
        cargo,
        salario
        }
        console.log('editado com sucesso!')
        exibirMenu()
        })
    })
})
        } else {
        console.log('Número inválido, tente novamente.')
        exibirMenu()
        }
    })
  }
}
function remover(){
    if (funcionarios.length == 0) {
            console.log('Nada cadastrado.')
        exibirMenu()
        } else {
            console.log('Lista de funcionarios')
            funcionarios.forEach((elemento, index) => {
                console.log(`${index + 1}. ${elemento.nome}`)
        })
        rl.question('Digite o nome do elemento que deseja remover: ', (nome) => {
            if (nome > 0 && nome <= funcionarios.length) {
                funcionarios.splice(nome - 1, 1)
                console.log('Elemento removido com sucesso!')
        exibirMenu()
        } else {
            console.log('Nome inválido, tente novamente.')
        exibirMenu()
        }
        })
    }
}
exibirMenu()