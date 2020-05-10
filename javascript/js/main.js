/* arquivo javascript
// comando alert

//alert("Mensagem de Alerta");

var variavel = 100, outra_variavel = 500, soma = 0;
soma = variavel + outra_variavel;

alert("Soma = "+variavel+" + "+outra_variavel+" = "+soma);

console.log(soma + variavel + outra_variavel);
*/

//var frase = "O Brasil ganhou a copa do mundo em 1970";

// funçao replace

// mudar a palavra Brasil por Jairzinho

//var nova_frase = frase.replace("Brasil","Jairzinho");

//alert(nova_frase);

//var  upper = "to upper case"
/*
upper = upper.toUpperCase();
alert(upper);

var lower = "TO LOWER CASE"
lower = lower.toLowerCase();
alert(lower);
*/

// Listas e Dicionarios

/*
var lista = ["maca","pera","banana","limao"];
console.log(lista);
lista.push("abacate","uva");
console.log(lista);
console.log("tamanho da lista eh = "+lista.length);
console.log(lista.toString());
console.log(lista.join("   ****   "));

var dic = {nome:"jose", idade:"30",cor:"parda"};
console.log(dic);
console.log("acessando elementos do dicionario");
console.log(dic.nome);
console.log(dic.idade);
console.log(dic.cor);

*/

// Condicionais

/*
var idade = prompt("Qual a sua idade?");

if (idade >= 18)
{
alert("Maior de idade");
}
else{
alert("Menor de idade");
}

// Repetiç~oes while e for

var contador = 0,soma = 0;

while (contador <= 100){

soma = soma + contador;

console.log("Soma + contador = "+soma);

contador ++;

}

// Repeticao for simples

for(let i= 0; i<=100; i++){
console.log(i);
}

// Datas 

var d = new Date();
alert(d);
// pegar o mes ele pega janeiro como sendo zero entao somar 1 para o valor correto

alert("Mes "+(d.getMonth()+ 1));
// getDay() da o valor de 0 a 6 onde zero e domingo

alert("Dia da semana "+d.getDay());
alert("Hora "+d.getHours());
alert("Dia "+d.getDate());

*/

// Funç~oes

function maiorZero(parametro){
return (parametro > 0);
}


function botao(){
//return alert("Obrigado por clicar");
document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
// abre em outra janela
window.open("https://www.sistemasembarcados.org");
// altera conteudo ao clicar
document.getElementById("redirecionamento").innerHTML = "<b> Abrindo o melhor site do Mundo</b>";
// abre na mesma janela
window.location.href="https://www.sistemasembarcados.org";
}

