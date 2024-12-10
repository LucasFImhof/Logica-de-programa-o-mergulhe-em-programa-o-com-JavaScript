alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`Valor do número secreto: ${numeroSecreto}`);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto é ${numeroSecreto}! Você acertou com ${tentativas} ${palavraTentativas}`); //Tamplate string permite utilizar texto junto com variáveis