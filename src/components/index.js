import '../styles/index.css'
import {openPopup,editPopup,closePopup} from './modal.js'
import{enableValidation} from './validate.js'
import {createCardPlace} from './card.js'
import {
  initialCards,
  popupProfile,
  profileEditButton,
  profileCloseButton,
  profileForm,
  profileAddButton,
  placeCloseButton,
  placeForm,
  popupPlace,
  imageCloseButton,
  popupImage,
  profTitle,
  profSubtitle,
  placeTemplate,
  placeContainer,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  popupImageTitle,
  popupImagePicture}
  from './utils.js'

// устанавливаем значение инпутов
fillProfileInputs({
  name : profTitle.textContent,
  job : profSubtitle.textContent
})

// Уравниваем новые значение имени, описания с введенными
function fillProfileInputs({ name, job }) {
  nameInput.value = name
  jobInput.value = job
}


// включение валидации вызовом enableValidation
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

//Редактировать профиль (попап)
editPopup({
  elOpen: profileEditButton,
  elClose: profileCloseButton,
  form: profileForm,
  popup: popupProfile,
  onSubmit: changeValue
})

// карточки (место)
loadingCards({
  cards: initialCards,
  tmpl: placeTemplate,
  place: placeContainer,
  onClickCard: openImage
})

// картинки (попап)
editPopup({
  elClose: imageCloseButton,
  popup: popupImage
})

//  новая карточка (попап)
editPopup({
  elOpen: profileAddButton,
  elClose: placeCloseButton,
  form: placeForm,
  popup: popupPlace,
  onSubmit: addNewCardPlace
})

// Добавляем карточек на страницу при загрузке страницы
function loadingCards({ cards, place, tmpl, onClickCard}) {
    cards.forEach(function (card) {
        const cardEl = createCardPlace(card, tmpl, onClickCard)
        place.append(cardEl)
    })
}

// Добавляем новую карточку
function addNewCardPlace(evt) {
  // получить значения импутов
  const newCardPlace = {
    name: titleInput.value,
    link: linkInput.value
   }
  // Добавляем функцию создания новой карточки
  const cardPlace = createCardPlace(newCardPlace, placeTemplate, openImage)

  // новая карточка в начало
  placeContainer.prepend(cardPlace)
  // очищение формы карточек
  evt.target.reset()
}

// открытиe попапа с  картинкой
export function openImage(element) {
  popupImageTitle.textContent = element.name
  popupImagePicture.src = element.link
  popupImagePicture.alt = element.name
  openPopup(popupImage)
}

// Меняем значение value у input
function changeValue() {
  profTitle.textContent = nameInput.value
  profSubtitle.textContent = jobInput.value
}


