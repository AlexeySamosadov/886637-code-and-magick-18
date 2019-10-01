'use strict';

var usserDialog = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var sililarWizzardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surenames = ['да Марья', 'Верон Себастьян', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var init = function () {
  usserDialog.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
  similarListElement.appendChild(fragment);
};

var randomNumber = function (maxNumber) {
  return Math.round(Math.random() * maxNumber);
};

var generateName = function (name, surename) {
  return name[randomNumber(8)] + ' ' + surename[randomNumber(8)];
};

var generateCoatColor = function (color) {
  return color[randomNumber(5)];
};

var generateEyesColor = function (color) {
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
      name: generateName(names, surenames),
      coatColor: generateCoatColor(coatColors),
      eyesColor: generateEyesColor(eyesColors)
    };
    array.push(wizard);
  }

  return array;
};

var wizards = generateWizards(4);
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

init();


