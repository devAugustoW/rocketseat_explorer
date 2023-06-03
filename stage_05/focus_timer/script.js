// VARIÁVEIS
// Obter o elemento HTML que exibe os minutos e segundos
let minutesHTML = document.querySelector('.minutes')
let secondsHTML = document.querySelector('.seconds')

let btnPlay = document.querySelector('.play')
let btnPause = document.querySelector('.pause')
let btnStop = document.querySelector('.stop')
let btnSet = document.querySelector('.btnSet')
let btnSoundOn = document.querySelector('.sound-on')
let btnSoundOff = document.querySelector('.sound-off')

let seconds
let minutes
let internvalID


function callCountdown() {

    //FUNÇÃO EXECUTADA A CADA 1000ms
    internvalID = setInterval(() => {

        //TRANSFOMRAR EM NÚMERO
        minutes = Number(minutes)
        seconds = Number(seconds)

        //MANIPULAR OS NÚMEROS
        if (minutes == 0 && seconds == 0){
            return
        } 
        
        if (seconds == 0) {
            minutes--
            seconds = 11
        } else {
            seconds--
        }

        //TRANSFORMAR EM STRING E IMPRIMIR OS "NÚMEROS"
        upDateDisplay()
        
     }, 1000)
}

function upDateDisplay() {
    minutesHTML.textContent = String(minutes).padStart(2, '0')
    secondsHTML.textContent = String(seconds).padStart(2, '0')
}

function resetDisplay() {
    minutesHTML.textContent = String('00')
    secondsHTML.textContent = String('00')
}

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
    btnStop.classList.add('hide')
    btnPause.classList.add('hide')
    btnSet.classList.remove('hide')
    btnPlay.classList.remove('hide')

    clearInterval(internvalID)

    resetDisplay()
})


btnSet.addEventListener('click', function() {
    let newMinutes = prompt('Digite alguma coisa')
    if (!newMinutes) {
        
        return
    }

    if (minutes === null) {
        resetDisplay()
    }

    seconds = 0
    console.log(typeof(seconds))
    
    upDateDisplay()
})  








