'use strict';

var usserDialog = document.querySelector('.setup');
usserDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var sililarWizzardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surenames = ['да Марья', 'Верон Себастьян', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var generateName = function (name, surename) {
  return name[Math.round(Math.random() * 8)] + ' ' + surename[Math.round(Math.random() * 8)];
};

var generateCoatColor = function (color) {
  return color[Math.round(Math.random() * 5)];
};

var generateEyesColor = function (color) {
  return color[Math.round(Math.random() * 5)];
};

var wizards = [
  {
    name: generateName(names, surenames),
    coatColor: generateCoatColor(coatColors),
    eyesColor: generateEyesColor(eyesColors)
  },
  {
    name: generateName(names, surenames),
    coatColor: generateCoatColor(coatColors),
    eyesColor: generateEyesColor(eyesColors)
  },
  {
    name: generateName(names, surenames),
    coatColor: generateCoatColor(coatColors),
    eyesColor: generateEyesColor(eyesColors)
  },
  {
    name: generateName(names, surenames),
    coatColor: generateCoatColor(coatColors),
    eyesColor: generateEyesColor(eyesColors)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = sililarWizzardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

