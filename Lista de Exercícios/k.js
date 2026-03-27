// Lê a cotação do dólar e a quantidade em reais
let cotacao = parseFloat(prompt("Digite a cotação do dólar:"));
let reais = parseFloat(prompt("Digite a quantidade em reais:"));

// Converte para dólares
let dolares = reais / cotacao;

// Mostra o resultado
alert("Valor em dólares: $ " + dolares);