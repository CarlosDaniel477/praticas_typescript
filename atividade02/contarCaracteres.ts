// Define a função 'contarCaracteres' que recebe um parâmetro do tipo 'string' e retorna um valor do tipo 'number'.
function contarCaracteres(texto: string): number {
  // A propriedade .length retorna o número de caracteres da string.
  return texto.length;
}

// Exemplos de como usar a função para testar:
const frase = "Olá, mundo!";
const numeroDeCaracteres = contarCaracteres(frase);
console.log(`A frase "${frase}" tem ${numeroDeCaracteres} caracteres.`);
// Saída: A frase "Olá, mundo!" tem 11 caracteres.

const palavra = "TypeScript";
const numeroDeCaracteres2 = contarCaracteres(palavra);
console.log(`A palavra "${palavra}" tem ${numeroDeCaracteres2} caracteres.`);
// Saída: A palavra "TypeScript" tem 10 caracteres.