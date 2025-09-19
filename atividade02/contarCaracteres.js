// Define a função 'contarCaracteres' que recebe um parâmetro do tipo 'string' e retorna um valor do tipo 'number'.
function contarCaracteres(texto) {
    // A propriedade .length retorna o número de caracteres da string.
    return texto.length;
}
// Exemplos de como usar a função para testar:
var frase = "Olá, mundo!";
var numeroDeCaracteres = contarCaracteres(frase);
console.log("A frase \"".concat(frase, "\" tem ").concat(numeroDeCaracteres, " caracteres."));
// Saída: A frase "Olá, mundo!" tem 11 caracteres.
var palavra = "TypeScript";
var numeroDeCaracteres2 = contarCaracteres(palavra);
console.log("A palavra \"".concat(palavra, "\" tem ").concat(numeroDeCaracteres2, " caracteres."));
// Saída: A palavra "TypeScript" tem 10 caracteres.
