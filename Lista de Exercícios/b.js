// B) Lê a temperatura em Fahrenheit

// Lê a temperatura em Fahrenheit
let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));

// Converte para Celsius
let celsius = (fahrenheit - 32) * (5 / 9);

// Mostra o resultado
alert("Temperatura em Celsius: " + celsius);