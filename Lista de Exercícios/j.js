// Lê a cotação do dólar e a quantidade de dólares
let cotacao = parseFloat(prompt("Digite a cotação do dólar:"));
let dolares = parseFloat(prompt("Digite a quantidade de dólares:"));

// Converte para reais
let reais = cotacao * dolares;

// Mostra o resultado
alert("Valor em reais: R$ " + reais);