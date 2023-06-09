let minutesHTML = document.querySelector('.minutes')
let secondsHTML = document.querySelector('.seconds')

let btnPlay = document.querySelector('.play')
let btnPause = document.querySelector('.pause')
let btnStop = document.querySelector('.stop')
let btnSet = document.querySelector('.btnSet')

let seconds
let minutes
let internvalID

function callCountdown() {

    //FUNÇÃO EXECUTADA A CADA 1000ms
    internvalID = setInterval(() => {

        minutes = Number(minutes)
        seconds = Number(seconds)

        if (minutes == 0 && seconds == 0){
            resetControls()
            return
        } 
        
        if (seconds == 0) {
            seconds = 4
            minutes--
        } else {
            seconds--
        }

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

function resetControls() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')
}

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

btnStop.addEventListener('click', function() {
    resetControls()
    clearInterval(internvalID)
    resetDisplay()
})

btnPause.addEventListener('click', function() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')

    clearInterval(internvalID)
})