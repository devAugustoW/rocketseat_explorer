const randonNumber = Math.round(Math.random() * 10)
let tentativas = 1

function teste() {
    

    let guessNumber = document.querySelector('#inputNumber')

    if (Number(guessNumber) == randonNumber) {

    }

    tentativas++
    console.log(tentativas)
}