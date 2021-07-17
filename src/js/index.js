import '../scss/style.scss'

import './slider'

/*Modal*/

let buttonCall = document.querySelectorAll('.btn--call')
let buttonMessage = document.querySelectorAll('.btn--chat')
let modalCall = document.getElementById('modal--call')
let modalMessage = document.getElementById('modal--message')
let menuClose = document.querySelector('.sidebar__header').childNodes[1].children
let modals = document.querySelectorAll('.modal')

/**/

let menuButton = document.querySelector('.btn--burger')
let menu = document.getElementsByTagName('aside')
let main = document.getElementsByTagName('main')
let body = document.getElementsByTagName('body')



window.addEventListener('resize', () => {
  if(window.screen.width >= 1120){
    menu[0].classList.remove('menu--open')
    main[0].classList.remove('main--swing')
  }
})



buttonCall.forEach( item => {
    item.addEventListener('click', () => {
        modalCall.classList.add('modal--open')
        window.scrollTo(0,0)
        body[0].classList.add('scroll--lock')
    })
})

buttonMessage.forEach( item => {
    item.addEventListener('click', () => {
        modalMessage.classList.add('modal--open')
        window.scrollTo(0,0)
        body[0].classList.add('scroll--lock')
    })
})

modals.forEach( m => {
  let modalClose = m.querySelector('.modal__container').childNodes[1].children;
  m.addEventListener('click', (e) => {
    let target = e.target
    if(target.classList.contains('modal')){
      m.classList.remove('modal--open')
      body[0].classList.remove('scroll--lock')
    }
  })
  modalClose[0].addEventListener('click', () => {
     m.classList.remove('modal--open')
      body[0].classList.remove('scroll--lock')
  })
})



/*Menu */

menuButton.addEventListener('click', () => {
    menu[0].classList.add('menu--open')
    main[0].classList.add('main--swing')
})

menuClose[0].addEventListener('click', () => {
  if(window.screen.width <= 1120){
    menu[0].classList.remove('menu--open')
    main[0].classList.remove('main--swing')
  }
})

/*Dropdown */
let brandsDropdown = document.querySelector('.drop--brands')
let typesDropdown = document.querySelector('.drop--types')
let brands = document.querySelector('.brands')
let invisiblesBrands = brands.querySelectorAll('.invisible')
let types = document.querySelector('.types')
let invisibleTypes = types.querySelectorAll('.invisible')
let dropSection = document.querySelector('.service__content__dropdown')
let textDropdown = dropSection.getElementsByTagName('span')
let invisibleText = document.querySelector('.service__content__text--invisible')

brandsDropdown.addEventListener('click', () => {
    for(let i = 0; i < invisiblesBrands.length; i++){
        invisiblesBrands[i].classList.toggle('invisible')
    }
    let img = brandsDropdown.getElementsByTagName('img')
    img[0].classList.toggle('img--rotate')
})

typesDropdown.addEventListener('click', () => {
    for(let i = 0; i < invisibleTypes.length; i++){
        invisibleTypes[i].classList.toggle('invisible')
    }
    let img = typesDropdown.getElementsByTagName('img')
    img[0].classList.toggle('img--rotate')
})

textDropdown[0].addEventListener('click', () => {
    invisibleText.classList.toggle('service__content__text--invisible')
    let img = dropSection.getElementsByTagName('img')
    img[0].classList.toggle('img--rotate')
})






















