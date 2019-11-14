// Файл similar.js
'use strict';

(function () {
  var wizards = [];

  var succesHandler = function (data) {
    wizards = data;
    updateWizards();
  };


  var updateWizards = function () {
    var sameCoatWizards = wizards.filter(function (it) {
      return it.coatColor === coatColor;
    });
    var sameEyesWizards = wizards.filter(function (it) {
      return it.eyesColor === eyesColor;
    });
    window.render.wizzard(sameCoatWizards.concat(sameEyesWizards));
  };

  var errorHandler = function (errorMessage) {
    var div = document.createElement('div');
    div.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    div.style.position = 'absolute';
    div.style.left = 0;
    div.style.rigth = 0;
    div.style.fontSize = '30px';

    div.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', div);
  };

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardAppearanceInput = window.util.setup.querySelectorAll('.setup-wizard-appearance input');
  var wizardEyes = window.util.setup.querySelector('.wizard-eyes');
  var inputWizardEyes = wizardAppearanceInput[1];
  var wizardCoat = window.util.setup.querySelector('.wizard-coat');
  var inputWizardCoat = wizardAppearanceInput[0];
  var setupFireball = window.util.setup.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupFireball.querySelector('input');

  var randomNumber = function (maxNumber) {
    return Math.round(Math.random() * maxNumber);
  };

  var generateColor = function (color) {
    return color[randomNumber(5)];
  };

  var eyesColor;
  wizardEyes.addEventListener('click', function () {
    var newColor = generateColor(EYES_COLORS);
    wizardEyes.style.fill = newColor;
    inputWizardEyes.value = newColor;
    eyesColor = newColor;
    updateWizards();
  });

  var coatColor;
  wizardCoat.addEventListener('click', function () {
    var newColor = generateColor(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    inputWizardCoat.value = newColor;
    coatColor = newColor;
    updateWizards();
  });
  setupFireball.addEventListener('click', function () {
    var fireballColor = generateColor(FIREBALL_COLORS);
    setupFireball.style.backgroundColor = fireballColor;
    inputFireballColor.value = fireballColor;
  });

  window.backend.load(succesHandler, errorHandler);

  window.similar = {
    errorHandler: errorHandler
  };
})();
