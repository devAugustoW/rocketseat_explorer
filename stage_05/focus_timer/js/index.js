//default import
import resetControls from "./controls.js"

// named import
import { Timer } from "./timer.js"



let minutesHTML = document.querySelector('.minutes')
let secondsHTML = document.querySelector('.seconds')

let btnPlay = document.querySelector('.play')
let btnPause = document.querySelector('.pause')
let btnStop = document.querySelector('.stop')
let btnSet = document.querySelector('.btnSet')

let seconds
let minutes
let internvalID






btnSet.addEventListener('click', function() {
    minutes = prompt('Digite alguma coisa') || 0
    minutesHTML.textContent = String(minutes).padStart(2, '0')
    
    seconds = 0
}) 

btnPlay.addEventListener('click', function() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')

    callCountdown();
})

btnPause.addEventListener('click', function() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')

    clearInterval(internvalID)
})

btnStop.addEventListener('click', function() {
    clearInterval(internvalID)
    resetDisplay()
    resetControls()
})