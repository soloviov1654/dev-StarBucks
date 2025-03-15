  const burger = document.querySelector('#btn-burger')
const mobileContainer = document.querySelector('#mobile-container')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})


/*modal*/

const btnTrigerProcess = document.querySelector('[data-triger-modal="process"]');
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const btnModalClose = document.querySelector('[data-modal="close"]')

console.log(btnModalClose);


function showModal(event) {
    overlay.classList.add('show')
    modal.classList.add('show')
    body.classList.add('overflow-hidden')
    event.preventDefault() 
}

function closeModal(event) {
    overlay.classList.remove('show')
    modal.classList.remove('show')
    body.classList.remove('overflow-hidden')
    event.preventDefault() 
}

btnTrigerProcess.addEventListener('click', showModal)

btnModalClose.addEventListener('click', closeModal)