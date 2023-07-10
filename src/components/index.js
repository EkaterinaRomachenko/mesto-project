import '../styles/index.css'
import {openPopup,editPopup,closePopup} from './modal.js'
import{enableValidation,disabledSubmitButton} from './validate.js'
import {createCardPlace} from './card.js'
import {getMyProfile,editProfile,addNewCard,cardLikes,getCards, deleteCard,editAvatar} from './api'
import {
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
  popupImagePicture,
  formSubmitButtonPlace,popupAvatar, profAvatar,avatarLinkInput,profileAvatarEdit,avatarCloseButton,formSubmitButtonAvatar,avatarForm,  formSubmitButtonProfile}
  from './utils.js'

// включение валидации вызовом enableValidation
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

function loadCards(myUserId) {
  getCards()
  .then((cards) =>{
    // карточки (место)
        loadingCards({
            myUserId: myUserId,
            cards: cards,
            tmpl: placeTemplate,
            place: placeContainer,
            onClickCard: openImage
        })
  })
  .then((result) => {
    console.log(result)
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
}

const globals = {
  profile: null
}

getMyProfile()
.then((profile) =>{
  globals.profile = profile
  const myUserId = profile._id
  profTitle.textContent = profile.name
  profSubtitle.textContent = profile.about
  profAvatar.src = profile.avatar

  loadCards(myUserId)
})
.then((result) => {
  console.log(result)
})
.catch(err => console.log(`Ошибка.....: ${err}`))




//Редактировать профиль (попап)
editPopup({
  elOpen: profileEditButton,
  elClose: profileCloseButton,
  form: profileForm,
  popup: popupProfile,
  elSubmit: formSubmitButtonProfile,
  onSubmit: changeValue,
  onOpen: () => fillProfileInputs({  //устанавливаем значение инпутов
    name : globals.profile ? globals.profile.name : '',
    about : globals.profile ? globals.profile.about : ''
  })
})
//  новая карточка (попап)
editPopup({
  elOpen: profileAddButton,
  elClose: placeCloseButton,
  form: placeForm,
  popup: popupPlace,
  elSubmit: formSubmitButtonPlace,
  onSubmit: (evt) =>{
    return addNewCardPlace(evt)
  },
  onOpen: function(){
    disabledSubmitButton(formSubmitButtonPlace, 'form__submit-button_inactive')
  }
  })
// картинки (попап)
editPopup({
  elClose: imageCloseButton,
  popup: popupImage
})

// Инициализация попапа изменения аватара
editPopup({
  elOpen: profileAvatarEdit,
  elClose: avatarCloseButton,
  form: avatarForm,
  popup: popupAvatar,
  elSubmit: formSubmitButtonAvatar,
  onSubmit: editProfileAvatar,
  onOpen: function () {
    disabledSubmitButton(formSubmitButtonAvatar, 'form__submit-button_inactive')
  }
})

// Добавляем карточек на страницу при загрузке страницы
function loadingCards({ myUserId, cards, place, tmpl, onClickCard}) {
    cards.forEach(function(card) {
      const cardEl = createCardPlace({
        tmpl,
        myUserId,
        element:card,
        byClick: onClickCard,
        byDelete: deleteCard,
        byLikes: cardLikes
      })
      place.append(cardEl)
    })
}

// Добавляем новую карточку
function addNewCardPlace(evt) {
  // значение инпутов
  return addNewCard({name: titleInput.value, link: linkInput.value})
  // Добавляем функцию создания новой карточки
  .then((card)=>{
    const cardPlace = createCardPlace({
      myUserId: card.owner._id,
      element:card,
      tmpl: placeTemplate,
      byClick: openImage,
      byDelete: deleteCard,
      byLikes: cardLikes
    })
    // очищение формы карточек
      evt.target.reset()
    // новая карточка в начало
      placeContainer.prepend(cardPlace)
      closePopup(popupPlace)
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
}

// открытиe попапа с  картинкой
export function openImage(element) {
  popupImageTitle.textContent = element.name
  popupImagePicture.src = element.link
  popupImagePicture.alt = element.name
  openPopup(popupImage)
}

// Добавляем новую карточку профиля
function editProfileAvatar (evt) {
  return editAvatar({ avatar: avatarLinkInput.value})
    .then((res) => {
        profAvatar.src = res.avatar
        evt.target.reset()
        closePopup(popupAvatar)
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
}

// Уравниваем новые значение имени, описания с введенными
function fillProfileInputs({ name, about }) {
  nameInput.value = name
  jobInput.value = about
}


// Меняем значение value у input
function changeValue() {
  return editProfile({name: nameInput.value, about:jobInput.value})
  .then((profile) => {
    globals.profile = profile
    profTitle.textContent = profile.name
    profSubtitle.textContent = profile.about
    closePopup(popupProfile)
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
}




