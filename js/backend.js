// Файл backend.js
'use strict';

(function () {
  var URL_GET = 'https://js.dump.academy/code-and-magick/data';

  var load = function (onSucces, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSucces(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел обработаться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000;

    xhr.open('GET', URL_GET);
    xhr.send();
  };

  var URL_POST = 'https://js.dump.academy/code-and-magick';

  var save = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', URL_POST);

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел обработаться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000;

    xhr.send();
  };

  window.backend = {
    load: load,
    save: save
  };
})();
