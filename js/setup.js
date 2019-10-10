'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var sililarWizzardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURENAMES = ['да Марья', 'Верон Себастьян', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var fragment = document.createDocumentFragment();

var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardCoat = setup.querySelector('.wizard-coat');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var init = function () {
  addWizardsToFragment();
  setupSimilar.classList.remove('hidden');
  similarListElement.appendChild(fragment);
};

var randomNumber = function (maxNumber) {
  return Math.round(Math.random() * maxNumber);
};

var generateName = function (name, surename) {
  return name[randomNumber(8)] + ' ' + surename[randomNumber(8)];
};

var generateColor = function (color) {
  return color[randomNumber(5)];
};

var renderWizard = function (wizard) {
  var wizardElement = sililarWizzardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var generateWizards = function (length) {
  var array = [];
  for (var i = 0; i < length; i++) {
    var wizard = {
      name: generateName(NAMES, SURENAMES),
      coatColor: generateColor(COAT_COLORS),
      eyesColor: generateColor(EYES_COLORS)
    };
    array.push(wizard);
  }

  return array;
};

var addWizardsToFragment = function () {
  var wizards = generateWizards(4);
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = generateColor(EYES_COLORS);
});
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = generateColor(COAT_COLORS);
});
setupFireball.addEventListener('click', function () {
  setupFireball.style.backgroundColor = generateColor(FIREBALL_COLORS);
});

init();


