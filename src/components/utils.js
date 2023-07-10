// попапы
export const popupProfile = document.querySelector('.popup_profile');
export const popupPlace = document.querySelector('.popup_place');
export const popupImage = document.querySelector('.popup_image');
export const popupAvatar = document.querySelector('.popup_avatar')

// данные профиля
export const profTitle = document.querySelector('.profile__title');
export const profSubtitle = document.querySelector('.profile__subtitle');
export const profAvatar = document.querySelector('.profile__avatar')

// данные попап (изображения)
export const popupImageTitle = popupImage.querySelector('.popup__image-title')
export const popupImagePicture = popupImage.querySelector('.popup__image')

// формы
export const profileForm = document.forms['form-profile'];
export const placeForm = document.forms['form-place'];
export const avatarForm = document.forms['form-avatar'];

// инпуты
export const nameInput = document.querySelector('#input-name');
export const jobInput = document.querySelector('#input-info');
export const titleInput = document.querySelector('#input-title');
export const linkInput = document.querySelector('#input-link');
export const avatarLinkInput = avatarForm.querySelector('[name="linkofavatar"]')

// кнопки профиля
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');

export const profileAvatarEdit = document.querySelector('.profile__avatar-edit')

// кнопки закрытие попапа
export const profileCloseButton = document.querySelector('.popup__icon-close_profile'); // (профиль)
export const placeCloseButton = document.querySelector('.popup__icon-close_place');// ( место)
export const imageCloseButton = document.querySelector('.popup__icon-close_image'); // (изображения)
export const avatarCloseButton = document.querySelector('.popup__icon-close_avatar') // (аватарка)


// кнопка сохранить (попап)
export const formSubmitButtonPlace = placeForm.querySelector('.form__submit-button')
export const formSubmitButtonAvatar = avatarForm.querySelector('.form__submit-button')
export const formSubmitButtonProfile = profileForm.querySelector('.form__submit-button')


// карточки (templete)
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
export const placeQuantityLikesSelector = '.place__quantityLikes'




