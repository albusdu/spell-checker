const toggleNav = () => {
  document.querySelector('header').classList.toggle('open')
}
document.querySelector('.nav--toggler').addEventListener('click', toggleNav)

const dropdownToggler = () => {
  let toggler = document.querySelectorAll('.dropdown--toggler')
  toggler.forEach((item) => {
    item.addEventListener('click', () => {
      let dropdowns = document.querySelectorAll('.dropdown')
      item.parentElement.classList.toggle('open')
      dropdowns.forEach((elem) => {
        if (
          item.parentElement.getAttribute('id') ===
          elem.getAttribute('data-for')
        ) {
          let posX = window.scrollX + item.getBoundingClientRect().left - 6
          let posY =
            window.scrollY +
            item.getBoundingClientRect().top +
            item.offsetHeight +
            15
          elem.style.cssText = `top: ${posY}px;left:${posX}px; width: 200px`
          elem.classList.toggle('open')
        }
      })
    })
  })
}
dropdownToggler()

const closeDropdown = () => {
  let close = document.querySelectorAll('.dropdown__close')
  close.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentElement.classList.remove('open')
      let dropdownElems = document.querySelectorAll('.dropdown__elem')
      dropdownElems.forEach((elem) => {
        if (
          elem.getAttribute('id') ===
          item.parentElement.getAttribute('data-for')
        ) {
          elem.classList.remove('open')
        }
      })
    })
  })
}
closeDropdown()

const selectDropdown = () => {
  let dropdownItems = document.querySelectorAll('.dropdown__item')
  dropdownItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      let items = e.target.parentElement.children
      for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('dropdown__item--active')) {
          items[i].classList.remove('dropdown__item--active')
        }
      }
      let dropdownElems = document.querySelectorAll('.dropdown__elem')
      dropdownElems.forEach((elem) => {
        if (
          elem.getAttribute('id') ===
          item.parentElement.parentElement.getAttribute('data-for')
        ) {
          e.target.classList.add('dropdown__item--active')
          let selectedInfo = elem.children[0].children[0]
          selectedInfo.innerHTML = e.target.innerHTML
          selectedInfo.setAttribute('value', e.target.innerHTML)
          elem.classList.remove('open')
          e.target.parentElement.parentElement.classList.remove('open')
        }
      })
    })
  })
  let activeFeature = document.querySelector('.features__item--active')
  activeFeature.addEventListener('click', () => {
    activeFeature.parentElement.classList.toggle('open')
  })
}
selectDropdown()

const setTheme = () => {
  if (localStorage.themeColor) {
    document.documentElement.setAttribute(
      'style',
      '--mainColor: ' + localStorage.themeColor + ''
    )
  } else {
    document.documentElement.setAttribute('style', '--mainColor: #eb4d4b')
  }
  const colorItems = document.querySelectorAll('.color__item')
  colorItems.forEach((color) => {
    color.addEventListener('click', (e) => {
      let themeColor = color.getAttribute('data-color')
      localStorage.setItem('themeColor', themeColor)
      document.documentElement.setAttribute(
        'style',
        '--mainColor: ' + themeColor + ''
      )
      color.parentElement.parentElement.classList.remove('open')
    })
  })
}
setTheme()

const headerBackground = () => {
  let background = document.querySelector('.header--background')
  background.parentElement.classList.remove('open')
}
document
  .querySelector('.header--background')
  .addEventListener('click', headerBackground)

const colorPos = () => {
  if (window.innerWidth > 1023) {
    let a = document.querySelector('.nav--top').offsetWidth
    let b = document.querySelector('.nav--bottom').offsetWidth
    document.querySelector('.nav__item--color').style.cssText = `right:${
      a + b + 11
    }px; top: 50%`
  } else if (window.innerWidth < 768) {
    document.querySelector(
      '.nav__item--color'
    ).style.cssText = `top: 0; right: 0;`
  } else {
    document.querySelector(
      '.nav__item--color'
    ).style.cssText = `top: calc(100% + 41px); right: 0;`
  }
}
colorPos()
window.onresize = colorPos
