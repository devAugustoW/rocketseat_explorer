// Manipulando Strings e Arryas

//Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

// Separe um textoque contém espaços, em um novo array onde cada texto é uma posição do array.
let phrase = 'Eu quero viver o amor!'
console.log(phrase)
let myArray = phrase.split(' ')
console.log(myArray)

// Transforme o array em texto e onde eram espaços coloque _
let phraseWithUnderScore = myArray.join('_')
console.log(phraseWithUnderScore)

document.querySelector()