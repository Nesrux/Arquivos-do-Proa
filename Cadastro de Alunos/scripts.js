// 1º Passo: Criar array de alunos com 3 objetos
const alunos = [
    {
        nome: "João Silva",
        idade: 20,
        curso: "Análise e Desenvolvimento de Sistemas",
        nota: 8.5
    },
    {
        nome: "Maria Santos",
        idade: 19,
        curso: "Gestão da Tecnologia da Informação",
        nota: 6.5
    },
    {
        nome: "Pedro Oliveira",
        idade: 21,
        curso: "Análise e Desenvolvimento de Sistemas",
        nota: 7.0
    }
];

// 2º Passo: Exibir informações dos alunos no console
console.log("=== INFORMAÇÕES DOS ALUNOS ===\n");

alunos.forEach((aluno, index) => {
    console.log(`Aluno ${index + 1}:`);
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Curso: ${aluno.curso}`);
    console.log(`Nota: ${aluno.nota}`);
    console.log("---");
});

// 3º Passo: Verificar aprovados e reprovados
console.log("\n=== RESULTADO - APROVADOS E REPROVADOS ===\n");

const aprovados = [];
const reprovados = [];

alunos.forEach(aluno => {
    if (aluno.nota >= 7) {
        aprovados.push(aluno.nome);
    } else {
        reprovados.push(aluno.nome);
    }
});

console.log("APROVADOS:");
if (aprovados.length > 0) {
    aprovados.forEach(nome => {
        console.log(`✓ ${nome}`);
    });
} else {
    console.log("Nenhum aluno aprovado.");
}

console.log("\nREPROVADOS:");
if (reprovados.length > 0) {
    reprovados.forEach(nome => {
        console.log(`✗ ${nome}`);
    });
} else {
    console.log("Nenhum aluno reprovado.");
}

// Exibir também em alert (opcional)
let mensagem = "=== CADASTRO DE ALUNOS ===\n\n";

alunos.forEach(aluno => {
    mensagem += `Nome: ${aluno.nome}\nCurso: ${aluno.curso}\nNota: ${aluno.nota}\n\n`;
});

mensagem += "\n=== RESULTADO ===\n";
mensagem += `Aprovados (nota ≥ 7): ${aprovados.join(", ") || "Nenhum"}\n`;
mensagem += `Reprovados (nota < 7): ${reprovados.join(", ") || "Nenhum"}`;

alert(mensagem);
