//Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let guessNumber = document.querySelector('#inputNumber')
const btnStartAgain = document.querySelector('.btnStartAgain')


let randonNumber = Math.round(Math.random() * 10)
let tentativas = 0

console.log('Randon Number: '+ randonNumber)


function btnTry() {

    tentativas++
    
    if (Number(guessNumber.value) == randonNumber) {
        
        const finalFrase = document.querySelector('#finalFrase')

        toggleScreen()

        finalFrase.innerText = 'Acertou em '+ tentativas+ ' tentativa(s)!'

    }else {

        document.querySelector('#inputNumber').value = ''
        guessNumber.focus()
    }
}  


btnStartAgain.addEventListener('click', starAgain)

function starAgain() {

    tentativas = 0
    randonNumber = Math.round(Math.random() * 10)

    toggleScreen()

    document.querySelector('#inputNumber').value = ''
    guessNumber.focus()

    console.log('Randon Number: '+ randonNumber)
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}