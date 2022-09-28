// Ao clicar no botão, se login e senha forem válidos, emite um alerta contendo o texto "Olá, Tryber!"

const loginButton = document.querySelector('.btn-primary');
const emailBox = document.querySelector('#email');
const passwordBox = document.querySelector('#password');

loginButton.addEventListener('click', () => {
  if (emailBox.value === '' || passwordBox.value === '') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// O contador de caracteres deve ser atualizado conforme o conteúdo do textarea muda

const comment = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function count() {
  const counterText = comment.value;
  const number = counterText.length;
  counter.innerText = 500 - number;
}

comment.addEventListener('keyup', count);

// Ao marcar o campo de confirmação, o botão de Enviar deve ser habilitado

const agree = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

agree.addEventListener('click', () => {
  if (agree.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Gerar div com todas infos.
const form = document.querySelector('#evaluation-form');
const formData = document.querySelector('#form-data');

const nameTrybe = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.family');
const subject = document.querySelectorAll('.subject');
const valuation = document.querySelectorAll('.valuation');

const getName = document.querySelector('#getName');
const getEmail = document.querySelector('#getEmail');
const getHouse = document.querySelector('#getHouse');
const getFamily = document.querySelector('#getFamily');
const getSubject = document.querySelector('#getSubject');
const getValuation = document.querySelector('#getValuation');
const getTextarea = document.querySelector('#getTextarea');

function getSelected(param) {
  let paramSelected = '';
  for (let i = 0; i < param.length; i += 1) {
    if (param[i].checked) {
      paramSelected = param[i].value;
    }
  }
  return paramSelected;
}

function getSelectedSubject(param) {
  let paramSelected = '';
  for (let i = 0; i < param.length; i += 1) {
    if (param[i].checked && paramSelected === '') {
      paramSelected += `${param[i].value}`;
    } else if (param[i].checked) {
      paramSelected += `, ${param[i].value}`;
    }
  }
  return paramSelected;
}

function getInfo(event) {
  event.preventDefault();
  const familySelected = getSelected(family);
  const subjectSelected = getSelectedSubject(subject);
  const valuationSelected = getSelected(valuation);
  form.style.display = 'none';
  formData.style.display = 'flex';
  getName.innerText = `${nameTrybe.value} ${lastName.value}`;
  getEmail.innerText = email.value;
  getHouse.innerText = house.value;
  getFamily.innerText = familySelected;
  getSubject.innerText = subjectSelected;
  getValuation.innerText = valuationSelected;
  getTextarea.innerText = comment.value;
}

submitButton.addEventListener('click', getInfo);