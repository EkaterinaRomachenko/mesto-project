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
  formSubmitButton,popupAvatar, profAvatar,avatarLinkInput,profileAvatarEdit,avatarCloseButton,formSubmitButtonAvatar,avatarForm,  formSubmitButtonProfile, deleteForm, popupDelete, formDeleteButton}
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
  getCards().then((cards) =>{
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
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  });
}

getMyProfile().then((res) =>{
  const myUserId = res._id
  profTitle.textContent = res.name
  profSubtitle.textContent = res.about

  loadCards(myUserId)

  // устанавливаем значение инпутов
  fillProfileInputs({
    name : res.name,
    job : res.about
  })

  //Редактировать профиль (попап)
  editPopup({
    elOpen: profileEditButton,
    elClose: profileCloseButton,
    form: profileForm,
    popup: popupProfile,
    onSubmit: changeValue
  })
  //  новая карточка (попап)
  editPopup({
    elOpen: profileAddButton,
    elClose: placeCloseButton,
    form: placeForm,
    popup: popupPlace,
    onSubmit: (evt) =>{
      addNewCardPlace(evt,myUserId)
    },
    onOpen: function(){
      disabledSubmitButton(formSubmitButton, 'form__submit-button_inactive')
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
    onSubmit: editProfileAvatar,
    onOpen: function () {
      disabledSubmitButton(formSubmitButtonAvatar, 'form__submit-button_inactive')
    }
  })
})
.then((result) => {
  console.log(result)
})
.catch((err) => {
  console.log(err); // выводим ошибку в консоль
});


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
  addNewCard({name: titleInput.value, link: linkInput.value})
  // Добавляем функцию создания новой карточки
  .then((res)=>{
    const cardPlace = createCardPlace({
      element:res,
      tmpl: placeTemplate,
      byClick: openImage,
      byDelete: deleteCard,
      byLikes: cardLikes
    })
  // новая карточка в начало
  placeContainer.prepend(cardPlace)
  // очищение формы карточек
  evt.target.reset()
  })
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
  editAvatar({ avatar: avatarLinkInput.value })
      .then((res) => {
          profAvatar.src = res.avatar
          evt.target.reset()
      })
}

// Уравниваем новые значение имени, описания с введенными
function fillProfileInputs({ name, job }) {
  nameInput.value = name
  jobInput.value = job
}

// Меняем значение value у input
function changeValue() {
  profTitle.textContent = nameInput.value
  profSubtitle.textContent = jobInput.value
  editProfile({name: nameInput.value, about:jobInput.value})
}

// UX всех форм
formSubmitButton.addEventListener('click', function(){
  formSubmitButton.innerHTML = 'Сохранение...'
})

formSubmitButtonAvatar.addEventListener('click', function(){
  formSubmitButtonAvatar.innerHTML = 'Сохранение...'
})

formSubmitButtonProfile.addEventListener('click', function(){
  formSubmitButtonProfile.innerHTML = 'Сохранение...'
})
