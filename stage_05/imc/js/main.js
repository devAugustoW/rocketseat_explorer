import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC } from './util.js'


const inputWeight = document.querySelector('#input-weight')
const inputHeight = document.querySelector('#input-height')
const btnCalcular = document.querySelector('#btnCalcular')


btnCalcular.addEventListener('click' , function() {
    let weight = inputWeight.value
    let height = inputHeight.value

    if (isNaN(weight) || isNaN(height) || weight == '' || height == ''){

        AlertError.appear()

    } else {
        
        let result = IMC(weight, height)

        displayResult(result)

        erase()
    }
})

function displayResult(result) {
    let message = 'O seu IMC é '+ result
    Modal.message.innerHTML = message
    Modal.hideOff()
}

function erase() {
    inputWeight.value= ''
    inputHeight.value = ''
}

// Evento que faz o screen error sumir somente com a digitação no INPUT
inputWeight.oninput = () => AlertError.dissapear()
inputHeight.oninput = () => AlertError.dissapear()
