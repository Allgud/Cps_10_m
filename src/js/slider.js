import Swiper from "swiper";

import SwiperCore, { Navigation, Pagination } from "swiper/core";

const type = document.querySelector('.swiper-container')

const slider = () => {
  if(window.innerWidth < 768 && type.dataset.mobile === 'false'){
    SwiperCore.use([Navigation, Pagination])
    let mobileSlider = new Swiper(type, {
    slidesPerView: 1.19,
    slideClass: 'types__slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })
  type.dataset.mobile = 'true'
 }
 window.addEventListener('resize', () => {
  if(innerWidth < 768){
    slider()
  }else {
    type.dataset.mobile = 'false'
  }
})
}

slider()



















