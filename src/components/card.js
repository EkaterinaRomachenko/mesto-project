import {
  placeSelector,
  imageSelector,
  titleSelector,
  btnLikeSelector,
  placeRemoveBthSelector,
  placeBtnLikeActiveSelector}
  from './utils.js'



// функция создания элемента карточки
export function createCardPlace(element, tmpl, byClick) {
  const card = tmpl.cloneNode(true)
    const image = card.querySelector(imageSelector)
    const title = card.querySelector(titleSelector)
    const btnLike = card.querySelector(btnLikeSelector)
    const placeRemoveButton = card.querySelector(placeRemoveBthSelector)

  title.textContent = element.name
  image.src = element.link
  image.alt = element.name

  // Добавляем лайк к карточке
  btnLike.addEventListener('click', function (e) {
      e.target.classList.toggle(placeBtnLikeActiveSelector)
  })
  // Слушатель удаления карточки с страницы
  placeRemoveButton.addEventListener('click', function () {
    placeRemoveButton.closest(placeSelector).remove()
  })
  // Слушатель открытия картинки
  image.addEventListener('click', function () {
      byClick(element)
  })
  return card
}


