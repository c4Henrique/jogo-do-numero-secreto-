let listadeNumerosSorteados = [];
let numerolimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensageminicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    responsiveVoice.speak(texto, "Barzilian portuguese femele", {rate:1.2});
}

exibirMensageminicial();
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', '0 número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        linparoCampo();
    }
}

function gerarNumeroAleatorio() {
    let NumerosEscolhidos = parseInt(Math.random() * numerolimite + 1);
    let quantidadeDeElementosNaLista = listadeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == 9) {
        listadeNumerosSorteados = [];

    }


    if (listadeNumerosSorteados.includes(NumerosEscolhidos)) {
        return gerarNumeroAleatorio();

    } else {
        listadeNumerosSorteados.push
        console.log(listadeNumerosSorteados)
        return NumerosEscolhidos;
    }
}
function linparoCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    linparoCampo();
    tentativas = 1;
    exibirMensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}









