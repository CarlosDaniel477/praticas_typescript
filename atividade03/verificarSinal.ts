// Define a função 'verificarSinal' que recebe um parâmetro do tipo 'number' e retorna uma string ('Positivo', 'Negativo' ou 'Zero').
function verificarSinal(numero: number): string {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}

// Exemplos de como usar a função para testar:
const resultado1 = verificarSinal(10);
console.log(`O número 10 é: ${resultado1}`); // Saída: O número 10 é: Positivo

const resultado2 = verificarSinal(-5);
console.log(`O número -5 é: ${resultado2}`); // Saída: O número -5 é: Negativo

const resultado3 = verificarSinal(0);
console.log(`O número 0 é: ${resultado3}`); // Saída: O número 0 é: Zero