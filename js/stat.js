'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CHADOW_GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 25;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function (ctx, x, y, color, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
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
  renderCloud(ctx, CLOUD_X + CHADOW_GAP, CLOUD_Y + CHADOW_GAP, 'rgba(0, 0, 0, 0.7)', CLOUD_WIDTH, CLOUD_HEIGHT);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px  PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var cordinateX = CLOUD_X + GAP * 2 + (GAP * 2 + barWidth) * i;
    var diagramHeight = BAR_HEIGHT * times[i] / maxTime;

    ctx.fillStyle = '#445578';
    ctx.fillText(
        players[i],
        cordinateX,
        CLOUD_Y + GAP * 10
    );

    ctx.fillText(
        Math.round(times[i]),
        cordinateX,
        CLOUD_HEIGHT - diagramHeight - GAP * 1.5
    );

    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + Math.random() * 100 + '%, 50%)';

    ctx.fillRect(
        CLOUD_X + TEXT_WIDTH + (GAP * 2 + barWidth) * i,
        CLOUD_Y * 2.5 + GAP * 9,
        barWidth, diagramHeight * (-1)
    );
  }
};
