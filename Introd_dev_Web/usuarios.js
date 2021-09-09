// Criando um programa que armazene um array de usuários e imprimindo as tecnologias que cada usuário utiliza.

const usuarios = [  // Array de objetos
{
    nome: "Thaíssa",
    tecnologias: ["HTML", "CSS"] // Objeto com array
},
{
    nome: "Caio",
    tecnologias: ["Java", "PHP"]
},
{
    nome:"José",
    tecnologias: ["Git", "Node.js"]
}

]


for(let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} usa as tecnologias ${usuarios[i].tecnologias}`)
}