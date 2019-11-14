// Файл render.js
'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var QUANTITY_WIZARDS = 4;
  var sililarWizzardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = sililarWizzardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var addWizardsToWizardList = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < QUANTITY_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment); // Добавляет фрагмент в лист магов
    setupSimilar.classList.remove('hidden'); // Показывает список визардов
  };

  window.render = {
    wizzard: addWizardsToWizardList
  };

})();
