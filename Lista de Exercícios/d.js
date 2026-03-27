// D)
// Lê o tempo e a velocidade média
let tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas):"));
let velocidade = parseFloat(prompt("Digite a velocidade média (km/h):"));

// Calcula a distância
let distancia = tempo * velocidade;

// Calcula os litros usados (12 km por litro)
let litros_usados = distancia / 12;

// Mostra os resultados
alert(
  "Velocidade média: " + velocidade + " km/h\n" +
  "Tempo gasto: " + tempo + " horas\n" +
  "Distância percorrida: " + distancia + " km\n" +
  "Litros utilizados: " + litros_usados + " litros"
);
