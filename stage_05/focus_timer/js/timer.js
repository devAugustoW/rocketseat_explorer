
 export function Timer() {


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


    return {
        callCountdown
    }

}

export { Timer }

