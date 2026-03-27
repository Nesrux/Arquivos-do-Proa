// Lê os valores
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

// Calcula o quadrado da soma (A + B + C)²
let resultado = Math.pow(A + B + C, 2);

// Mostra o resultado
alert("Quadrado da soma: " + resultado);