  const burger = document.querySelector('#btn-burger')
const mobileContainer = document.querySelector('#mobile-container')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})


/*modal*/

// const btnTrigerProcess = document.querySelector('[data-triger-modal="process"]');
// const overlay = document.querySelector('.overlay')
// const body = document.querySelector('body')
// const modal = document.querySelector('.modal')
// const btnModalClose = document.querySelector('[data-modal="close"]')


// function showModal(event) {
//     overlay.classList.add('show')
//     modal.classList.add('show')
//     body.classList.add('overflow-hidden')
//     event.preventDefault() 
// }

// function closeModal(event) {
//     overlay.classList.remove('show')
//     modal.classList.remove('show')
//     body.classList.remove('overflow-hidden')
//     event.preventDefault() 
// }

// btnTrigerProcess.addEventListener('click', showModal)

// btnModalClose.addEventListener('click', closeModal)


const modalTriggers = document.querySelectorAll('[data-triger-modal]');
const modalClose = document.querySelectorAll('[data-modal-close]');
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

function showModal() {
    body.classList.add('overflow-hidden')
    overlay.classList.add('show')
}
function closeModal() {
    const openModal = document.querySelector('.modal.show');
    body.classList.remove('overflow-hidden')
    overlay.classList.remove('show')
    openModal.classList.remove('show')
}

modalTriggers.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault()

        const dataTriger = item.getAttribute('data-triger-modal')
        const modal = document.querySelector('#' + dataTriger)

        showModal()
        modal.classList.add('show')
        
    })
})

modalClose.forEach(close => {
    close.addEventListener('click', () => {
        closeModal();
        stoppVid();
    });
});



const baristaVideo = document.querySelector('video')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const stopp = document.querySelector('#stop')
const drinkOne = document.querySelector('#drink-1')
const drinkTwo = document.querySelector('#drink-2')
const drinkThree = document.querySelector('#drink-3')

function playVid() {
    baristaVideo.play();
}
function pauseVid() {
    baristaVideo.pause();
}
function stoppVid() {
    baristaVideo.pause();
    baristaVideo.currentTime = 0 ;
}
function drinkOnePlay() {
    baristaVideo.currentTime = 60 ;
}
function drinkTwoPlay() {
    baristaVideo.currentTime = 120 ;
}
function drinkThreePlay() {
    baristaVideo.currentTime = 180 ;
}
play.addEventListener('click', () => {
    playVid();
})
pause.addEventListener('click', () => {
    pauseVid();
})
stopp.addEventListener('click', () => {
    stoppVid();
})
drinkOne.addEventListener('click', () => {
    drinkOnePlay();
})
drinkTwo.addEventListener('click', () => {
    drinkTwoPlay();
})
drinkThree.addEventListener('click', () => {
    drinkThreePlay();
})



const swiperProd = new Swiper('.swiper-prod', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-products-button-next',
        prevEl: '.swiper-products-button-prev',
    },
    breakpoints: {
        907: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1026: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        1233: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
        1560: {
          slidesPerView: 4,
          spaceBetween: 48, 
        }
    }
});

// const swiperEvents = new Swiper(".swiper-events", {
//     loop: true,
//     spaceBetween: 24,
//     navigation: {
//         nextE1: '.swiper-events-button-next',
//         prevE1: '.swiper-events-button-prev'
//     },
// });

// const swiperEventsMediaQuery = window.matchMedia("(max-width: 1025px)")

// function checkedBrackpoint(swiperEventsMediaQuery) {
//     if (swiperEventsMediaQuery.matches) {
//         return;
//     } else {
//         swiperEvents.destroy();
//     }
// }

// checkedBrackpoint(swiperEventsMediaQuery);


let swiperEvents;
let swiperEventsMediaQuery = window.matchMedia("(max-width: 1024px)");


function checkedBreakpoint(swiperEventsMediaQuery) {
    if (swiperEventsMediaQuery.matches) {
        if (!swiperEvents) {
            swiperEvents = new Swiper('.swiper-events', {
                spaceBetween: 36,
                loop: true,

                navigation: {
                    nextEl: '.swiper-events-button-next',
                    prevEl: '.swiper-events-button-prev'
                }
            });
        }
    } else {
        if (swiperEvents) {
            swiperEvents.destroy(true, true);
            swiperEvents = null;
        }
    }
}

checkedBreakpoint(swiperEventsMediaQuery);

swiperEventsMediaQuery.addEventListener("change", checkedBreakpoint);