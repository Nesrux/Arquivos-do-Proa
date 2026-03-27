//c) Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
// Lê o raio e a altura da lata
let raio = parseFloat(prompt("Digite o raio da lata:"));
let altura = parseFloat(prompt("Digite a altura da lata:"));

// Calcula o volume (π * r² * h)
let volume = Math.PI * Math.pow(raio, 2) * altura;

// Mostra o resultado
alert("Volume da lata de óleo: " + volume);