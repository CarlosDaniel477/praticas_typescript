// Define a função 'calcularSoma' que recebe dois parâmetros do tipo 'number' e retorna um valor do tipo 'number'.
function calcularSoma(numero1: number, numero2: number): number {
  // Retorna a soma dos dois números.
  return numero1 + numero2;
}

// Exemplos de como usar a função para testar:
const resultado1 = calcularSoma(5, 3);
console.log(`A soma de 5 e 3 é: ${resultado1}`); // Saída: A soma de 5 e 3 é: 8

const resultado2 = calcularSoma(10, -4);
console.log(`A soma de 10 e -4 é: ${resultado2}`); // Saída: A soma de 10 e -4 é: 6