// Função Soma
const soma = (num1, num2) => num1 + num2;

// Função Subtrai
const subtrai = (num1, num2) => num1 - num2;

// Função Multiplica
const multiplica = (num1, num2) => num1 * num2;

// Função Divide
const divide = (num1, num2) => num1 / num2;

// Função MostraResultado
function mostraResultado(num1, num2) {
  console.log(`Soma entre ${num1} e ${num2}:`, soma(num1, num2));
  console.log(`Subtrai entre ${num1} e ${num2}:`, subtrai(num1, num2));
  console.log(`Multiplica entre ${num1} e ${num2}:`, multiplica(num1, num2));
  console.log(`Divide entre ${num1} e ${num2}:`, divide(num1, num2));
}

// Exemplo de uso
mostraResultado(10, 5);
