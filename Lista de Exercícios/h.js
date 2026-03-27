// Lê os valores
let comprimento = parseFloat(prompt("Digite o comprimento da caixa:"));
let largura = parseFloat(prompt("Digite a largura da caixa:"));
let altura = parseFloat(prompt("Digite a altura da caixa:"));

// Calcula o volume
let volume = comprimento * largura * altura;

// Mostra o resultado
alert("Volume da caixa retangular: " + volume);