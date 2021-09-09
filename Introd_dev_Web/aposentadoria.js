//Calcular aposentadoria

const nome = "Helena"
const sexo = "F"
const idade = 65;
const contribuicao = 25;

const calculoContribucao = idade + contribuicao

const mulherPodeAposentar = sexo == "F" && contribuicao >= 30 && calculoContribucao >= 85;
const homemPodeAposentar = sexo == "M" && contribuicao >= 35 && calculoContribuicao >= 95;

if(mulherPodeAposentar || homemPodeAposentar){
    console.log(`${nome}, você pode se aposentar!`)
}else{
    console.log(`${nome}, você ainda não pode se aposentar!`)
}


