// Файл util.js
'use strict';

(function () {
  var ESC_BUTTON_NUMBER = 27;
  var ENTER_BUTTON_NUMBER = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_BUTTON_NUMBER) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_BUTTON_NUMBER) {
        action();
      }
    },
    setup: document.querySelector('.setup')
  };
})();
