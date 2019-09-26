'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CHADOW_GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 25;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = CLOUD_HEIGHT - GAP * 4;
var barWidth = 40;

var renderCloud = function (ctx, x ,y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CHADOW_GAP, CLOUD_Y + CHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(
        players[i],
        CLOUD_X + GAP * 2 + (CLOUD_X) * i,
        CLOUD_Y + GAP * 7
    );

    ctx.fillStyle = '#445578';
    ctx.fillRect(
        CLOUD_X + TEXT_WIDTH + (GAP + barWidth) * i,
        CLOUD_Y * 2 + GAP * 6,
        barWidth * times[i] / maxTime, BAR_HEIGHT * (-1)
    );
  }
};
