// Файл similar.js
'use strict';

(function () {
  var wizards = [];

  var succesHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var getRang = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 1;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    var sortedWizards = wizards.sort(function (left, right) {
      var rangDifference = getRang(right) - getRang(left);
      if (rangDifference === 0) {
        rangDifference = namesComparator(left.name, right.name);
      }
      return rangDifference;
    });
    window.render.wizzard(sortedWizards);
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
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(updateWizards, 500);
  });

  var coatColor;
  var lastTimeout;
  wizardCoat.addEventListener('click', function () {
    var newColor = generateColor(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    inputWizardCoat.value = newColor;
    coatColor = newColor;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(updateWizards, 500);
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
