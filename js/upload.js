// Файл upload.js
'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send();
  };

  var form = window.util.setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function () {
      window.util.setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
