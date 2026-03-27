//F
// Lê os valores
let A = prompt("Digite o valor de A:");
let B = prompt("Digite o valor de B:");

// Faz a troca usando variável auxiliar
let temp = A;
A = B;
B = temp;

// Mostra os valores trocados
alert(
  "Valores após a troca:\n" +
  "A = " + A + "\n" +
  "B = " + B
);