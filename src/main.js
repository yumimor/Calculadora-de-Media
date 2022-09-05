var nome = prompt("Qual o seu nome?");
var notadoprimeirobimestre = Number(prompt("Digite a sua nota do Primeiro Bimestre"));
var notadosegundobimestre = Number(prompt("Digite a sua nota do Segundo Bimestre"));
var notadoterceirobimestre = Number(prompt("Digite a sua nota do Terceiro Bimestre"));
var notadoquartobimestre = Number(prompt("Digite a sua nota do Quarto Bimestre"));

var somadasnotas = (notadoprimeirobimestre+notadosegundobimestre+notadoterceirobimestre+notadoquartobimestre);

var notaFinal = somadasnotas/4;

var notafixada = notaFinal.toFixed(2)

console.log(notafixada);

//Impressão da aprovação/reprovação

if(notafixada >= 7)
alert(nome + " Parabéns você foi aprovado com média " + notafixada)
else
alert(nome + " Você foi reprovado com média " + notafixada)

