//JavaScript Intermediário - continuacao 

/*Splice e slice
O método slice copia uma parte determinada de um array e retorna aquela parte copiada como um novo array. Ele não altera o array original.

Já o método splice altera os arrays, pois adiciona ou remove elementos dele.*/


//slice:

//let carros = ['Linea', 'Tipo', 'Saveiro', 'Palio']

/*let carrosVendidos = carros.slice(0)

console.log(carrosVendidos)*/

//splice:

/*let carrosAlugados = carros.splice(0, 3, 'Silverado', 'Ferrari')

console.log(carros)

console.log(carrosAlugados)*/


//-------------------------------------------------

//Objetos:

/*let imoveis = {
  tipo: 'sobrado',
  area: 250,
  disponibilidade: true
}

console.log(imoveis.disponibilidade)*/

//---------------------------------------------------

//Métodos: adicionando funções a objetos

/*let usuario = {
  nome: 'Robert',
  excluir: function(){
    console.log('O usuario' + this.nome + 'foi excluido')
  }
}

usuario.excluir()*/

//----------------------------------------------------

//this:

//console.log(this)
//console.log(window === this)

//console.log(filmes[0])

//------------------------------------------------------

//Exercícios JavaScript intermediário 
// Exercício 2

//filmes.forEach(function(item, indice, array){
  //  console.log('Frutas: ' + item)

//Multiplicando itens de um array usando o ForEach:

//Descrição da tarefa:  Você deve criar um array com os seguintes números: 65, 44, 12 e 4. Após a criação, deverá utilizar o laço de repetição forEach para percorrer os itens e realizar a multiplicação de cada um por 10. Pode apresentar o resultado de cada multiplicação usando o console.log().


/*let numeros = [65, 44, 12, 4]

numeros.forEach(function(item, indice, array){
    console.log('O resultado da multiplicacao de ' + item + ' por 10 é: ' + item * 10)});*/


// Exercício 3

//Verificar se um elemento possui uma classe e alterar sua cor

//Descrição da tarefa: Inicialmente, temos um quadrado com o fundo preto em que o objetivo desse exercício é que ao clicar nele, seja feita uma verificação se ele possui a classe “azul”. Se ele não possuir, devemos adicionar essa classe usando o método add do classList para adicionar essa classe ao elemento, lembrando que essa classe deve ser criada previamente no CSS. Após adicionada a classe, ele ficará com a cor azul, só que ao clicar novamente, deverá retornar a cor original, removendo a classe azul, com a utilização do método remove. 

/*let quadrado = document.querySelector('.quadrado')

quadrado.addEventListener('click', ()=> {
  const classeAzulExiste = quadrado.classList.contains('azul');

  if(classeAzulExiste){
    quadrado.classList.remove('azul');
  } else {
    quadrado.classList.add('azul');
  }
});*/


//Exercicio 4

//Validando o preenchimento das informações de um input.

//Descrição da tarefa: Nesse exercício, temos um formulário com um input e um botão. O objetivo é que ao clicar no botão, seja feita uma verificação se o input foi preenchido. Se ele estiver vazio, deve ser exibido um alerta com a mensagem “Por favor, preencha o campo de nome”. Caso contrário, deve ser exibido um alerta com a mensagem “Obrigado por preencher o campo de nome”.

/*const inputText = document.querySelectorAll('.input-nome');

inputText.forEach(input => {

  input.addEventListener('change', () =>{
    if(input.value !== ''){
      alert('Por favor, preencha o campo de nome');
      input.classList.add('campo-preenchido')
    } else {
    alert('Obrigado por preencher o campo de nome');
    input.classList.remove('campo-preenchido')
    }
  });
});*/

/*  Objetivo do exercício: Ao preencher alguma informação nos inputs, deve ser verificado se estão vazios ou não. 
													 Caso tiver algum valor, será adicionada a borda verde. Se não tiver, é removida a borda.

        Passo 1 - Pegar todos os inputs que tenham a mesma classe.

        Passo 2 - Dar um jeito de percorrer cada input.

        Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
			
				Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.

				Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.

				Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
*/


// Passo 1 - Pegar todos os inputs que tenham a mesma classe com o querySelectorAll.
/*const inputText = document.querySelectorAll(".input-text");

// Passo 2 - Dar um jeito de percorrer cada input - vamos utilizar o laço de repetição forEach para percorrer cada input.
inputText.forEach(input => {
		// Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
    input.addEventListener('change', () => {
				// Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.
        if (input.value !== "") {
						// Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.
            input.classList.add("campo-preenchido")
        } else {
						// Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
            input.classList.remove("campo-preenchido")
        }
    });
});

*/

//Exercício 5

