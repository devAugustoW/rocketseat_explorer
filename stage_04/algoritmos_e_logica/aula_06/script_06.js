// Jogo da adivinhação

/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando. Está entre 0 e 10"

  Crie uma lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

// Usar o método Math.random() para gerar números aleatórios

// Usar o método Math.round() para arredondar para inteiro

//let guessNumber = Number(prompt('Adivinhe o número que estou pensando. Está entre 0 e 10.'))


let guessNumber = prompt('Advinhe o número que estou pensando. Está entre 0 e 10')
const number = Math.round(Math.random() * 10)
let tentativas = 0

while (guessNumber != number) {
  guessNumber = prompt('Errou! Tente novamente')
  tentativas++

}
alert(`Parabéns, você adivinhou o número em ${tentativas} tentativas.`)