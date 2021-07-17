import Swiper from "swiper";

import SwiperCore, { Navigation, Pagination } from "swiper/core";

let sliders = document.querySelectorAll('.swiper-container')

const slider = () => {
  sliders.forEach( item => {
    if(window.innerWidth < 768 && item.dataset.mobile === 'false'){
      SwiperCore.use([Navigation, Pagination])
      let mobileSlider = new Swiper(item, {
      slidesPerView: 1.19,
      slideClass: 'slide',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    })
    item.dataset.mobile = 'true'
   }
   window.addEventListener('resize', () => {
    if(innerWidth < 768){
      slider()
    }else {
      item.dataset.mobile = 'false'
    }
    })
  })
}

slider()



















