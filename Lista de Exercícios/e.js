//e
// Lê os valores
let valor = parseFloat(prompt("Digite o valor da prestação:"));
let taxa = parseFloat(prompt("Digite a taxa de juros (%):"));
let tempo = parseFloat(prompt("Digite o tempo de atraso:"));

// Calcula a prestação em atraso
let prestacao = valor + (valor * taxa / 100) * tempo;

// Mostra o resultado
alert("Valor da prestação em atraso: " + prestacao);
