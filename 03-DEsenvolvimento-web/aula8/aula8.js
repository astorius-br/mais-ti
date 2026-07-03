// Seleciona o primeiro botão e o título
const meuBotao1 = document.getElementById('botao1');
const titulo = document.getElementById('tituloPrincipal');

// 1. DECLARAÇÃO DE FUNÇÃO
function mudarTexto() {
  // Modifica o conteúdo de texto do H1
  if (titulo.textContent === 'Texto alterado com sucesso!') {
    titulo.textContent = 'Manipulando o DOM';
  } // add a posteriori
  else {titulo.textContent = 'Texto alterado com sucesso!';}
}

// Associa a função ao evento de clique do botão
meuBotao1.addEventListener('click', mudarTexto);

// Seleciona o segundo botão
const meuBotao2 = document.getElementById('botao2');

// 2. EXPRESSÃO DE FUNÇÃO
const mudarCor = function() {
  // Modifica o estilo CSS do H1
  titulo.style.color = 'blue';
};

// Associa a função ao evento de clique
meuBotao2.addEventListener('click', mudarCor);

// Seleciona o terceiro botão
const meuBotao3 = document.getElementById('botao3');

// 3. ARROW FUNCTION
const esconderTitulo = () => {
  // Modifica o estilo para esconder o elemento
  if (titulo.style.display == 'none') {
    titulo.style.display = 'block';
  } // add a posteriori
  else {titulo.style.display = 'none';;}
};

// Associa a função ao evento de clique
meuBotao3.addEventListener('click', esconderTitulo);

//// acima estão 3 formas diferentes de declarar uma função em JavaScript. Pesquisar se há alguma diferença relevante ou só de versão do ESR6.
// Outros botões adicionados a posteriori
const meuBotao4 = document.getElementById('botao4');
meubotao4.addEventListener('click', ); // loc2 = nome da função a ser executada

const meuBotao5 = document.getElementById('botao5');
meuBotao5.addEventListener('click', alert('É isso aí!'));

// retorna toda a configuração para a inicial, sem alterações
const meuBotao6 = document.getElementById('botao6');

function padrao(){
    titulo.textContent = 'Manipulando o DOM';
    titulo.style.color = 'black';
    titulo.style.display = 'block';
};
meuBotao6.addEventListener('click', padrao);



