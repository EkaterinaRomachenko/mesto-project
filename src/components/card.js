import {
  placeSelector,
  imageSelector,
  titleSelector,
  btnLikeSelector,
  placeRemoveBthSelector,
  placeBtnLikeActiveSelector,
  placeQuantityLikesSelector}
  from './utils.js'

  function isLikes (likes, myUserId) {
    return likes.find(like => like._id === myUserId)
  }

// функция создания элемента карточки
export function createCardPlace({myUserId,element, tmpl, byClick,byLikes,byDelete}) {
  const card = tmpl.cloneNode(true)
    const image = card.querySelector(imageSelector)
    const title = card.querySelector(titleSelector)
    const btnLike = card.querySelector(btnLikeSelector)
    const placeRemoveButton = card.querySelector(placeRemoveBthSelector)
    const likesEl = card.querySelector(placeQuantityLikesSelector)

  title.textContent = element.name
  image.src = element.link
  image.alt = element.name
  likesEl.textContent = element.likes.length

  if(isLikes(element.likes,myUserId)){
   btnLike.classList.add(placeBtnLikeActiveSelector)
  } else {
   btnLike.classList.remove(placeBtnLikeActiveSelector)
  }


  // Добавляем лайк к карточке
  btnLike.addEventListener('click', function (e) {
  const likeCard = isLikes(element.likes, myUserId)
  byLikes({ id: element._id,isLikes:likeCard})
  .then((res) => {
    e.target.classList.toggle(placeBtnLikeActiveSelector)
    likesEl.textContent =res.likes.length
    element.likes = res.likes
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
})

if (myUserId === element.owner._id) {
  // Слушатель удаления карточки с страницы
  placeRemoveButton.addEventListener('click', function () {
    byDelete({ id: element._id })
      .then(() => {
        placeRemoveButton.closest(placeSelector).remove()
      })
      .catch(err => console.log(`Ошибка, невозможно удалить карточку: ${err}`))
    })
    // Показываем кнопку удаления
    placeRemoveButton.classList.add('show')
}

  // Слушатель открытия картинки
  image.addEventListener('click', function () {
      byClick(element)
  })
  return card
}


