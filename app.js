let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemTexto() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

  mensagemTexto();


function verificarChute() {
  let chute = document.querySelector('input').value;
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}.`;

  if(chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if(chute > numeroSecreto) {
      exibirTextoNaTela('p','O número secreto é menor.');
    } else {
      exibirTextoNaTela('p','O número secreto é maior.');
    }
    tentativas++
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadesDeElementosNaLista = listaDeNumerosSorteados.lenght;

   if(quantidadesDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  let numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  limparCampo();
  mensagemTexto();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}









