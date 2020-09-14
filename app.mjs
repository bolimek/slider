import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const firstSlider = {
  a11y: true,
  autoplay: {
    delay: 5000
  },
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: '#swiper-button-next1',
    prevEl: '#swiper-button-prev1'
  },
  scrollbar: {
    el: '.swiper-scrollbar1'
  },
  breakpoints: {
    1025: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  debugger: true
}

const secondSlider = {
  autoplay: true,
  effect: 'cube',
  cubeEffect: {
    shadowOffset: 200,
    shadowScale: 1.1
  },
  loop: true,
  pagination: {
    el: '#swiper-pagination2',
    clickable: true
  },
  debugger: true
}

const thirdSlider = {
  parallax: true,
  navigation: {
    nextEl: '#swiper-button-next3',
    prevEl: '#swiper-button-prev3'
  },
  debugger: true
}

const fourthSlider = {
  autoplay: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 20,
    depth: 500
    // stretch:
  },
  effect: 'coverflow',
  loopedSlides: 1,
  pagination: {
    el: '#swiper-pagination4',
    clickable: true
  },
  slidesPerView: 'auto',
  debugger: true
}

const firstSwiper = new Swiper('.swiper-container-first', firstSlider)
const secondSwiper = new Swiper('.swiper-container-second', secondSlider)
const thirdSwiper = new Swiper('.swiper-container-third', thirdSlider)
const fourthSwiper = new Swiper('.swiper-container-fourth', fourthSlider)

firstSwiper()
secondSwiper()
thirdSwiper()
fourthSwiper()
