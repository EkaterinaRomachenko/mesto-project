import {
  popupOpenedSelector,
  popupContainerImage,
  }
  from './utils.js'

// Открытие и закрытие popup
export function openPopup(popup){
  popup.classList.add(popupOpenedSelector)
  popup.addEventListener('click', keyHandlerOverlay)
  document.addEventListener('keydown', keyHandlerEsc)
}

export function closePopup(popup){
  popup.classList.remove(popupOpenedSelector)
  popup.removeEventListener('click', keyHandlerOverlay)
  document.removeEventListener('keydown',  keyHandlerEsc)
}

export function editPopup({
  elOpen,
  elClose,
  form,
  popup,
  onSubmit,
  onOpen
}) {
  // Если есть элемент открытия попапа, подключаем событие клика
  elOpen && elOpen.addEventListener('click', function () {
      openPopup(popup)
      onOpen && onOpen()
  })

  // Если есть в попапе форма, подключаем слушатель ее отправки
  form && form.addEventListener('submit', function (evt) {
      evt.preventDefault()
      onSubmit && onSubmit(evt)
      closePopup(popup)
  })

  // Подключаем событие закрытия попапа
  elClose.addEventListener('click', function () {
      closePopup(popup)

  })
}

// Закрытие по нажатию на оверлей
export function keyHandlerOverlay(evt) {
  const popupActive = document.querySelector(`.${popupOpenedSelector}`)
  if (!evt.target.closest(popupContainerImage) && popupActive) closePopup(popupActive)
}

// Закрытие по нажатию на Esc
export function  keyHandlerEsc(evt) {
  if (evt.key === 'Escape') {
      const popupActive = document.querySelector(`.${popupOpenedSelector}`)
      popupActive && closePopup(popupActive)

  }
}

