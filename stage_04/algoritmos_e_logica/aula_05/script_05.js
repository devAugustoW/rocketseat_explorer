// Criando lista de compras

/*
  Capture 5 items para compor a lista de um supermercado.
  
  Após capturar os 5 items, imprima-os, separando por vírgula.
*/

let lista = []

for (let i=0; i<5; i++){
    lista[i] = prompt(`Digite o ${i+1}o item da lista`)
}

alert(lista)