/*
  Projeto: Painel de Estudos
  Atividade de JavaScript ES6
*/

// 1. Conexão com o JavaScript
console.log("Meu primeiro script foi executado!");

// 2. Instruções e comentários
console.log("Bem-vindo ao Painel de Estudos");
console.log("Vamos acompanhar as notas");
console.log(10 + 5);

// 3. Variáveis com const e let
const nomeAluno = "Adelano";
const curso = "Desenvolvimento Web";
let quantidadeTarefas = 3;

console.log("Quantidade inicial de tarefas:", quantidadeTarefas);

quantidadeTarefas = 4;

console.log("Nova quantidade de tarefas:", quantidadeTarefas);

// 4. var como contexto histórico
var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log(exemploAntigo);

// 5. Tipos de dados
const titulo = "Painel de Estudos"; // string
const quantidade = 4; // number
const painelAtivo = true; // boolean
const observacao = null; // null

console.log("Título:", titulo);
console.log("Quantidade:", quantidade);
console.log("Painel ativo:", painelAtivo);
console.log("Observação:", observacao);

// 6. Operadores
const nota1 = 7;
const nota2 = 8;

const soma = nota1 + nota2;
const diferenca = nota2 - nota1;
const multiplicacao = nota1 * 2;
const divisao = nota2 / 2;
const media = (nota1 + nota2) / 2;

console.log("Soma:", soma);
console.log("Subtração:", diferenca);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Média:", media);
console.log("Média maior ou igual a 6:", media >= 6);
console.log("Notas são iguais:", nota1 === nota2);

// 7. Strings e template literals
const mensagem = `O aluno ${nomeAluno} está no curso de ${curso} e possui ${quantidadeTarefas} tarefas.`;

console.log(mensagem);

// 8. Decisão com if e else
if (media >= 6) {
    console.log("Aprovado! Continue estudando.");
} else {
    console.log("Precisa revisar o conteúdo.");
}

// 9 e 10. Desafio integrador
const precoMaterial = 25;
let quantidadeMateriais = 2;

const total = precoMaterial * quantidadeMateriais;
const desconto = 5;
const totalComDesconto = total - desconto;

console.log("Total sem desconto:", total);
console.log("Total com desconto:", totalComDesconto);

const resumoPedido = `Pedido de ${quantidadeMateriais} materiais de estudo. Total: R$ ${totalComDesconto.toFixed(2)}.`;

console.log(resumoPedido);

if (totalComDesconto >= 40) {
    console.log("Você ganhou frete grátis!");
} else {
    console.log("O frete será pago.");
}
