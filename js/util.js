// Файл util.js
'use strict';

(function () {
  var BUTTON_CODES = {
    ESC: 27,
    ENTER: 13
  };

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === BUTTON_CODES.ESC) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === BUTTON_CODES.ENTER) {
      action();
    }
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    setup: document.querySelector('.setup')
  };
})();
