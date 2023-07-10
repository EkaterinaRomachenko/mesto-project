 const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-26',
  headers: {
    authorization: 'dabe7799-e763-45ae-be1f-3576699b59b0',
    'Content-Type': 'application/json'
  }
}
function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
 }


// инициализация карточек
export function getCards(){
  return fetch(`${config.baseUrl}/cards`, {
  headers: config.headers
})
  .then(res => {return getResponseData(res)})
}

// инициализация  редактирование профиля
export function getMyProfile(){
  return fetch(`${config.baseUrl}/users/me`, {
  headers: config.headers
})
 .then(res => {return getResponseData(res)})
}


export function editProfile ({ name, about }) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ name, about })
  })
  .then(res => {return getResponseData(res)})
}

export function addNewCard ({ name, link }) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({ name, link })
  })
  .then(res => {return getResponseData(res)})
}

export function deleteCard({id}){
  return fetch(`${config.baseUrl}/cards/${id}`, {
    headers: config.headers,
    method: 'DELETE'
  })
  .then(res => {return getResponseData(res)})
}

export function cardLikes({id,isLikes}){
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: isLikes ? 'DELETE' : 'PUT',
    headers: config.headers,
  })
  .then(res => {return getResponseData(res)})
}

export function editAvatar({avatar}){
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ avatar })
  })
  .then(res => {return getResponseData(res)})
}
