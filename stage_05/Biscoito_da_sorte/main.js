const home = document.querySelector('.home')
const cookie = document.querySelector('#cookie')

const lucky = document.querySelector('.lucky')
const btnTryAgain = document.querySelector('#btnTryAgain')

cookie.addEventListener('click', function() {
    toggleClass()
})

btnTryAgain.addEventListener('click', function() {
    toggleClass()
})

function toggleClass() {
    home.classList.toggle('hide')
    lucky.classList.toggle('hide')
}