// Define a função 'verificarSinal' que recebe um parâmetro do tipo 'number' e retorna uma string ('Positivo', 'Negativo' ou 'Zero').
function verificarSinal(numero) {
    if (numero > 0) {
        return "Positivo";
    }
    else if (numero < 0) {
        return "Negativo";
    }
    else {
        return "Zero";
    }
}
// Exemplos de como usar a função para testar:
var resultado1 = verificarSinal(10);
console.log("O n\u00FAmero 10 \u00E9: ".concat(resultado1)); // Saída: O número 10 é: Positivo
var resultado2 = verificarSinal(-5);
console.log("O n\u00FAmero -5 \u00E9: ".concat(resultado2)); // Saída: O número -5 é: Negativo
var resultado3 = verificarSinal(0);
console.log("O n\u00FAmero 0 \u00E9: ".concat(resultado3)); // Saída: O número 0 é: Zero
