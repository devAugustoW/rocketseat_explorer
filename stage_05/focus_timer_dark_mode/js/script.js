import { audioForest, audioRain, audioShop, audioFire } from "./sounds.js"

const btnForest = document.querySelector('#btnForest')
const btnRain = document.querySelector('#btnRain')
const btnShop = document.querySelector('#btnShop')
const btnFire = document.querySelector('#btnFire')

const checkbox1 = document.querySelector('#checkbox1');
const checkbox2 = document.querySelector('#checkbox2');
const checkbox3 = document.querySelector('#checkbox3');
const checkbox4 = document.querySelector('#checkbox4');

const btnplay = document.querySelector('#btnPlay')
const btnStop = document.querySelector('#btnStop')
const btnIncrease = document.querySelector('#btnIncrease')
const btnDecrease = document.querySelector('#btnDecrease')

const minutesHTML = document.querySelector('#minutes')
const secondsHTML = document.querySelector('#seconds')

const html = document.querySelector('html')
const theme = document.querySelector('.theme')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')

const volume_control_Forest = document.querySelector('#volume-control-Forest')
const volume_control_Rain = document.querySelector('#volume-control-Rain')
const volume_control_Shop = document.querySelector('#volume-control-Shop')
const volume_control_Fire = document.querySelector('#volume-control-Fire')

let minutes = Number(minutesHTML.textContent)
let seconds = Number(secondsHTML.textContent)

let intervalID   
let clickCount = 0
let isActived = false

theme.addEventListener('click', () => {
    light.classList.toggle('hide')
    dark.classList.toggle('hide')
    html.classList.toggle('dark-mode')
})


function showDisplay() {
    secondsHTML.textContent = String(seconds).padStart(2, '0')
    minutesHTML.textContent = String(minutes).padStart(2, '0')
}

function countDown() {
    intervalID = setInterval(() => {
        if(minutes == 0 && seconds == 0) {
            clearInterval(intervalID)
            audioForest.play()
            return
        }

        if (seconds == 0) {
            seconds = 59
            minutes--
        } else {
            seconds--
        }
        
        showDisplay()

    }, 1000);
}

function resetDisplay(){
    minutes = 25
    seconds = 0

    minutesHTML.textContent = String(minutes).padStart(2, '0')
    secondsHTML.textContent = String(seconds).padStart(2, '0')
}


btnplay.addEventListener('click', () => {
    clickCount = 0

    // check if countDown is runnig already
    if (!isActived) {
        countDown()
        isActived = true
    } else {
        return
    }    

})

btnStop.addEventListener('click', () => {
    clickCount++ 
    isActived = false
    
    // Reset display with a second click
    if (clickCount % 2 == 0 && clickCount != 0) {
        resetDisplay()
    }

    clearInterval(intervalID)
})

btnIncrease.addEventListener('click', () => {
   minutes += 5
   minutesHTML.textContent = String(minutes).padStart(2, '0')
   secondsHTML.textContent = String(seconds).padStart(2, '0')
})

btnDecrease.addEventListener('click', () => {
    if (minutes <= 5){
        minutes = 0
        minutesHTML.textContent = String(minutes).padStart(2, '0')
    } else {
        minutes -= 5
        minutesHTML.textContent = String(minutes).padStart(2, '0')
    }
})


volume_control_Forest.addEventListener('input', function(e) {
    const volume = e.currentTarget.value
    audioForest.volume = volume / 100
})

volume_control_Rain.addEventListener('input', function(e) {
    const volume = e.currentTarget.value
    audioRain.volume = volume / 100
})

volume_control_Shop.addEventListener('input', function(e) {
    const volume = e.currentTarget.value
    audioShop.volume = volume / 100
})

volume_control_Fire.addEventListener('input', function(e) {
    const volume = e.currentTarget.value
    audioFire.volume = volume / 100
})


checkbox1.addEventListener('click', () => {
    if (checkbox1.checked) {
        // Checkbox is checked
        checkbox2.checked = false
        checkbox3.checked = false
        checkbox4.checked = false

        btnForest.classList.add('cardSelected')
        btnRain.classList.remove('cardSelected')
        btnShop.classList.remove('cardSelected')
        btnFire.classList.remove('cardSelected')

        audioForest.play()
        audioRain.pause()
        audioShop.pause()
        audioFire.pause()

        audioForest.volume = 0.5;
        volume_control_Forest.value = 50;
        audioForest.volume = volume_control_Forest.value / 100;

        audioRain.volume = 0.0;
        volume_control_Rain.value = 0;
        audioRain.volume = volume_control_Rain.value / 100;

        audioShop.volume = 0.0;
        volume_control_Shop.value = 0;
        audioShop.volume = volume_control_Shop.value / 100;

        audioFire.volume = 0.0;
        volume_control_Fire.value = 0;
        audioFire.volume = volume_control_Fire.value / 100;

    } else { 
        // Checkbox is not checked
        btnForest.classList.remove('cardSelected')
        audioForest.pause()

        audioForest.volume = 0.0;
        volume_control_Forest.value = 0;
        audioForest.volume = volume_control_Forest.value / 100;
    }
});

checkbox2.addEventListener('click', () => {
    if (checkbox2.checked) {
        // Checkbox is checked
        checkbox1.checked = false
        checkbox3.checked = false
        checkbox4.checked = false

        btnRain.classList.add('cardSelected')
        btnForest.classList.remove('cardSelected')
        btnShop.classList.remove('cardSelected')
        btnFire.classList.remove('cardSelected')

        audioRain.play()
        audioForest.pause()
        audioShop.pause()
        audioFire.pause()

        audioRain.volume = 0.5;
        volume_control_Rain.value = 50;
        audioRain.volume = volume_control_Rain.value / 100;

        audioForest.volume = 0.0;
        volume_control_Forest.value = 0;
        audioForest.volume = volume_control_Forest.value / 100;

        audioShop.volume = 0.0;
        volume_control_Shop.value = 0;
        audioShop.volume = volume_control_Shop.value / 100;

        audioFire.volume = 0.0;
        volume_control_Fire.value = 0;
        audioFire.volume = volume_control_Fire.value / 100;

    } else {
        // Checkbox is not checked
        btnRain.classList.remove('cardSelected')
        audioRain.pause()

        audioRain.volume = 0.0;
        volume_control_Rain.value = 0;
        audioRain.volume = volume_control_Rain.value / 100;
    }
});

checkbox3.addEventListener('click', () => {
    if (checkbox3.checked) {
        // Checkbox is checked
        checkbox1.checked = false
        checkbox2.checked = false
        checkbox4.checked = false

        btnShop.classList.add('cardSelected')
        btnForest.classList.remove('cardSelected')
        btnRain.classList.remove('cardSelected')
        btnFire.classList.remove('cardSelected')

        audioShop.play()
        audioForest.pause()
        audioRain.pause()
        audioFire.pause()

        audioForest.volume = 0.0;
        volume_control_Forest.value = 0;
        audioForest.volume = volume_control_Forest.value / 100;

        audioShop.volume = 0.5;
        volume_control_Shop.value = 50;
        audioShop.volume = volume_control_Shop.value / 100;

        audioRain.volume = 0.0;
        volume_control_Rain.value = 0;
        audioRain.volume = volume_control_Rain.value / 100;

        audioFire.volume = 0.0;
        volume_control_Fire.value = 0;
        audioFire.volume = volume_control_Fire.value / 100;

    } else {
        // Checkbox is not checked
        btnShop.classList.remove('cardSelected')
        audioShop.pause()

        audioShop.volume = 0.0;
        volume_control_Shop.value = 0;
        audioShop.volume = volume_control_Shop.value / 100;
    }
});

checkbox4.addEventListener('click', () => {
    if (checkbox4.checked) {
        // Checkbox is checked
        checkbox1.checked = false
        checkbox2.checked = false
        checkbox3.checked = false

        btnFire.classList.add('cardSelected')
        btnForest.classList.remove('cardSelected')
        btnRain.classList.remove('cardSelected')
        btnShop.classList.remove('cardSelected') 
        
        audioFire.play()
        audioShop.pause()
        audioForest.pause()
        audioRain.pause()

        audioFire.volume = 0.5;
        volume_control_Fire.value = 50;
        audioFire.volume = volume_control_Fire.value / 100;

        audioForest.volume = 0.0;
        volume_control_Forest.value = 0;
        audioForest.volume = volume_control_Forest.value / 100;
        
        audioShop.volume = 0.0;
        volume_control_Shop.value = 0;
        audioShop.volume = volume_control_Shop.value / 100;

        audioRain.volume = 0.0;
        volume_control_Rain.value = 0;
        audioRain.volume = volume_control_Rain.value / 100;

    } else {
        // Checkbox is not checked
        btnFire.classList.remove('cardSelected')
        audioFire.pause()

        audioFire.volume = 0.0;
        volume_control_Fire.value = 0;
        audioFire.volume = volume_control_Forest.value / 100;
    }
});