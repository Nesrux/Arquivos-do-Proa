// Lê os valores
let A = parseInt(prompt("Digite o valor de A:"));
let B = parseInt(prompt("Digite o valor de B:"));
let C = parseInt(prompt("Digite o valor de C:"));
let D = parseInt(prompt("Digite o valor de D:"));

// Soma
let somaAB = A + B;
let somaAC = A + C;
let somaAD = A + D;
let somaBC = B + C;
let somaBD = B + D;
let somaCD = C + D;

// Multiplicação
let multAB = A * B;
let multAC = A * C;
let multAD = A * D;
let multBC = B * C;
let multBD = B * D;
let multCD = C * D;

// Mostra os resultados
alert(
  "Resultados das somas:\n" +
  "A + B = " + somaAB + "\n" +
  "A + C = " + somaAC + "\n" +
  "A + D = " + somaAD + "\n" +
  "B + C = " + somaBC + "\n" +
  "B + D = " + somaBD + "\n" +
  "C + D = " + somaCD + "\n\n" +

  "Resultados das multiplicações:\n" +
  "A * B = " + multAB + "\n" +
  "A * C = " + multAC + "\n" +
  "A * D = " + multAD + "\n" +
  "B * C = " + multBC + "\n" +
  "B * D = " + multBD + "\n" +
  "C * D = " + multCD
);