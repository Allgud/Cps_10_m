import Swiper from "swiper";

import SwiperCore, { Navigation, Pagination } from "swiper/core";

let sliders = document.querySelectorAll('.swiper-container')

const slider = () => {

  if(window.innerWidth < 768 && sliders[1].dataset.mobile === 'false'){
    SwiperCore.use([Navigation, Pagination])
    let mobileSlider = new Swiper(sliders[1], {
    slidesPerView: 1.19,
    slideClass: 'slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })
  sliders[1].dataset.mobile = 'true'
 }
 window.addEventListener('resize', () => {
  if(innerWidth < 768){
    slider()
  }else {
    sliders[1].dataset.mobile = 'false'
  }
})
}

slider()



















