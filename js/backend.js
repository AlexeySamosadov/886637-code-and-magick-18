// Файл backend.js
'use strict';

(function () {
  var Url = {
    GET: 'https://js.dump.academy/code-and-magick/data',
    POST: 'https://js.dump.academy/code-and-magick'
  };

  var SERVER_CODE_OK = 200;
  var TIMEOUT = 10000;
  var startXhr = function (onSucces, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SERVER_CODE_OK) {
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
    xhr.timeout = TIMEOUT;

    // eslint-disable-next-line no-console
    return xhr;
  };

  var load = function (onSucces, onError) {
    var xhr = startXhr(onSucces, onError);
    xhr.open('Get', Url.GET);
    xhr.send();
  };

  var save = function (data, onSucces, onError) {
    var xhr = startXhr(onSucces, onError);
    xhr.open('POST', Url.POST);
    xhr.send(data);
  };


  // var newObj = [];
  // window.newObj = newObj;
  // var test = function (arr) {
  //   window.newObj = arr;
  //   return newObj;
  // };
  // load(test)
  // console.log(window.newObj);


  window.backend = {
    load: load,
    save: save
  };
})();
