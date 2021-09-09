// Criando um programa com um objeto para armazenar dados de um programador.

const dadosDoProgramador = {
    nome: "Thaíssa",
    idade: 34,
    tecnologia: [
        {nome: "HTML", especialidade: "Front-end"},
        {nome: "Fábio", especialidade: "Full Stack"}
    ]
}

console.log(`O usuário ${dadosDoProgramador.nome} tem ${dadosDoProgramador.idade} anos e usa a tecnologia ${dadosDoProgramador.tecnologia[0].nome} com especialidade em ${dadosDoProgramador.tecnologia[0].especialidade}`)