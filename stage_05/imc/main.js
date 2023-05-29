const inputWeight = document.querySelector('#input-weight')
const inputHeight = document.querySelector('#input-height')
const btnCalcular = document.querySelector('#btnCalcular')
const screenError = document.querySelector('.screen-error')


btnCalcular.addEventListener('click', function(){

    let valueWeight = inputWeight.value
    valueWeight = parseFloat(valueWeight)
    console.log('Valor de valueWeight: '+ valueWeight)

    let valueHeight = inputHeight.value
    valueHeight = parseFloat(valueHeight)
    console.log('Valor de valueHeight: '+ valueHeight)
    
    
    if (isNaN(valueWeight) || isNaN(valueHeight)){

        screenError.classList.add('open')
        
    } else {

        screenError.classList.remove('open')
        Modal.hideOff()

        const result = IMC(valueWeight, valueHeight)

        Modal.finalFrase = 'O seu IMC é '+ result
        Modal.finalFrase.innerHTML = finalFrase 
    }
})


function IMC(weight, height) {
    return (valueWeight / (valueHeight**2)).toFixed(2)
}


Modal.btnClose.addEventListener('click', function() {
    Modal.hideOn()

    inputWeight.value = ''
    inputWeight.focus()

    inputHeight.value = ''
})


const Modal = 
{
    container: document.querySelector('.modal-container'),
    finalFrase: document.querySelector('#finalFrase'),
    btnClose: document.querySelector('#btnClose'),


    hideOn() 
    {
        modalContainer.classList.on('hide')
    },

    hideOff()
    {
        modalContainer.classList.remove('hide')
    }
}