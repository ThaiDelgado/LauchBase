// Calculo do IMC

var nome = "Thaíssa";
var peso = 62;
var altura = 1.57;

IMC = peso / (altura * altura);

if(IMC >= 30){
    console.log("Thaíssa você está acima do peso")
}
if(IMC <= 29.9){
    console.log("Thaíssa você não está acima do peso")
}