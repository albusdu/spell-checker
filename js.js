const toggleNav = () => {
  document.querySelector('header').classList.toggle('open')
}
document.querySelector('.nav--toggler').addEventListener('click', toggleNav)

const dropdownToggler = () => {
  let toggler = document.querySelectorAll('.dropdown--toggler')
  toggler.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('open')
    })
  })
}
dropdownToggler()

const closeDropdown = () => {
  let close = document.querySelectorAll('.dropdown__close')
  close.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentElement.parentElement.classList.remove('open')
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
      e.target.classList.add('dropdown__item--active')
      let selectedInfo =
        e.target.parentElement.parentElement.previousElementSibling
          .firstElementChild
      selectedInfo.innerHTML = e.target.innerHTML
      selectedInfo.setAttribute('value', e.target.innerHTML)
      e.target.parentElement.parentElement.parentElement.classList.remove(
        'open'
      )
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
