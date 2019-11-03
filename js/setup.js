'use strict';

(function () {
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
  var QUANTITY_WIZARDS = 4;
  var fragment = document.createDocumentFragment();

  var wizardAppearanceInput = window.util.setup.querySelectorAll('.setup-wizard-appearance input');

  var wizardEyes = window.util.setup.querySelector('.wizard-eyes');
  var inputWizardEyes = wizardAppearanceInput[1];
  var wizardCoat = window.util.setup.querySelector('.wizard-coat');
  var inputWizardCoat = wizardAppearanceInput[0];
  var setupFireball = window.util.setup.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupFireball.querySelector('input');
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
    var wizards = generateWizards(QUANTITY_WIZARDS);
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
  };

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
    var eyesColor = generateColor(EYES_COLORS);
    wizardEyes.style.fill = eyesColor;
    inputWizardEyes.value = eyesColor;
  });
  wizardCoat.addEventListener('click', function () {
    var coatColor = generateColor(COAT_COLORS);
    wizardCoat.style.fill = coatColor;
    inputWizardCoat.value = coatColor;
  });
  setupFireball.addEventListener('click', function () {
    var fireballColor = generateColor(FIREBALL_COLORS);
    setupFireball.style.backgroundColor = fireballColor;
    inputFireballColor.value = fireballColor;
  });

  init();
})();


