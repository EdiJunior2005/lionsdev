var livros = []
var opcao
var repetir = true
var nomeLivro
var aux = -1;
var livro = {
    nome: "",
    autor: "",
    ano: ""
}

function mostrarMenu() {
    console.log("\n1. PARA ADICIONAR UM LIVRO\n2. PARA LISTAR OS LIVROS\n3. PARA REMOVER UM LIVRO\n4. PARA SAIR")
    process.stdin.once('data', function(data) {
        opcao = parseInt(data.toString().trim())
        processamento();
    });
}

function processamento() {
    switch (opcao) {
        case 1:
    console.log("1. ADICIONAR UM LIVRO");
    console.log("Digite o nome do livro: ")
    process.stdin.once('data', function(data) {
        livro.nome = data.toString().trim();
        console.log("Digite o autor: ")
        process.stdin.once('data', function(data) {
            livro.autor = data.toString().trim();
            console.log("Digite o ano de lançamento: ")
            process.stdin.once('data', function(data) {
                livro.ano = parseInt(data.toString().trim());
                livros.push({ nome: livro.nome, autor: livro.autor, ano: livro.ano });
                console.log("Livro adicionado com sucesso!");
                mostrarMenu();
            })
        })
    })
    break;
        case 2:
            console.log("2. LISTAR OS LIVROS")
            console.log(livros)
            mostrarMenu()
            break
        case 3:
    console.log("3. REMOVER UM LIVRO");
    console.log("Lista de livros:");
    console.log(livros);
    console.log("Digite o nome do livro que deseja remover: ");
    process.stdin.once('data', function(data) {
        nomeLivro = data.toString().trim();
        for (var i = 0; i < livros.length; i++) {
            if (livros[i].nome === nomeLivro) {
                aux = i;
                break;
            }
        }
        if (aux !== -1) {
            livros.splice(aux, 1);
            console.log("Livro removido com sucesso!");
        } else {
            console.log("Livro não encontrado na lista!");
        }
        mostrarMenu();
    });
    break;
        case 4:
            console.log("4. SAIR")
            repetir = false
            process.exit()
            break
        default:
            console.log("Opção inválida!")
            mostrarMenu()
    }
}
function iniciarPrograma() {
    if (repetir) {
        mostrarMenu()
    }
}

iniciarPrograma()
