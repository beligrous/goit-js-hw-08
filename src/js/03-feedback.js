import throttle from 'lodash.throttle';
const formElem = document.querySelector('.feedback-form');
const emailElem = document.querySelector('.feedback-form input');
const messageElem = document.querySelector('.feedback-form textarea');

formElem.addEventListener('input', throttle(onInputSaveData, 500));
formElem.addEventListener('submit', onSubmitClick);
document.addEventListener('DOMContentLoaded', onSiteReload);
let getDataItem = localStorage.getItem('feedback-form-state');

function onInputSaveData(e) {
  const data = {};
  data.email = emailElem.value;
  data.message = messageElem.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSiteReload() {
  if (getDataItem) {
    let storageData = JSON.parse(getDataItem);
    emailElem.value = storageData.email;
    messageElem.value = storageData.message;
  }
}

function onSubmitClick(e) {
  e.preventDefault();
  console.log(JSON.parse(getDataItem));
  localStorage.removeItem('feedback-form-state');
  emailElem.value = '';
  messageElem.value = '';
}
