"use strict"; 

var canvas, ctx,
brush = {
    x: 0,
    y: 0,
    color: '#000000',
    size: 5,
    down: false,
},
strokes = [],
currentStroke = null;

function redraw () {
ctx.clearRect(0, 0, canvas.width(), canvas.height());
ctx.lineCap = 'round';
for (var i = 0; i < strokes.length; i++) {
    var s = strokes[i];
    ctx.strokeStyle = s.color;
    ctx.lineWidth = s.size;
    ctx.beginPath();
    ctx.moveTo(s.points[0].x, s.points[0].y);
    for (var j = 0; j < s.points.length; j++) {
        var p = s.points[j];
        ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
  }
}

function findPos(obj) {
  var curleft = 0, curtop = 0;
  if (obj.offsetParent) {
      do {
          curleft += obj.offsetLeft;
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
      return { x: curleft, y: curtop };
  }
  return undefined;
}

function init () {
  canvas = $('#canvas');
  canvas.attr({
      width: 580,
      height: 370,
  });
  ctx = canvas[0].getContext('2d');

  function mouseEvent (e) {
    var pos = findPos(this);
      brush.x = e.pageX - pos.x;
      brush.y = e.pageY - pos.y;

      currentStroke.points.push({
          x: brush.x,
          y: brush.y,
      });

      redraw();
  }

  canvas.mousedown(function (e) {
      brush.down = true;

      currentStroke = {
          color: brush.color,
          size: brush.size,
          points: [],
      };

      strokes.push(currentStroke);

      mouseEvent(e);
  }).mouseup(function (e) {
      brush.down = false;

      mouseEvent(e);

      currentStroke = null;
  }).mousemove(function (e) {
      if (brush.down)
          mouseEvent(e);
  });
}

 $(init);