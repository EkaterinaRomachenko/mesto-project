
// попапы
const popupProfile = document.querySelector('.popup_profile');
const popupPlace = document.querySelector('.popup_place');
const popupImage = document.querySelector('.popup_image');
const popupImageTitle = document.querySelector('.popup__image-title')
const popupImagePicture = document.querySelector('.popup__image')
// формы
const profileForm = document.querySelector('.popup__form-profile');
const placeForm = document.querySelector('.popup__form-place');
// инпуты
const nameInput = document.querySelector('#input-name');
const jobInput = document.querySelector('#input-info');
const titleInput = document.querySelector('#input-title');
const linkInput = document.querySelector('#input-link');
// кнопки
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.popup__icon-close_profile');
const profileAddButton = document.querySelector('.profile__add-button');
const placeCloseButton = document.querySelector('.popup__icon-close_place');
const imageCloseButton = document.querySelector('.popup__icon-close_image');
// данные профиля
const profTitle = document.querySelector('.profile__title');
const profSubtitle = document.querySelector('.profile__subtitle');
// карточки
const placeContainer = document.querySelector('.places');
const placeTemplate = document.querySelector('#place-template').content;



//  Открытие и закрытие popup
function openPopup(popup){
  popup.classList.add('popup_opened')
}

function closePopup(popup){
  popup.classList.remove('popup_opened')
}

// открытие и закрытие профиля
profileEditButton.addEventListener('click',function(){
  openPopup(popupProfile)
  fillProfileInputs()
})

profileCloseButton.addEventListener('click',function(){
  closePopup(popupProfile)
})

// закрытие попапа с картинкой
imageCloseButton.addEventListener('click', function(){
  closePopup(popupImage)
})

function fillProfileInputs(){
  nameInput.value = profTitle.textContent;
  jobInput.value = profSubtitle.textContent;
}

// Редактирование имени и информации о себе
function handlerProfileFormSubmit (evt) {
  evt.preventDefault();
  // значение импутов
  nameValue = nameInput.value;
  jobValue = jobInput.value;

  profTitle.textContent = nameValue;
  profSubtitle.textContent = jobValue;

  // закрытие кнопка сохранить
  closePopup(popupProfile)
}
profileForm.addEventListener('submit', handlerProfileFormSubmit);


// Форма добавления карточки (открытие и закрытие)
profileAddButton.addEventListener('click', function(){
  openPopup(popupPlace)
})

placeCloseButton.addEventListener('click', function(){
  closePopup(popupPlace)
})



//Шесть карточек «из коробки»
const initialCards = [
  {
    name: 'Озеро Байкал',
    link: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  },
  {
    name: 'Горный Алтай',
    link: 'https://images.unsplash.com/photo-1641555128422-12a08a5028f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
  },
  {
    name: 'Гранд-Каньон',
    link: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/grand-canyon-2.jpg'
  },
  {
    name: 'Львиная Скала',
    link: 'https://gochina.ru/uploads/images/novosti/sri-lanka/lvinaya-krepost-sigiriya-1.jpg'
  },
  {
    name: 'Ниагарский водопад',
    link: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Niagara-falls.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://tripplanet.ru/wp-content/uploads/europe/russia/elbrus/mountain-elbrus.jpg'
  },
  {
    name: 'Мон Сен-Мишель',
    link: 'https://paris10.ru/wp-content/webpc-passthru.php?src=https://paris10.ru/wp-content/uploads/2020/05/radek-kozak-G3EbtPY77nU-unsplash-scaled-1-1030x687.jpg&nocache=1'
  },
  {
    name: 'Му Кан Чай',
    link: 'https://travellan.ru/upload/News%20of%20Travel/ce21fbb6ea.Icvuz.jpg'
  },
  {
    name: 'Пирамида Хеопса',
    link: 'https://lifeglobe.net/x/entry/1635/1.jpg'
  }
  ];

function createCardEl(element){
  const cardPlace = placeTemplate.querySelector('.place').cloneNode(true);

  cardPlace.querySelector('.place__title').textContent = element.name
  cardPlace.querySelector('.place__img').src = element.link

  // лайк карточкам
  cardPlace.querySelector('.place__like-button').addEventListener('click', liceCard);

  // удаление карточки
  const placeRemoveButton = cardPlace.querySelector('.place__remove-button');
  placeRemoveButton.addEventListener('click', function(){
    placeRemoveButton.closest('.place').remove()
  })

  // открытие попапа с картинкой

const popupImageElement = cardPlace.querySelector('.place__img');
popupImageElement.addEventListener('click', function(){

  popupImageTitle.textContent = element.name
  popupImagePicture.src = element.link
  popupImagePicture.alt = element.name

  openPopup(popupImage)
})

  return cardPlace
}

// лайк кнопка
function liceCard(evt) {
  evt.target.classList.toggle('place__like-button_active');
}

initialCards.forEach(function(cardPlace){
  const placeElement = createCardEl(cardPlace)
  placeContainer.append(placeElement)
})

//Добавление новой карточки (+ кнопка сохранить)
function handlerFormSubmitPlace(evt) {
  evt.preventDefault();
// значение инпутов
 const newCardPlace = {
  name: titleInput.value,
  link: linkInput.value
 }

  const placeElement = createCardEl(newCardPlace)
  // новая карточка в начало
  placeContainer.prepend(placeElement)

// очищение формы карточки
evt.target.reset();

  // закрыть кнопку сохранить
  closePopup(popupPlace)
}
placeForm.addEventListener('submit', handlerFormSubmitPlace)
