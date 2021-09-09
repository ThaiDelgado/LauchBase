// Busca por tecnologia

const usuarios = [
    {
        nome: "Thaíssa",
        tecnologias: ["HTML", "CSS"] 
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

function verificaSeUsuarioUsaCss(usuario){
    // javascript moderno
    // if (usuario.tecnologias.includes("PHP")) return true;
    
    for(let i = 0; i < usuario.tecnologias.length; i++) {
        if(usuario.tecnologias[i] == "CSS"){
           return true
        }
    }

    return false
}

// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

for(let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCss = verificaSeUsuarioUsaCss(usuarios[i])

    if(usuarioTrabalhaComCss){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
    