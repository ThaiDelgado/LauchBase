//Criando um programa que armazene dados de uma empresa

const empresa = {      //Objeto empresa
    nome: "Rocketseat",
    cor: "roxo",
    foco: "programação",
    endereco: {  //criando um objeto intercalado
        rua: "Rua Guilherme Gembola",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada na rua ${empresa.endereco.rua}, ${empresa.endereco.numero}`)  //Template de string