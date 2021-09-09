// criar um programa que calcula a media
//das turmas de alunos e envia
//mensagem do calculo da media

const turmaA = [     // array de objetos

    {
        nome : "Thaissa",
        nota : 9.8
    },
    {
        nome : "fabio",
        nota : 10.0
    },
    {
        nome : "Heloisa",
        nota : 6.0
    }
]

const turmaB =[     // array de objetos

    {
        nome : "João",
        nota : 5.0
    },
    {
        nome : "Aline",
        nota : 10.0
    },
    {
        aluno3 : "Julia",
        nota : 2.0
    }
]

function calculaMedia(alunos){  
    let soma = 0

    for(let i = 0; i < alunos.length; i++){
        soma += alunos[i].nota
    }

    return soma / alunos.length
}

const mediaA = calculaMedia(turmaA) // executando a função
const mediaB = calculaMedia(turmaB)

function enviaMensagem(media, turma){
    if(media > 5){
        console.log(`Parabéns! sua média da ${turma} foi ${media}.`)
    }else{
        console.log(`sua média foi ${media}`)
    }
}

const mensagemA = enviaMensagem(mediaA, "turmaA")
const mensagemB = enviaMensagem(mediaB, "turmaB")

function marcarReprovado(alunos){
    for(let aluno of alunos){
        aluno.reprovado = false

        if(aluno.nota < 5){
            aluno.reprovado = true
        }
    }

    console.table(alunos)
}

function enviarMensagemReprovado(aluno){
    if(aluno.reprovado){
        console.log(`O ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos){
    for(let i = 0; i < alunos.length; i++){
        marcarReprovado(alunos)
        enviarMensagemReprovado(alunos)

    }
}

alunoReprovado(turmaA)
alunoReprovado(turmaB)