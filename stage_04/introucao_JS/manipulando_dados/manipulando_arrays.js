// Manipualndo Arrays
/*
    Método push(), que adiciona um elemento no final do array

    Método unshift(), que adiciona um elemento no começo do array

    Método pop(), que retira um elemento do final do array

    Método shift(), que retira um elemento do começo do array

    Método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar  e retorna os valores destas posições

    Método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover

    Método indexOff(), que encontra o index do valor que recebe como argumento em um 
*/

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('nodejs')

// adicionar no começo
techs.unshift('sql')

// remover um item no fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elemntos do array
console.log(techs.slice(1, 3))
console.log(techs.slice(1, 2))
console.log(techs.slice(1,1))

/// remover 1 ou mais itens em qualquer p=osição do array
techs.splice(1, 2)
console.log(techs)
// encontrar a posição de um elemento do array
let explorer = ['react', 'nodejs', 'vue']
let index = explorer.indexOf('vue')
console.log(index);
explorer.splice(2)
console.log(explorer);


console.log("10" + 5)
console.log(Number('10') + 5)