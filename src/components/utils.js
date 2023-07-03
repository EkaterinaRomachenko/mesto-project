// попапы
export const popupProfile = document.querySelector('.popup_profile');
export const popupPlace = document.querySelector('.popup_place');
export const popupImage = document.querySelector('.popup_image');
export const popupImageTitle = popupImage.querySelector('.popup__image-title')
export const popupImagePicture = popupImage.querySelector('.popup__image')
// формы
export const profileForm = document.forms['form-profile'];
export const placeForm = document.forms['form-place'];
// инпуты
export const nameInput = document.querySelector('#input-name');
export const jobInput = document.querySelector('#input-info');
export const titleInput = document.querySelector('#input-title');
export const linkInput = document.querySelector('#input-link');
// кнопки
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileCloseButton = document.querySelector('.popup__icon-close_profile');
export const profileAddButton = document.querySelector('.profile__add-button');
export const placeCloseButton = document.querySelector('.popup__icon-close_place');
export const imageCloseButton = document.querySelector('.popup__icon-close_image');
export const formSubmitButton = placeForm.querySelector('.form__submit-button')
// данные профиля
export const profTitle = document.querySelector('.profile__title');
export const profSubtitle = document.querySelector('.profile__subtitle');
// карточки
export const placeContainer = document.querySelector('.places');
export const placeTemplate = document.querySelector('#place-template').content;
// селекторы
export const popupOpenedSelector = 'popup_opened';
export const popupContainerImage = '.popup__container, .popup__container-image';
export const placeSelector = '.place'
export const imageSelector = '.place__img'
export const titleSelector = '.place__title'
export const btnLikeSelector = '.place__like-button'
export const placeRemoveBthSelector = '.place__remove-button'
export const placeBtnLikeActiveSelector = 'place__like-button_active'



//массив с данными карточек
export const initialCards = [
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

