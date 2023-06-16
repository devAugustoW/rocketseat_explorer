// Falta ver bug do btnPlay quando clicado mais de 1 vez
// Falta ver bug dos minutos que só add ou diminui com a contagem em curso
// Falta ver bug do btnMinus quando subtrai tempo fica menor que 00:00
// Falta trocar cores dos card buttons quando clicados



import { cafeteriaSound, chuvaSound, florestaSound, lareiraSound } from "./sounds.js"

const btnTree = document.querySelector('.tree')
const btnRain = document.querySelector('.rain')
const btnShop = document.querySelector('.shop')
const btnFire = document.querySelector('.fire')

btnTree.addEventListener('click', function(){
    console.log('entrei no card tree')

    cafeteriaSound.pause()
    chuvaSound.pause()
    lareiraSound.pause()
    florestaSound.play()

})

btnRain.addEventListener('click', function(){
    console.log('entrei no card rain')

    cafeteriaSound.pause()
    lareiraSound.pause()
    florestaSound.pause()
    chuvaSound.play()

})

btnShop.addEventListener('click', function(){
    console.log('entrei no card shop')

    lareiraSound.pause()
    florestaSound.pause()
    chuvaSound.pause()
    cafeteriaSound.play()

})

btnFire.addEventListener('click', function(){
    console.log('entrei no card fire')

    cafeteriaSound.pause()
    chuvaSound.pause()
    florestaSound.pause()
    lareiraSound.play()

})





let minutesHTML = document.querySelector('.minutes')
let secondsHTML = document.querySelector('.seconds')

const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnPlus = document.querySelector('.plusMinutes')
const btnMinus = document.querySelector('.minusMinutes')

let minutes = 25
let seconds = 0
let internvalID


function upDateDisplay() {
    minutesHTML.textContent = String(minutes).padStart(2, '0')
    secondsHTML.textContent = String(seconds).padStart(2, '0')
}


function startCountDown() {

    internvalID = setInterval(() => {
        console.log('entrei')
        
        if(minutes <= 0 && seconds == 0) {
            minutesHTML.textContent = String('00')
            secondsHTML.textContent = String('00')
            return
        }

        if (seconds == 0) {
            seconds = 5
            minutes--
        } else {
            seconds--
        }

        upDateDisplay()
    }, 1000)

}

btnPlay.addEventListener('click', function(){
    startCountDown()
})

btnStop.addEventListener('click', function() {
    clearInterval(internvalID)
})

btnPlus.addEventListener('click', function(){
    minutes += 5
})

btnMinus.addEventListener('click', function(){
    if(minutes <= 0 && seconds == 0) {
        minutesHTML.textContent = String('00')
        secondsHTML.textContent = String('00')
        return
    }
    minutes -= 5
})