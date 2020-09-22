const toRules = document.querySelectorAll('.toRules')
const toRegister = document.querySelectorAll('.toRegister')

// тригер на открытие попапа "Спасибо" 
const toThanks = document.querySelectorAll('.toThanks')

const rulesModal = document.querySelector('#rulesModal')
const registerModal = document.querySelector('#registerModal')

// попап "Спасибо"
const thanksModal = document.querySelector('#thanksModal')



const closeModal = document.querySelectorAll('.modal-close')

// Закрытие попапа "Спасибо"
const closeThanks = thanksModal.querySelector('.close')

if (closeModal)
  closeModal.forEach(item => {
    item.addEventListener('click', function () {
      if (rulesModal)
        rulesModal.classList.remove('active')
      if (registerModal)
        registerModal.classList.remove('active')

      document.querySelector('body').style.overflowY = 'auto'

    })
  })
if (toRules && rulesModal)
  toRules.forEach(item => {
    item.addEventListener('click', function () {
      rulesModal.classList.add('active')
      document.querySelector('body').style.overflowY = 'hidden'
    })
  })

if (toRegister && registerModal)
  toRegister.forEach(item => {
    item.addEventListener('click', function () {
      registerModal.classList.add('active')
      document.querySelector('body').style.overflowY = 'hidden'
    })
  })


// открытие попапа "Спасибо"
if (toThanks && thanksModal)
  toThanks.forEach(item => {
    item.addEventListener('click', function () {
      thanksModal.classList.add('active')
      document.querySelector('body').style.overflowY = 'hidden'
    })
  })

if (thanksModal && closeThanks)
  closeThanks.addEventListener('click', function () {
    thanksModal.classList.remove('active')

    document.querySelector('body').style.overflowY = 'auto'

  })

//  Слайдеры
if (document.querySelector('.program-slider')) {

  var programSlider = new Swiper('.program-slider', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 50,

    // Navigation arrows
    navigation: {
      nextEl: '.program-slider__next',
      prevEl: '.program-slider__prev',
    },


  })
  const programSlides = document.querySelectorAll('.program-slide')
  const programPrev = document.querySelector('.program-slider__prev')
  const programNext = document.querySelector('.program-slider__next')

  programSlider.on('slideChange', function () {
    if (programSlider.activeIndex == 0)
      programPrev.classList.remove('clickable')
    else
      programPrev.classList.add('clickable')

    if (programSlider.activeIndex == (programSlides.length - 1))
      programNext.classList.remove('clickable')
    else
      programNext.classList.add('clickable')
  });
}


function setBoostSlider() {
  // if (window.innerWidth <= 768)
  //   const emptySlide = document.querySelectorAll('.boost-slide.empty')

  var boostSlider = new Swiper('.boost-slider', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    slidesPerView: 'auto',
    centeredSlides: true,

    navigation: {
      nextEl: '.boost-slider__next',
      prevEl: '.boost-slider__prev',
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 3,
        freeMode: false,
        centeredSlides: false,


      },
      425: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,


      },


    }


  })

  if (window.innerWidth > 768 || window.innerWidth <= 425)
    boostSlider.slideTo(1)

  const boostSlides = document.querySelectorAll('.boost-slide')
  const boostPrev = document.querySelector('.boost-slider__prev')
  const boostNext = document.querySelector('.boost-slider__next')

  boostSlides.forEach(item => {
    item.classList.remove('current')
  })
  boostSlides[boostSlider.activeIndex + 1].classList.add('current')

  boostSlider.on('slideChange', function () {
    if (boostSlider.activeIndex == 0)
      boostPrev.classList.remove('clickable')
    else
      boostPrev.classList.add('clickable')

    if (boostSlider.activeIndex == 3)
      boostNext.classList.remove('clickable')
    else
      boostNext.classList.add('clickable')

    boostSlides.forEach(item => {
      item.classList.remove('current')
    })
    boostSlides[boostSlider.activeIndex + 1].classList.add('current')

  });


  boostSlides[boostSlider.activeIndex + 1];
}

if (window.innerWidth <= 1024)
  setBoostSlider()