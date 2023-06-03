// VARIÁVEIS
// Obter o elemento HTML que exibe os minutos
let inputMinutes = document.querySelector('.minutes')
// Obter o elemento HTML que exibe os segundos
let inputSeconds = document.querySelector('.seconds')

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.btnSet')

const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')


let minutes

// EVENTOS E FUNÇÕES


function countdown() {
    setTimeout(function() {
        

    }, 1000) 
}


btnPlay.addEventListener('click', function() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')

    countdown() 
    
})

btnPause.addEventListener('click', function() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
})

btnStop.addEventListener('click', function() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')
})

btnSet.addEventListener('click', function() {
    let minutes = Number(prompt('Quantos minutos?'))
    inputMinutes.innerHTML = minutes


    console.log('Minutes: '+ minutes)
    console.log('Type of minutes: '+ typeof(minutes))
})

btnSoundOff.addEventListener('click', function() {
    btnSoundOff.classList.toggle('hide')
    btnSoundOn.classList.toggle('hide')
})

btnSoundOn.addEventListener('click', function() {
    btnSoundOn.classList.toggle('hide')
    btnSoundOff.classList.toggle('hide')
})