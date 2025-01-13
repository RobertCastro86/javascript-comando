//const numeroSenha = prompt("Digite sua senha")

//alert("Hello World" + numeroSenha +"!")

//let nome = "Robert"
//let numero = 12.65;

/*
const a = 3
const b = "3"

console.log(a == b); -- Sempre tirar o console do texto.

let primeiroValor = 400
let segundoValor = 1

console.log(primeiroValor + segundoValor);

console.log(primeiroValor - segundoValor);

console.log(primeiroValor / segundoValor);

console.log(primeiroValor * segundoValor);

console.log(primeiroValor % segundoValor);
*/


//Laços de repetição:
/*for(inicializador; condicao; incremento){
        declaracao
    }        

    for(let i = 1; i < 12; i++){
        console.log(i)
    }
//while(condicao){
//<bloco de condicao>
//}
/*
let a = 10
let b = 25

while(a < b){
    console.log('incrementando a variavel a' + a)
    a++;
}
//do{
   bolco de condicao
}while(condicao)


var i = 1 
do{
  console.log('entrou' + i);
  i++
}while(i <= 5);
*/

//-----------------------------------------------

//condicionais
/*let nomeImovel = "Casa Terrea"

if(nomeImovel === "Casa Terrea"){
    console.log("Não é uma casa terrea")
}else if(nomeImovel === "Casa Sobrado"){
    console.log("é uma casa sobrado")
}else if(nomeImovel === "Galpão Comercial"){
    console.log("é um galpão comercial")
}else(nomeImovel === "é outro tipo de imóvel")
    console.log("é outro tipo de imóvel")
*/

//----------------------------------

//switch(parametro){
//   casa valor1:
//      <bloco de declaracao>
//   casa valor2:
//      <bloco de declaracao>
//      break
//}

/*let nomeImovel = "Casa Terrea"

switch(nomeImovel){
    case"Casa Sobrado":
         console.log("é uma casa sobrado")
         break
    case"Casa Terrea":
         console.log("é uma casa terrea")
         break
    case"Galpão":
         console.log("é um outro tipo de imóvel")
         break     
}*/

//------------------------------------------------


//Funcoes

/*function somar(numero1, numero2) {
    return numero1 + numero2 
}

//console.log(numero1 + numero2)
//soma(1, 3)

let resultadoDaSoma = function(numero1, numero2){
    return numero1 + numero2
}
console.log(resultadoDaSoma(20, 40))*/

//-------------------------------------------------


//Exercicios JS basico

//Ex 2
/*const boletoPago = false

if(boletoPago){
    alert("O boleto está pago");
    
}else(boletoPago === false)
    alert("O boleto não está pago")
    
//Ex 3
const seHospedar = confirm("Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?");

console.log()

if(seHospedar){
    alert("Ótimo! Nós temos as melhores camas de toda a região!")
}else{
}   

alert("Que pena! Você parecia ser uma pessoa mais legal")*/

//Ex 5
/*for (let i = 0; i <= 10; i++) {
    console.log('O dobro do número '+ i + 'é' + i * 2)
}*/

//------------------------------------------------------

//Hosting

/*console.log(pais)
const pais = USA*/

//-----------------------------------------------------

//Arrow functions

/*const incentivarQuester = nomeQuester => console.log('Parabéns' + nomeQuester + ', Você chegou ao JS intermediário')

incentivarQuester('Robert CAstro')
*/

//--------------------------------------------------------

//Higher order functions
//
//


//---------------------------------------------------

//Arrays

/*let filmes = ['Vingadores', 'Sky', 'Pica pau']

let filmesTamanho = filmes.length

//console.log(filmes)

//for(let i = 0; i < filmesTamanho; i++){
  //  console.log('Fruta: ' + frutas[i])
//}

//console.log(filmes[0])

//filmes.forEach(function(item, indice, array){
  //  console.log('Frutas: ' + item)
//})

//metodos:
//Push/Pop/Shift/Unshift/indexOf

//metodo push: adiciona um novo elemento no final do array
//metodo pop: remove o ultimo elemento do array
//metodo shift: remove o primeiro elemento do array
//metodo unshift: adiciona um elemento no começo do array 
//metodo indexOf: procura o índice de um item no array

filmes.shift()

console.log(filmes)*/


